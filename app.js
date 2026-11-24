/* ============================================================
   Word Adventure — app logic (vanilla JS, offline friendly)
   ============================================================ */
(function () {
  "use strict";

  const KEY = "wordAdventure.v1";
  const screen = document.getElementById("screen");
  let state = load();
  let parentUnlocked = false;
  let quiz = null; // active quiz session (session-only)
  let toastTimer = null;

  /* ---------- persistence ---------- */
  function freshState() {
    return {
      name: "Champion",
      pin: "1234",
      sound: true,
      streak: { count: 0, lastDate: null },
      bestStreak: 0,
      completed: {},   // lessonIndex -> { score, total, date, stars, mistakes:[] }
      learned: {},     // lessonIndex -> [wordIndex,...]
      activity: {},    // 'YYYY-MM-DD' -> { quizzes, words }
      totalStars: 0,
      createdAt: todayKey()
    };
  }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return freshState();
      const s = JSON.parse(raw);
      return Object.assign(freshState(), s);
    } catch (e) { return freshState(); }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
    updateTopStats();
  }

  /* ---------- date helpers ---------- */
  function pad(n) { return String(n).padStart(2, "0"); }
  function dateKey(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function todayKey() { return dateKey(new Date()); }
  function dayNum(key) {
    const p = key.split("-").map(Number);
    return Math.floor(Date.UTC(p[0], p[1] - 1, p[2]) / 86400000);
  }
  function shiftDay(key, delta) {
    const p = key.split("-").map(Number);
    const d = new Date(Date.UTC(p[0], p[1] - 1, p[2] + delta));
    return dateKey(new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  }
  const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
  function weekdayIndex(key) {
    const p = key.split("-").map(Number);
    return new Date(p[0], p[1] - 1, p[2]).getDay();
  }

  /* ---------- small helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function totalLessons() { return WORD_BANK.length; }
  function activeLessonIndex() {
    for (let i = 0; i < totalLessons(); i++) if (!state.completed[i]) return i;
    return totalLessons() - 1;
  }
  function allDone() { return Object.keys(state.completed).length >= totalLessons(); }
  function starsFor(score) { return score >= 9 ? 3 : score >= 7 ? 2 : score >= 5 ? 1 : 0; }
  function addActivity(kind) {
    const t = todayKey();
    if (!state.activity[t]) state.activity[t] = { quizzes: 0, words: 0 };
    state.activity[t][kind] = (state.activity[t][kind] || 0) + 1;
  }
  function bumpStreak() {
    const t = todayKey(), s = state.streak;
    if (s.lastDate === t) return;
    if (s.lastDate && dayNum(t) - dayNum(s.lastDate) === 1) s.count += 1;
    else s.count = 1;
    s.lastDate = t;
    state.bestStreak = Math.max(state.bestStreak || 0, s.count);
  }

  function stats() {
    const completedList = Object.keys(state.completed).map(Number).sort((a, b) => a - b);
    let words = 0, scoreSum = 0;
    Object.values(state.learned).forEach(arr => { words += (arr || []).length; });
    completedList.forEach(i => { scoreSum += state.completed[i].score; });
    return {
      lessons: completedList.length,
      words: words,
      quizzes: completedList.length,
      avg: completedList.length ? Math.round(scoreSum / completedList.length) : 0,
      completedList,
      best: state.bestStreak || 0
    };
  }

  /* ---------- audio ---------- */
  let audioCtx = null;
  function beep(type) {
    if (!state.sound) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.connect(g); g.connect(audioCtx.destination);
      const now = audioCtx.currentTime;
      if (type === "good") { o.type = "sine"; o.frequency.setValueAtTime(660, now); o.frequency.exponentialRampToValueAtTime(990, now + .12); }
      else if (type === "bad") { o.type = "triangle"; o.frequency.setValueAtTime(220, now); o.frequency.exponentialRampToValueAtTime(160, now + .18); }
      else if (type === "win") { o.type = "sine"; o.frequency.setValueAtTime(523, now); o.frequency.setValueAtTime(659, now + .12); o.frequency.setValueAtTime(784, now + .24); }
      else { o.type = "sine"; o.frequency.setValueAtTime(440, now); }
      g.gain.setValueAtTime(.0001, now);
      g.gain.exponentialRampToValueAtTime(.14, now + .02);
      g.gain.exponentialRampToValueAtTime(.0001, now + (type === "win" ? .5 : .22));
      o.start(now); o.stop(now + (type === "win" ? .52 : .24));
    } catch (e) { /* audio not supported */ }
  }
  function speak(text) {
    if (!("speechSynthesis" in window)) { toast("🔇 Sound not available here"); return; }
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US"; u.rate = .85; u.pitch = 1.08;
      window.speechSynthesis.speak(u);
    } catch (e) { /* ignore */ }
  }

  /* ---------- toast + confetti ---------- */
  function toast(msg) {
    const el = document.getElementById("toast");
    el.textContent = msg; el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 1900);
  }
  function confetti() {
    const cv = document.getElementById("confetti");
    const ctx = cv.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
    ctx.scale(dpr, dpr);
    const colors = ["#ff5fa2", "#ffd166", "#7c5cff", "#2ecc71", "#ff9f43", "#00cec9"];
    const parts = [];
    for (let i = 0; i < 90; i++) parts.push({
      x: Math.random() * innerWidth, y: -20 - Math.random() * innerHeight * .5,
      vx: (Math.random() - .5) * 2, vy: 2 + Math.random() * 3,
      w: 6 + Math.random() * 7, h: 8 + Math.random() * 8,
      c: colors[Math.floor(Math.random() * colors.length)], r: Math.random() * 6, vr: (Math.random() - .5) * .3
    });
    let frames = 0;
    (function tick() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      parts.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.r += p.vr; p.vy += .03;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if (++frames < 260) requestAnimationFrame(tick);
      else ctx.clearRect(0, 0, innerWidth, innerHeight);
    })();
  }

  function updateTopStats() {
    document.getElementById("streakCount").textContent = state.streak.count || 0;
    document.getElementById("starCount").textContent = state.totalStars || 0;
  }

  /* ---------- LEARN ---------- */
  function renderLearn() {
    const idx = activeLessonIndex();
    const lesson = WORD_BANK[idx];
    const learned = state.learned[idx] || [];
    const pct = Math.round(learned.length / 10 * 100);

    let cards = "";
    lesson.words.forEach((wd, i) => {
      const isLearned = learned.indexOf(i) !== -1;
      cards += `
        <div class="word-card ${isLearned ? "learned" : ""}" data-i="${i}" style="--c:${lesson.color}">
          <div class="word-card-inner">
            <div class="card-face card-front">
              <button class="learned-check" data-check="${i}" aria-label="Mark as learned">✔</button>
              <button class="speak" data-speak="${esc(wd.w)}" aria-label="Hear word">🔊</button>
              <div class="emoji">${wd.e}</div>
              <div class="word">${esc(wd.w)}</div>
              <div class="ph">/${esc(wd.ph)}/</div>
              <div class="tap">tap to flip ↻</div>
            </div>
            <div class="card-face card-back">
              <button class="speak" data-speak="${esc(wd.w)}" aria-label="Hear word">🔊</button>
              <div class="bn" lang="bn">${esc(wd.bn)}</div>
              <div class="sentence" data-sentence="${esc(wd.s)}">${esc(wd.s)}</div>
              <div class="sentence-bn" lang="bn">${esc(wd.sb)}</div>
            </div>
          </div>
        </div>`;
    });

    screen.innerHTML = `
      <div class="fade-in">
        <div class="hero" style="background:linear-gradient(135deg, ${lesson.color}dd 0%, #ffb3d9 55%, #a18cd1 100%)">
          <div class="hello">👋 Hello, ${esc(state.name)}!</div>
          <div class="lesson-title">Day ${idx + 1} · ${esc(lesson.theme)} ${lesson.emoji}</div>
          <span class="theme-badge">🔥 ${state.streak.count || 0} day streak</span>
          <div class="progress-track"><div class="progress-fill" id="learnBar" style="width:${pct}%"></div></div>
          <div class="progress-caption">${learned.length} of 10 words learned today</div>
        </div>

        <div class="row"><h2>Today's 10 words</h2><span class="hint">Tap a card to flip 🔄</span></div>
        <div class="word-grid">${cards}</div>

        <div style="margin-top:20px">
          <button class="btn pink" id="toQuiz">🎯 Take Today's Quiz <span>→</span></button>
        </div>
        ${allDone() ? `<div class="banner" style="margin-top:16px"><span class="big-emoji">🏆</span><h3>You finished all ${totalLessons()} days!</h3><p>Amazing work! Keep reviewing any day and retake quizzes to stay sharp.</p></div>` : ""}
      </div>`;

    // card interactions
    screen.querySelectorAll(".word-card").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("button")) return;
        card.classList.toggle("flipped");
        beep("tap");
        if (card.classList.contains("flipped")) { addActivity("words"); save(); }
      });
    });
    screen.querySelectorAll("[data-speak]").forEach(btn => {
      btn.addEventListener("click", (e) => { e.stopPropagation(); speak(btn.dataset.speak); beep("tap"); });
    });
    screen.querySelectorAll("[data-sentence]").forEach(el => {
      el.addEventListener("click", (e) => { e.stopPropagation(); speak(el.dataset.sentence); });
    });
    screen.querySelectorAll("[data-check]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const i = +btn.dataset.check;
        const arr = state.learned[idx] || (state.learned[idx] = []);
        const pos = arr.indexOf(i);
        const adding = pos === -1;
        if (adding) { arr.push(i); beep("good"); toast("Nice! Word learned ✅"); }
        else { arr.splice(pos, 1); beep("tap"); }
        btn.closest(".word-card").classList.toggle("learned", adding);
        const bar = document.getElementById("learnBar");
        if (bar) bar.style.width = Math.round(arr.length / 10 * 100) + "%";
        const cap = document.querySelector(".progress-caption");
        if (cap) cap.textContent = arr.length + " of 10 words learned today";
        save();
      });
    });
    document.getElementById("toQuiz").addEventListener("click", () => { quiz = null; switchTab("quiz"); });
  }

  /* ---------- QUIZ ---------- */
  function blankSentence(word, sentence) {
    const escRe = w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const forms = [word, word + "s", word + "es", word + "d", word + "ed", word + "ing"];
    if (/y$/i.test(word)) forms.push(word.slice(0, -1) + "ies");
    for (const f of forms) {
      const re = new RegExp("\\b" + escRe(f) + "\\b", "i");
      if (re.test(sentence)) return sentence.replace(re, "______");
    }
    return null;
  }
  function makeQuestions(lessonIndex) {
    const words = WORD_BANK[lessonIndex].words;
    const types = shuffle(["en2bn", "bn2en", "sentence", "emoji"]);
    return shuffle(words.map((wd, wi) => {
      let type = types[wi % types.length];
      const blanked = blankSentence(wd.w, wd.s);
      if (type === "sentence" && !blanked) type = "en2bn";
      const others = words.filter((_, j) => j !== wi);
      const pool = others.length >= 3 ? others : WORD_BANK[(lessonIndex + 1) % totalLessons()].words;
      let prompt, main, sub = "", qclass = "", emoji = "";
      const distract = shuffle(pool).slice(0, 3);

      if (type === "en2bn") {
        prompt = "What does this word mean?"; main = wd.w; sub = `🔊 /${wd.ph}/`; emoji = wd.e;
        var options = shuffle([wd.bn, ...distract.map(o => o.bn)]);
        var answer = wd.bn, answerIsBn = true;
      } else if (type === "bn2en") {
        prompt = "Which English word means…"; main = wd.bn; sub = "Choose the correct word"; qclass = "bn"; emoji = wd.e;
        var options = shuffle([wd.w, ...distract.map(o => o.w)]);
        var answer = wd.w, answerIsBn = false;
      } else if (type === "sentence") {
        prompt = "Complete the sentence"; main = blanked;
        sub = wd.sb; qclass = ""; emoji = "";
        var options = shuffle([wd.w, ...distract.map(o => o.w)]);
        var answer = wd.w, answerIsBn = false;
      } else {
        prompt = "Which word is this?"; main = "👀 Guess from the picture"; sub = "Tap 🔊 after you answer"; qclass = "bn"; emoji = wd.e;
        var options = shuffle([wd.w, ...distract.map(o => o.w)]);
        var answer = wd.w, answerIsBn = false;
      }
      const mainLang = type === "bn2en" ? "bn" : "en";
      const subLang = type === "sentence" ? "bn" : "";
      return { type, prompt, main, sub, qclass, emoji, options, answer, answerIsBn, mainLang, subLang, wordIndex: wi, word: wd };
    }));
  }

  function renderQuiz() {
    const idx = activeLessonIndex();
    const lesson = WORD_BANK[idx];

    if (!quiz) {
      const done = state.completed[idx];
      screen.innerHTML = `
        <div class="fade-in">
          <div class="banner" style="margin-top:8px">
            <span class="big-emoji">🎯</span>
            <h3>Day ${idx + 1} Quiz · ${esc(lesson.theme)}</h3>
            <p>10 fun questions about today's words. Get 7 or more right to earn ⭐ stars and keep your 🔥 streak going!</p>
            ${done ? `<div class="hint" style="margin-bottom:12px">Your best score: ${done.score}/10</div>` : ""}
            <button class="btn green" id="startQuiz">Let's Play! 🚀</button>
          </div>
          <div class="banner" style="margin-top:14px;border-style:solid">
            <span class="big-emoji">🧠</span>
            <h3>How it works</h3>
            <p>Read the question, tap an answer, and see if you're right. You can flip the word cards in Learn any time! 💡 One lesson a day makes the strongest streak.</p>
          </div>
        </div>`;
      document.getElementById("startQuiz").addEventListener("click", () => {
        quiz = { dayIndex: idx, questions: makeQuestions(idx), idx: 0, answers: [], done: false };
        beep("tap"); renderQuiz();
      });
      return;
    }

    if (quiz.done) { renderResult(); return; }

    const q = quiz.questions[quiz.idx];
    const progress = Math.round(quiz.idx / quiz.questions.length * 100);
    const optionsHtml = q.options.map((o, i) => `
      <button class="option" data-opt="${i}">
        <span class="key">${String.fromCharCode(65 + i)}</span>
        <span${q.answerIsBn ? ' lang="bn"' : ""}>${esc(o)}</span>
      </button>`).join("");

    screen.innerHTML = `
      <div class="fade-in">
        <div class="quiz-head">
          <span class="q-count">Q ${quiz.idx + 1}/${quiz.questions.length}</span>
          <div class="q-bar"><i style="width:${progress}%"></i></div>
          <span class="q-count">🔥${state.streak.count || 0}</span>
        </div>
        <div class="q-card">
          <div class="q-prompt">${esc(q.prompt)}</div>
          ${q.emoji ? `<div class="q-emoji">${q.emoji}</div>` : ""}
          <div class="q-main ${q.qclass}" lang="${q.mainLang}">${esc(q.main)}</div>
          ${q.sub ? `<div class="q-translation"${q.subLang ? ' lang="bn"' : ""}>${esc(q.sub)}</div>` : ""}
          <div class="options">${optionsHtml}</div>
          <div class="feedback" id="feedback"></div>
          <button class="btn green" id="nextBtn" style="display:none;margin-top:6px">${quiz.idx === quiz.questions.length - 1 ? "See Results 🎉" : "Next Question →"}</button>
        </div>
      </div>`;

    screen.querySelectorAll(".option").forEach(btn => {
      btn.addEventListener("click", () => answerQuestion(+btn.dataset.opt));
    });
  }

  function answerQuestion(choice) {
    if (quiz.locked) return;
    quiz.locked = true;
    const q = quiz.questions[quiz.idx];
    const chosen = q.options[choice];
    const correct = chosen === q.answer;
    quiz.answers.push({ q, chosen, correct });
    const btns = screen.querySelectorAll(".option");
    btns.forEach(b => b.classList.add("disabled"));
    btns[choice].classList.add(correct ? "correct" : "wrong");
    if (!correct) {
      btns.forEach((b, i) => { if (q.options[i] === q.answer) b.classList.add("correct"); });
      beep("bad");
    } else beep("good");

    const fb = document.getElementById("feedback");
    fb.className = "feedback " + (correct ? "ok" : "no");
    fb.textContent = correct ? "✅ Correct! Great job!" : `❌ Oops! The answer is "${q.answer}"`;
    if (correct) speak(q.word.w);

    const next = document.getElementById("nextBtn");
    next.style.display = "inline-flex";
    next.addEventListener("click", () => {
      quiz.locked = false;
      quiz.idx++;
      if (quiz.idx >= quiz.questions.length) finishQuiz();
      renderQuiz();
    });
  }

  function finishQuiz() {
    const score = quiz.answers.filter(a => a.correct).length;
    const idx = quiz.dayIndex;
    const stars = starsFor(score);
    const prev = state.completed[idx];
    const deltaStars = Math.max(0, stars - (prev ? prev.stars || 0 : 0));
    state.completed[idx] = {
      score, total: 10, date: todayKey(), stars,
      mistakes: quiz.answers.filter(a => !a.correct).map(a => a.q.wordIndex)
    };
    state.totalStars = (state.totalStars || 0) + deltaStars;
    bumpStreak();
    addActivity("quizzes");
    save();
    quiz.done = true;
    quiz.score = score;
    if (score >= 7) { confetti(); beep("win"); }
  }

  function renderResult() {
    const score = quiz.score;
    const stars = starsFor(score);
    const emoji = score === 10 ? "🏆" : score >= 7 ? "🎉" : score >= 5 ? "👍" : "💪";
    const title = score === 10 ? "Perfect Score!" : score >= 7 ? "Awesome Work!" : score >= 5 ? "Good Try!" : "Keep Going!";
    const mistakes = quiz.answers.filter(a => !a.correct);
    const mistakesHtml = mistakes.length ? `
      <div class="mistakes">
        <h3>📝 Words to practise</h3>
        ${mistakes.map(a => `<div class="mistake-item">
          <span class="me">${a.q.word.e}</span>
          <div><b>${esc(a.q.word.w)}</b><span><span lang="bn">${esc(a.q.word.bn)}</span> · ${esc(a.q.word.s)}</span></div>
        </div>`).join("")}
      </div>` : "";

    screen.innerHTML = `
      <div class="fade-in">
        <div class="result-card">
          <div class="result-emoji">${emoji}</div>
          <h2>${title}</h2>
          <p>You got <b>${score} out of 10</b> right!</p>
          <div class="score-ring">${score}/10</div>
          <div class="score-stars">${"⭐".repeat(stars)}${"☆".repeat(3 - stars)}</div>
          <button class="btn green" id="againBtn">📖 Review Today's Words</button>
          <button class="btn ghost" id="homeBtn" style="margin-top:10px">🏠 Back to Learn</button>
          ${mistakesHtml}
        </div>
      </div>`;
    document.getElementById("againBtn").addEventListener("click", () => { quiz = null; switchTab("learn"); });
    document.getElementById("homeBtn").addEventListener("click", () => { quiz = null; switchTab("learn"); });
  }

  /* ---------- PROGRESS (kid) ---------- */
  function renderProgress() {
    const s = stats();
    const today = todayKey();
    let cal = "";
    for (let k = 6; k >= 0; k--) {
      const key = shiftDay(today, -k);
      const done = !!(state.activity[key] && state.activity[key].quizzes > 0);
      cal += `<div class="cal-cell ${done ? "done" : ""} ${k === 0 ? "today" : ""}" title="${key}">${WEEKDAYS[weekdayIndex(key)]}<br>${+key.slice(8)}</div>`;
    }

    const badges = [
      { i: "🌱", n: "First Step", d: "1 quiz", ok: s.lessons >= 1 },
      { i: "📚", n: "Word Collector", d: "10 words", ok: s.words >= 10 },
      { i: "🔥", n: "Streak Starter", d: "3 days", ok: state.streak.count >= 3 },
      { i: "🗓️", n: "Week Hero", d: "7 days", ok: state.best >= 7 },
      { i: "💯", n: "Perfect!", d: "score 10", ok: Object.values(state.completed).some(c => c.score === 10) },
      { i: "🎯", n: "Quiz Pro", d: "avg 90%+", ok: s.quizzes >= 3 && s.avg >= 90 },
      { i: "💎", n: "50 Words", d: "50 learned", ok: s.words >= 50 },
      { i: "🚀", n: "Halfway", d: "15 days", ok: s.lessons >= 15 },
      { i: "🏆", n: "Champion", d: "all 30", ok: s.lessons >= totalLessons() }
    ];

    let chart = "";
    s.completedList.slice(-8).forEach(i => {
      const c = state.completed[i];
      chart += `<div class="chart-row"><span class="cl">Day ${i + 1}</span><div class="chart-bar"><i style="width:${c.score * 10}%"></i></div><span class="cv">${c.score}</span></div>`;
    });

    screen.innerHTML = `
      <div class="fade-in">
        <div class="hero" style="background:linear-gradient(135deg,#7c5cff,#ff5fa2)">
          <div class="hello">Your journey so far</div>
          <div class="lesson-title">Keep it up, ${esc(state.name)}! 🌟</div>
          <span class="theme-badge">🔥 ${state.streak.count || 0} day streak · ⭐ ${state.totalStars || 0} stars</span>
        </div>

        <div class="stat-grid">
          <div class="stat-card" style="background:linear-gradient(135deg,#ff9f43,#ff6b6b)"><span class="ic">📖</span><div class="num">${s.words}</div><div class="lbl">words learned</div></div>
          <div class="stat-card" style="background:linear-gradient(135deg,#26de81,#00b894)"><span class="ic">✅</span><div class="num">${s.lessons}<small style="font-size:15px">/${totalLessons()}</small></div><div class="lbl">days completed</div></div>
          <div class="stat-card" style="background:linear-gradient(135deg,#a29bfe,#7c5cff)"><span class="ic">🎯</span><div class="num">${s.avg}<small style="font-size:15px">%</small></div><div class="lbl">average score</div></div>
          <div class="stat-card" style="background:linear-gradient(135deg,#ff5fa2,#e84393)"><span class="ic">🔥</span><div class="num">${state.bestStreak || 0}</div><div class="lbl">best streak</div></div>
        </div>

        <div class="row"><h2>🔥 This week</h2><span class="hint">Quiz days glow green</span></div>
        <div class="cal-head">${WEEKDAYS.map(d => `<span>${d}</span>`).join("")}</div>
        <div class="cal-grid">${cal}</div>

        <div class="row"><h2>🏅 My badges</h2><span class="hint">${badges.filter(b => b.ok).length}/${badges.length}</span></div>
        <div class="badge-grid">
          ${badges.map(b => `<div class="badge ${b.ok ? "unlocked" : ""}"><div class="bi">${b.i}</div><div class="bn-l">${b.n}</div><small>${b.d}</small></div>`).join("")}
        </div>

        ${chart ? `<div class="row"><h2>📈 Quiz scores</h2></div><div class="chart">${chart}</div>` : ""}
      </div>`;
  }

  /* ---------- PARENTS ---------- */
  function renderParent() {
    if (!parentUnlocked) {
      screen.innerHTML = `
        <div class="pin-box fade-in">
          <div class="lock">🔒</div>
          <h2>Grown-ups only</h2>
          <p>Enter the 4-digit parent PIN to see the progress dashboard.</p>
          <input class="pin-input" id="pinInput" type="number" inputmode="numeric" maxlength="4" placeholder="••••" />
          <div class="pin-error" id="pinError"></div>
          <button class="btn" id="pinGo">Unlock 🔓</button>
          <p class="tiny-note">Default PIN is <b>1234</b>. You can change it inside the parent area.</p>
        </div>`;
      const input = document.getElementById("pinInput");
      const go = () => {
        if (input.value.trim() === String(state.pin)) { parentUnlocked = true; beep("good"); renderParent(); }
        else {
          const box = document.querySelector(".pin-box");
          box.classList.remove("shake"); void box.offsetWidth; box.classList.add("shake");
          document.getElementById("pinError").textContent = "That PIN isn't right. Try again!";
          beep("bad");
        }
      };
      document.getElementById("pinGo").addEventListener("click", go);
      input.addEventListener("keydown", e => { if (e.key === "Enter") go(); });
      setTimeout(() => input.focus(), 100);
      return;
    }

    const s = stats();
    const recent = s.completedList.slice().reverse().slice(0, 12);
    let rows = recent.map(i => {
      const c = state.completed[i];
      return `<tr><td>Day ${i + 1}<br><span style="color:var(--muted);font-size:11px">${esc(WORD_BANK[i].theme)}</span></td>
        <td>${c.date ? c.date.slice(5) : "—"}</td>
        <td class="${c.score >= 7 ? "score-good" : "score-low"}">${c.score}/10</td>
        <td>${"⭐".repeat(c.stars || 0)}</td></tr>`;
    }).join("");
    if (!rows) rows = `<tr><td colspan="4" style="text-align:center;color:var(--muted);padding:18px">No quizzes completed yet.</td></tr>`;

    // most-missed words across all completed quizzes
    const miss = {};
    Object.values(state.completed).forEach(c => (c.mistakes || []).forEach(wi => { miss[wi] = (miss[wi] || 0) + 1; }));
    const missList = Object.keys(miss).map(Number).sort((a, b) => miss[b] - miss[a]).slice(0, 6);
    let missHtml = missList.length ? missList.map(wi => {
      // find a word sample for display (use the most recent lesson that missed it)
      let sample = null;
      for (const i of s.completedList.slice().reverse()) {
        if ((state.completed[i].mistakes || []).includes(wi)) { sample = WORD_BANK[i].words[wi]; break; }
      }
      if (!sample) return "";
      return `<div class="mistake-item"><span class="me">${sample.e}</span><div><b>${esc(sample.w)} — <span lang="bn">${esc(sample.bn)}</span></b><span>missed ${miss[wi]}× · ${esc(sample.s)}</span></div></div>`;
    }).join("") : `<p style="font-size:13px;color:var(--muted);margin:0">No trouble spots yet — wonderful!</p>`;

    screen.innerHTML = `
      <div class="fade-in">
        <div class="hero" style="background:linear-gradient(135deg,#2b2350,#5b3fd6)">
          <div class="hello">Parent Dashboard 👨‍👩‍👧</div>
          <div class="lesson-title">${esc(state.name)}'s Progress</div>
          <span class="theme-badge">Data stays on this device 🔒</span>
        </div>

        <div class="stat-grid">
          <div class="stat-card" style="background:linear-gradient(135deg,#26de81,#00b894)"><span class="ic">✅</span><div class="num">${s.lessons}<small style="font-size:15px">/${totalLessons()}</small></div><div class="lbl">days completed</div></div>
          <div class="stat-card" style="background:linear-gradient(135deg,#ff9f43,#ff6b6b)"><span class="ic">📖</span><div class="num">${s.words}<small style="font-size:15px">/300</small></div><div class="lbl">words learned</div></div>
          <div class="stat-card" style="background:linear-gradient(135deg,#a29bfe,#7c5cff)"><span class="ic">🎯</span><div class="num">${s.avg}<small style="font-size:15px">%</small></div><div class="lbl">average quiz score</div></div>
          <div class="stat-card" style="background:linear-gradient(135deg,#ff5fa2,#e84393)"><span class="ic">🔥</span><div class="num">${state.streak.count || 0}</div><div class="lbl">current streak</div></div>
        </div>

        <div class="parent-section" style="margin-top:16px">
          <h3>📅 Quiz history (recent)</h3>
          <table class="ptable"><thead><tr><th>Lesson</th><th>Date</th><th>Score</th><th>Stars</th></tr></thead><tbody>${rows}</tbody></table>
        </div>

        <div class="parent-section">
          <h3>🧠 Needs a little practice</h3>
          ${missHtml}
        </div>

        <div class="parent-section">
          <h3>⚙️ Settings</h3>
          <div class="setting-row"><span>Child's name</span><input type="text" id="setName" value="${esc(state.name)}" maxlength="16" /></div>
          <div class="setting-row"><span>Sound effects</span><button class="toggle ${state.sound ? "on" : ""}" id="setSound" aria-label="Toggle sound"></button></div>
          <div class="setting-row"><span>Change PIN</span><input type="number" id="setPin" value="${esc(state.pin)}" maxlength="4" inputmode="numeric" /></div>
          <button class="btn ghost small" id="saveSettings" style="margin-top:12px;width:100%">💾 Save Settings</button>
          <button class="btn small" id="lockParent" style="margin-top:10px;width:100%">🔒 Lock Parent Area</button>
          <button class="btn small" id="resetAll" style="margin-top:10px;width:100%;background:linear-gradient(135deg,#ff6b6b,#d63031);box-shadow:0 4px 0 #a52323">🗑️ Reset All Progress</button>
          <p class="tiny-note">Everything is stored locally in this browser on this device. Clearing browser data will erase it — consider bookmarking "Add to Home Screen" for easy access.</p>
        </div>
      </div>`;

    document.getElementById("setSound").addEventListener("click", e => {
      state.sound = !state.sound;
      e.currentTarget.classList.toggle("on", state.sound);
      save(); beep("tap");
    });
    document.getElementById("saveSettings").addEventListener("click", () => {
      const n = document.getElementById("setName").value.trim();
      const p = document.getElementById("setPin").value.trim();
      if (n) state.name = n;
      if (/^\d{4}$/.test(p)) state.pin = p; else toast("PIN must be 4 digits");
      save(); beep("good"); toast("Settings saved ✅");
    });
    document.getElementById("lockParent").addEventListener("click", () => { parentUnlocked = false; renderParent(); });
    document.getElementById("resetAll").addEventListener("click", () => {
      if (confirm("Erase ALL progress, streaks and settings? This cannot be undone.")) {
        state = freshState(); quiz = null; parentUnlocked = false; save(); renderParent(); toast("Everything reset");
      }
    });
  }

  /* ---------- navigation ---------- */
  let currentTab = "learn";
  function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
    screen.scrollTop = 0;
    if (tab === "learn") renderLearn();
    else if (tab === "quiz") renderQuiz();
    else if (tab === "progress") renderProgress();
    else renderParent();
  }
  document.querySelectorAll(".nav-btn").forEach(b => b.addEventListener("click", () => { beep("tap"); switchTab(b.dataset.tab); }));

  updateTopStats();
  switchTab("learn");

  // register service worker for offline use (ignored on file://)
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
