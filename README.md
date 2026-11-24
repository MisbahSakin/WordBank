# 🌈 Word Adventure

A colourful, child-friendly **mobile web app** for learning English with Bengali meanings — built for a 10-year-old and ready to deploy to Vercel.

## What it does

- **10 new words every day** — 30 themed lessons × 10 words = **300 curated words** at an advanced / B1–B2 level (e.g. Habitat, Camouflage, Endangered, Photosynthesis, Metamorphosis, Perseverance)
- Each word has an **emoji**, pronunciation guide, **Bengali meaning**, and one **example sentence** with Bengali translation
- **Tap-to-flip cards** and 🔊 pronounce buttons (uses your device's voice)
- **Daily quiz** — 10 mixed questions (English → Bengali, Bengali → English, sentence completion, picture match)
- **Streaks**, ⭐ stars, confetti, 9 unlockable badges and a weekly activity calendar
- **Parent dashboard** (PIN protected, default **1234**) with quiz history, scores, average, words needing practice, and settings (name, sound, PIN, reset)
- **Works offline** after first load and can be installed to the phone's home screen (full PWA icons + manifest)

## 🚀 Deploy to Vercel

This folder is a **static site**. No build command, no dependencies.

### Deploy from the CLI
```bash
npm i -g vercel
cd word-adventure
vercel
# for production:
vercel --prod
```

### Deploy by importing a Git repository
1. Push this folder to a Git repo.
2. In Vercel → **Add New → Project**, select the repo.
3. Set **Root Directory** to `word-adventure` (if the repo contains other folders).
4. Leave **Build Command** empty and **Output Directory** as the default.
5. Click **Deploy**.

`vercel.json` already configures clean URLs (`/` serves `index.html`), security headers and correct caching for the service worker.

**Important:** serve the app over HTTPS (Vercel does this by default) — speech synthesis and service workers require a secure context.

## Run locally

### Option A — open the file directly
Double-click `index.html`. Everything works except the offline service worker (browsers block it on `file://`).

### Option B — local server (recommended, enables offline + install)
```bash
cd word-adventure
python3 -m http.server 8765
```
Then open `http://localhost:8765` on the computer, or on a phone connected to the same Wi-Fi use `http://<computer-ip>:8765`.

### Install on a phone
1. Open the deployed URL (or local server) in Chrome (Android) or Safari (iPhone).
2. Use the browser menu → **Add to Home Screen** / **Install app**.
3. It opens full-screen like a normal app, and works offline afterwards.

## Where data lives

All progress is stored **in the browser on the device** (localStorage) — no account, no server, nothing sent anywhere. The parent dashboard must be opened on the same device/browser. Clearing browser storage resets progress (there's also a Reset button in the parent area).

## Files

| File | Purpose |
| --- | --- |
| `index.html` | App shell + bottom navigation |
| `styles.css` | All styling (responsive, mobile-first) |
| `app.js` | Learning, quiz, streak, progress and parent logic |
| `words.js` | The 300-word bilingual bank |
| `manifest.json` + `icon-*.png` + `icon.svg` | Installable PWA assets |
| `sw.js` | Offline cache |
| `vercel.json` | Vercel deployment + headers |

## Customising / maintenance

- **Words:** edit `words.js`. Each day is an object with `theme`, `emoji`, `color` and 10 word objects (`w`, `e`, `bn`, `ph`, `s`, `sb`).
- **Colours / layout:** edit `styles.css`.
- **App logic:** edit `app.js`.
- **After changing any asset**, bump `CACHE` in `sw.js` (e.g. `word-adventure-v5` → `v6`) so returning visitors get the new version immediately.

To turn it into a native Android/iOS store app later, wrap this folder with Capacitor (`npm i @capacitor/core @capacitor/cli`, `npx cap init`, then add `android`/`ios`).
