/* ============================================================
   Word Adventure — Curated bilingual word bank (Advanced)
   30 themed lessons x 10 words = 300 words.
   Each word: { w: English, e: emoji, bn: Bengali meaning,
                ph: phonetic, s: example sentence (EN),
                sb: example sentence (BN) }
   ============================================================ */
const WORD_BANK = [
  {
    theme: "Animal World", emoji: "🐾", color: "#ff9f43",
    words: [
      { w: "Habitat", e: "🌳", bn: "আবাসস্থল", ph: "hab-i-tat", s: "A forest is the natural habitat of many birds.", sb: "বন অনেক পাখির প্রাকৃতিক আবাসস্থল।" },
      { w: "Nocturnal", e: "🦉", bn: "নিশাচর", ph: "nok-tur-nal", s: "Owls are nocturnal hunters.", sb: "প্যাঁচারা নিশাচর শিকারী।" },
      { w: "Camouflage", e: "🦎", bn: "ছদ্মবর্ণ", ph: "kam-o-flazh", s: "The chameleon uses camouflage to hide.", sb: "গিরগিটি লুকাতে ছদ্মবর্ণ ব্যবহার করে।" },
      { w: "Herbivore", e: "🐄", bn: "তৃণভোজী", ph: "her-bi-vor", s: "A cow is a gentle herbivore.", sb: "গরু একটি শান্ত তৃণভোজী প্রাণী।" },
      { w: "Predator", e: "🐺", bn: "শিকারী প্রাণী", ph: "pre-da-tor", s: "The wolf is a clever predator.", sb: "নেকড়ে একটি চালাক শিকারী প্রাণী।" },
      { w: "Prey", e: "🐭", bn: "শিকার", ph: "prei", s: "A mouse is prey for the cat.", sb: "ইঁদুর বিড়ালের শিকার।" },
      { w: "Endangered", e: "🐯", bn: "বিপন্ন", ph: "en-dein-jerd", s: "Tigers are endangered animals.", sb: "বাঘ বিপন্ন প্রাণী।" },
      { w: "Species", e: "🦋", bn: "প্রজাতি", ph: "spee-shiz", s: "There are many species of butterflies.", sb: "প্রজাপতির অনেক প্রজাতি আছে।" },
      { w: "Mammal", e: "🐬", bn: "স্তন্যপায়ী", ph: "mam-l", s: "A whale is a mammal, not a fish.", sb: "তিমি মাছ নয়, একটি স্তন্যপায়ী প্রাণী।" },
      { w: "Territory", e: "🦁", bn: "এলাকা", ph: "te-ri-to-ri", s: "The lion protects its territory.", sb: "সিংহ তার এলাকা রক্ষা করে।" }
    ]
  },
  {
    theme: "Exotic Fruits", emoji: "🍑", color: "#ff6b6b",
    words: [
      { w: "Pomegranate", e: "🍎", bn: "ডালিম", ph: "pom-e-gran-it", s: "A pomegranate has hundreds of tiny seeds.", sb: "ডালিমের শত শত ছোট বীজ থাকে।" },
      { w: "Fig", e: "🫒", bn: "ডুমুর", ph: "fig", s: "A fig is soft and sweet inside.", sb: "ডুমুর ভেতরে নরম ও মিষ্টি।" },
      { w: "Avocado", e: "🥑", bn: "অ্যাভোকাডো", ph: "av-o-ka-do", s: "An avocado has one very large seed.", sb: "অ্যাভোকাডোতে একটি বড় বীজ থাকে।" },
      { w: "Blackberry", e: "🫐", bn: "ব্ল্যাকবেরি", ph: "blak-ber-i", s: "Blackberries are dark and juicy.", sb: "ব্ল্যাকবেরি কালো ও রসালো।" },
      { w: "Raspberry", e: "🫐", bn: "রাস্পবেরি", ph: "raz-ber-i", s: "Raspberries have a tangy taste.", sb: "রাস্পবেরির স্বাদ কিছুটা টক।" },
      { w: "Grapefruit", e: "🍊", bn: "গ্রেপফ্রুট", ph: "greip-frut", s: "Grapefruit tastes both sour and bitter.", sb: "গ্রেপফ্রুট টক ও তিক্ত — দুই লাগে।" },
      { w: "Tangerine", e: "🍊", bn: "ট্যানজারিন", ph: "tan-je-reen", s: "A tangerine is a small, sweet orange.", sb: "ট্যানজারিন এক ছোট ও মিষ্টি কমলা।" },
      { w: "Cranberry", e: "🫐", bn: "ক্র্যানবেরি", ph: "kran-ber-i", s: "Cranberries are small and sour.", sb: "ক্র্যানবেরি ছোট ও টক।" },
      { w: "Starfruit", e: "⭐", bn: "স্টারফ্রুট", ph: "star-frut", s: "A starfruit looks like a star when sliced.", sb: "কাটলে স্টারফ্রুট তারার মতো দেখায়।" },
      { w: "Lychee", e: "🍒", bn: "লিচু", ph: "li-chee", s: "A lychee has sweet white flesh.", sb: "লিচুর ভেতরে মিষ্টি সাদা অংশ থাকে।" }
    ]
  },
  {
    theme: "Vegetable Science", emoji: "🥦", color: "#26de81",
    words: [
      { w: "Legume", e: "🫘", bn: "শুঁটি জাতীয়", ph: "leg-yum", s: "Beans and peas are legumes.", sb: "শিম ও মটরশুটি শুঁটি জাতীয়।" },
      { w: "Tuber", e: "🥔", bn: "কন্দ", ph: "tyu-ber", s: "A potato is an underground tuber.", sb: "আলু একটি মাটির নিচের কন্দ।" },
      { w: "Bulb", e: "🧅", bn: "বাল্ব", ph: "bulb", s: "Onions and garlic grow from bulbs.", sb: "পেঁয়াজ ও রসুন বাল্ব থেকে বাড়ে।" },
      { w: "Artichoke", e: "🌿", bn: "আর্টিচোক", ph: "ar-ti-chok", s: "An artichoke has tough outer leaves.", sb: "আর্টিচোকের বাইরের পাতা শক্ত।" },
      { w: "Asparagus", e: "🌱", bn: "অ্যাসপ্যারাগাস", ph: "a-spar-a-gus", s: "Asparagus grows as thin green stems.", sb: "অ্যাসপ্যারাগাস সরু সবুজ কাণ্ড হিসেবে বাড়ে।" },
      { w: "Beetroot", e: "🟣", bn: "বিটরুট", ph: "beet-rut", s: "Beetroot is deep red and sweet.", sb: "বিটরুট গাঢ় লাল ও মিষ্টি।" },
      { w: "Celery", e: "🌿", bn: "সেলারি", ph: "sel-er-i", s: "Celery is green, crisp and crunchy.", sb: "সেলারি সবুজ ও মচমচে।" },
      { w: "Leek", e: "🧅", bn: "লিক", ph: "leek", s: "A leek looks like a very large onion.", sb: "লিক দেখতে বড় পেঁয়াজের মতো।" },
      { w: "Turnip", e: "⚪", bn: "শালগম", ph: "ter-nip", s: "A turnip is white and round.", sb: "শালগম সাদা ও গোল।" },
      { w: "Zucchini", e: "🥒", bn: "জুচিনি", ph: "zu-kee-ni", s: "Zucchini is a long green vegetable.", sb: "জুচিনি এক লম্বা সবুজ সবজি।" }
    ]
  },
  {
    theme: "Colour Palette", emoji: "🎨", color: "#a29bfe",
    words: [
      { w: "Vermilion", e: "🟠", bn: "ভার্মিলিয়ন", ph: "ver-mil-yon", s: "The sunset was a bright vermilion.", sb: "সূর্যাস্ত উজ্জ্বল ভার্মিলিয়ন রঙের ছিল।" },
      { w: "Indigo", e: "🟣", bn: "ইন্ডিগো", ph: "in-di-go", s: "Indigo is a deep blue-purple colour.", sb: "ইন্ডিগো গাঢ় নীল-বেগুনি রঙ।" },
      { w: "Magenta", e: "🌸", bn: "ম্যাজেন্টা", ph: "ma-jen-ta", s: "Magenta is a bright pinkish purple.", sb: "ম্যাজেন্টা উজ্জ্বল গোলাপি-বেগুনি।" },
      { w: "Ochre", e: "🟤", bn: "ওহার", ph: "o-ker", s: "The old walls were painted warm ochre.", sb: "পুরোনো দেয়ালগুলো উষ্ণ ওহার রঙে রাখা ছিল।" },
      { w: "Charcoal", e: "⚫", bn: "কাঠকয়লা রঙ", ph: "char-kol", s: "He wore a charcoal grey jacket.", sb: "সে কাঠকয়লা রঙের জ্যাকেট পরেছিল।" },
      { w: "Teal", e: "🩵", bn: "টিল", ph: "teel", s: "The deep sea looked teal.", sb: "গভীর সমুদ্র টিল রঙের দেখাচ্ছিল।" },
      { w: "Coral", e: "🪸", bn: "কোরাল রঙ", ph: "ko-ral", s: "Her new scarf was soft coral.", sb: "তার নতুন স্কার্ফটি নরম কোরাল রঙের।" },
      { w: "Plum", e: "🟣", bn: "প্লাম রঙ", ph: "plum", s: "The evening sky turned deep plum.", sb: "সন্ধ্যার আকাশ গাঢ় প্লাম রঙের হয়ে গেল।" },
      { w: "Beige", e: "🟤", bn: "বেইজ", ph: "beizh", s: "The desert sand was pale beige.", sb: "মরুভূমির বালি হালকা বেইজ রঙের ছিল।" },
      { w: "Neon", e: "✨", bn: "নিয়ন", ph: "nee-on", s: "The shop sign glowed bright neon green.", sb: "দোকানের সাইন উজ্জ্বল নিয়ন সবুজে জ্বলজ্বল করছিল।" }
    ]
  },
  {
    theme: "Family Ties", emoji: "👨‍👩‍👧‍👦", color: "#fd79a8",
    words: [
      { w: "Ancestor", e: "👴", bn: "পূর্বপুরুষ", ph: "an-ses-tor", s: "My ancestors lived in this village.", sb: "আমার পূর্বপুরুষরা এই গ্রামে বাস করতেন।" },
      { w: "Descendant", e: "👶", bn: "বংশধর", ph: "di-sen-dant", s: "We are descendants of brave people.", sb: "আমরা সাহসী মানুষের বংশধর।" },
      { w: "Orphan", e: "🧒", bn: "পিতৃমাতৃহীন", ph: "or-fan", s: "The kind family cared for the orphan.", sb: "দয়ালু পরিবারটি পিতৃমাতৃহীন শিশুর যত্ন নিয়েছে।" },
      { w: "Adopt", e: "👶", bn: "দত্তক নেওয়া", ph: "a-dopt", s: "They decided to adopt a little girl.", sb: "তারা এক ছোট মেয়েকে দত্তক নেওয়ার সিদ্ধান্ত নিয়েছে।" },
      { w: "Ward", e: "🧒", bn: "অভিভাবকের অধীন শিশু", ph: "word", s: "The young ward lived with his guardian.", sb: "ছোট্ট ওয়ার্ড তার অভিভাবকের সাথে বাস করত।" },
      { w: "Kinship", e: "🤝", bn: "আত্মীয়তা", ph: "kin-ship", s: "Kinship bonds are strong in our family.", sb: "আমাদের পরিবারে আত্মীয়তার বন্ধন দৃঢ়।" },
      { w: "Elder", e: "🧓", bn: "বয়োজ্যেষ্ঠ", ph: "el-der", s: "My elder brother is very wise.", sb: "আমার বড় ভাই খুব জ্ঞানী।" },
      { w: "Stepmother", e: "👩", bn: "সৎ মা", ph: "step-mudh-er", s: "His stepmother was very caring.", sb: "তার সৎ মা খুব যত্নশীল ছিলেন।" },
      { w: "Generation", e: "👨‍👩‍👧‍👦", bn: "প্রজন্ম", ph: "jen-er-ei-shn", s: "Three generations live in our house.", sb: "আমাদের বাড়িতে তিন প্রজন্ম বাস করে।" },
      { w: "Guardian", e: "🛡️", bn: "অভিভাবক", ph: "gar-di-en", s: "A guardian looks after a child.", sb: "অভিভাবক শিশুর দেখাশোনা করেন।" }
    ]
  },
  {
    theme: "Food & Cooking", emoji: "🍽️", color: "#fdcb6e",
    words: [
      { w: "Cuisine", e: "🍛", bn: "রান্নাশৈলী", ph: "kwi-zeen", s: "Bengali cuisine is famous for its spices.", sb: "বাংলা রান্নাশৈলী মসলার জন্য বিখ্যাত।" },
      { w: "Marination", e: "🥩", bn: "মেরিনেশন", ph: "ma-ri-nei-shn", s: "Marination makes the meat soft and tasty.", sb: "মেরিনেশন মাংসকে নরম ও সুস্বাদু করে।" },
      { w: "Simmer", e: "🍲", bn: "মন্দ আঁচে রান্না", ph: "sim-er", s: "Let the soup simmer for ten minutes.", sb: "স্যুপটি দশ মিনিট মন্দ আঁচে রাখো।" },
      { w: "Roast", e: "🍗", bn: "রোস্ট করা", ph: "rost", s: "We roasted a chicken for dinner.", sb: "আমরা রাতের খাবারে মুরগি রোস্ট করেছি।" },
      { w: "Seasoning", e: "🧂", bn: "মসলা", ph: "see-zn-ing", s: "Good seasoning improves the flavour.", sb: "ভালো মসলা স্বাদ বাড়িয়ে দেয়।" },
      { w: "Dessert", e: "🍰", bn: "মিষ্টান্ন", ph: "di-zert", s: "Rasmalai is a popular dessert.", sb: "রসমালাই একটি জনপ্রিয় মিষ্টান্ন।" },
      { w: "Beverage", e: "🥤", bn: "পানীয়", ph: "bev-er-ij", s: "Water is the healthiest beverage.", sb: "পানিই সবচেয়ে স্বাস্থ্যকর পানীয়।" },
      { w: "Cereal", e: "🥣", bn: "সিরিয়াল", ph: "see-ri-el", s: "I eat cereal with milk for breakfast.", sb: "আমি নাশার জন্য দুধের সাথে সিরিয়াল খাই।" },
      { w: "Snack", e: "🍿", bn: "হালকা খাবার", ph: "snak", s: "Fresh fruit is a healthy snack.", sb: "তাজা ফল একটি স্বাস্থ্যকর হালকা খাবার।" },
      { w: "Nutrition", e: "🥗", bn: "পুষ্টি", ph: "nyu-tri-shn", s: "Good food gives us proper nutrition.", sb: "ভালো খাবার আমাদের যথাযথ পুষ্টি দেয়।" }
    ]
  },
  {
    theme: "Body & Senses", emoji: "🦴", color: "#74b9ff",
    words: [
      { w: "Skeleton", e: "🦴", bn: "কঙ্কাল", ph: "skel-e-ton", s: "The skeleton protects our soft organs.", sb: "কঙ্কাল আমাদের নরম অঙ্গগুলোকে রক্ষা করে।" },
      { w: "Muscle", e: "💪", bn: "পেশী", ph: "mus-l", s: "Regular exercise makes muscles strong.", sb: "নিয়মিত ব্যায়াম পেশীকে শক্তিশালী করে।" },
      { w: "Nerve", e: "⚡", bn: "স্নায়ু", ph: "nerv", s: "Nerves carry messages to the brain.", sb: "স্নায়ু মস্তিষ্কে বার্তা বহন করে।" },
      { w: "Pulse", e: "💓", bn: "নাড়ি", ph: "puls", s: "The doctor checked my pulse.", sb: "ডাক্তার আমার নাড়ি পরীক্ষা করেছেন।" },
      { w: "Reflex", e: "🦵", bn: "প্রতিবর্ত ক্রিয়া", ph: "re-flex", s: "Blinking is a natural reflex.", sb: "চোখ পিটানো একটি স্বাভাবিক প্রতিবর্ত ক্রিয়া।" },
      { w: "Senses", e: "🤚", bn: "ইন্দ্রিয়", ph: "sen-siz", s: "Sight is one of our five senses.", sb: "দৃষ্টি আমাদের পাঁচ ইন্দ্রিয়ের একটি।" },
      { w: "Balance", e: "⚖️", bn: "ভারসাম্য", ph: "bal-ens", s: "A bicycle needs careful balance.", sb: "সাইকেল চালাতে ভারসাম্য দরকার।" },
      { w: "Posture", e: "🧍", bn: "দেহভঙ্গি", ph: "pos-cher", s: "Good posture keeps your back healthy.", sb: "ভালো দেহভঙ্গি পিঠকে সুস্থ রাখে।" },
      { w: "Respiration", e: "😮", bn: "শ্বসন", ph: "res-pi-rei-shn", s: "Respiration brings oxygen into the body.", sb: "শ্বসন শরীরে অক্সিজেন নিয়ে আসে।" },
      { w: "Digestion", e: "🫀", bn: "হজম", ph: "dai-jes-chen", s: "Digestion turns food into energy.", sb: "হজম খাবারকে শক্তিতে রূপ দেয়।" }
    ]
  },
  {
    theme: "School Life", emoji: "🏫", color: "#0984e3",
    words: [
      { w: "Curriculum", e: "📚", bn: "পাঠক্রম", ph: "ku-rik-yu-lum", s: "Our curriculum includes science and art.", sb: "আমাদের পাঠক্রমে বিজ্ঞান ও শিল্প আছে।" },
      { w: "Examination", e: "📝", bn: "পরীক্ষা", ph: "eg-zam-i-nei-shn", s: "The examination starts next Monday.", sb: "পরীক্ষা আগামী সোমাবার শুরু হবে।" },
      { w: "Grade", e: "🅰️", bn: "গ্রেড", ph: "greid", s: "She got an excellent grade in maths.", sb: "সে গণিতে চমৎকার গ্রেড পেয়েছে।" },
      { w: "Discipline", e: "🧑‍🏫", bn: "শৃঙ্খলা", ph: "dis-i-plin", s: "Discipline helps the class run smoothly.", sb: "শৃঙ্খলা শ্রেণীকক্ষকে সুচারুভাবে চালায়।" },
      { w: "Research", e: "🔬", bn: "গবেষণা", ph: "ri-sarch", s: "We did research for our science project.", sb: "আমরা বিজ্ঞান প্রকল্পের জন্য গবেষণা করেছি।" },
      { w: "Assignment", e: "📄", bn: "অ্যাসাইনমেন্ট", ph: "a-sain-ment", s: "The teacher gave us a new assignment.", sb: "শিক্ষক আমাদের একটি নতুন অ্যাসাইনমেন্ট দিয়েছেন।" },
      { w: "Vocabulary", e: "📖", bn: "শব্দভাণ্ডার", ph: "vo-kab-yu-le-ri", s: "Reading daily builds your vocabulary.", sb: "প্রতিদিন পড়া তোমার শব্দভাণ্ডার বাড়ায়।" },
      { w: "Pronunciation", e: "🗣️", bn: "উচ্চারণ", ph: "pro-nun-si-ei-shn", s: "My English pronunciation is improving.", sb: "আমার ইংরেজি উচ্চারণ ভালো হচ্ছে।" },
      { w: "Debate", e: "🗯️", bn: "বিতর্ক", ph: "di-beit", s: "We had a lively debate in class.", sb: "শ্রেণীতে আমাদের একটি প্রাণবন্ত বিতর্ক হয়েছে।" },
      { w: "Graduation", e: "🎓", bn: "সমাপনী", ph: "gra-jyu-ei-shn", s: "Her graduation day was full of joy.", sb: "তার সমাপনী দিন আনন্দে ভরে ছিল।" }
    ]
  },
  {
    theme: "Games & Strategy", emoji: "♟️", color: "#e84393",
    words: [
      { w: "Strategy", e: "♟️", bn: "কৌশল", ph: "stra-te-ji", s: "Chess needs careful strategy.", sb: "দাবা খেলতে সতর্ক কৌশল দরকার।" },
      { w: "Tactic", e: "🎯", bn: "কৌশল", ph: "tak-tik", s: "Passing the ball was a clever tactic.", sb: "বলটি পাস করা একটি চতুর কৌশল ছিল।" },
      { w: "Challenge", e: "🧗", bn: "চ্যালেঞ্জ", ph: "cha-lenj", s: "This puzzle is a real challenge.", sb: "এই পাজলটি একটা সত্যি চ্যালেঞ্জ।" },
      { w: "Competition", e: "🏁", bn: "প্রতিযোগিতা", ph: "kom-pe-ti-shn", s: "The competition was very close.", sb: "প্রতিযোগিতাটি খুব কাছাকাছি ছিল।" },
      { w: "Champion", e: "🥇", bn: "চ্যাম্পিয়ন", ph: "cham-pi-en", s: "She became the champion of the game.", sb: "সে খেলার চ্যাম্পিয়ন হয়েছে।" },
      { w: "Cooperation", e: "🤝", bn: "সহযোগিতা", ph: "ko-op-er-ei-shn", s: "This game needs teamwork and cooperation.", sb: "এই খেলায় দলবদ্ধতা ও সহযোগিতা দরকার।" },
      { w: "Triumph", e: "🎉", bn: "বিজয়", ph: "trai-umf", s: "Their triumph was celebrated by all.", sb: "সবাই তাদের বিজয় উদযাপন করেছে।" },
      { w: "Riddle", e: "❓", bn: "ধাঁধা", ph: "rid-l", s: "Can you solve this tricky riddle?", sb: "তুমি কি এই কঠিন ধাঁধাটি সমাধান করতে পারো?" },
      { w: "Maze", e: "🌀", bn: "ভুলভুলাঙ্গা", ph: "meiz", s: "The mouse found its way through the maze.", sb: "ইঁদুরটি ভুলভুলাঙ্গার মধ্য দিয়ে পথ পেয়েছে।" },
      { w: "Exploration", e: "🧭", bn: "অন্বেষণ", ph: "ek-splo-rei-shn", s: "The game is full of exploration.", sb: "খেলাটি অন্বেষণে ভরপুর।" }
    ]
  },
  {
    theme: "Nature & Environment", emoji: "🌳", color: "#00b894",
    words: [
      { w: "Ecosystem", e: "🌳", bn: "বাস্তুতন্ত্র", ph: "ee-ko-sis-tem", s: "A small pond is a complete ecosystem.", sb: "একটি ছোট পুকুর একটি সম্পূর্ণ বাস্তুতন্ত্র।" },
      { w: "Conservation", e: "🛡️", bn: "সংরক্ষণ", ph: "kon-ser-vei-shn", s: "Conservation protects our forests and rivers.", sb: "সংরক্ষণ আমাদের বন ও নদী রক্ষা করে।" },
      { w: "Pollution", e: "🏭", bn: "দূষণ", ph: "po-lu-shn", s: "Pollution harms the air we breathe.", sb: "দূষণ আমাদের শ্বাসের বাতাসকে ক্ষতি করে।" },
      { w: "Renewable", e: "♻️", bn: "নবায়নযোগ্য", ph: "ri-nyu-a-bl", s: "Solar power is a renewable energy source.", sb: "সৌরশক্তি একটি নবায়নযোগ্য শক্তির উৎস।" },
      { w: "Climate", e: "🌍", bn: "জলবায়ু", ph: "klai-met", s: "The climate is changing slowly.", sb: "জলবায়ু ধীরে ধীরে পরিবর্তন হচ্ছে।" },
      { w: "Wilderness", e: "🏞️", bn: "বন্য অঞ্চল", ph: "wil-der-nis", s: "They camped in the quiet wilderness.", sb: "তারা নির্জন বন্য অঞ্চলে ক্যাম্প করেছে।" },
      { w: "Peak", e: "⛰️", bn: "চূড়া", ph: "peek", s: "We climbed to the snowy peak.", sb: "আমরা তুষারাবৃত চূড়ায় উঠেছি।" },
      { w: "Stream", e: "🏞️", bn: "ছোট নদী", ph: "streem", s: "A clear stream ran through the village.", sb: "একটি পরিষ্কার ছোট নদী গ্রামের মধ্য দিয়ে বয়ে যেত।" },
      { w: "Erosion", e: "🏜️", bn: "ক্ষয়", ph: "i-ro-shn", s: "Heavy rain causes soil erosion.", sb: "মুষলধারে বৃষ্টি মাটির ক্ষয় ঘটায়।" },
      { w: "Sunrise", e: "🌅", bn: "সূর্যোদয়", ph: "sun-raiz", s: "We watched the sunrise from the hill.", sb: "আমরা পাহাড় থেকে সূর্যোদয় দেখেছি।" }
    ]
  },
  {
    theme: "Weather Science", emoji: "⛈️", color: "#fbc531",
    words: [
      { w: "Meteorologist", e: "🌦️", bn: "আবহাওয়াবিদ", ph: "me-ti-e-ro-lo-jist", s: "The meteorologist predicted heavy rain.", sb: "আবহাওয়াবিদ মুষলধারে বৃষ্টির পূর্বাভাস দিয়েছেন।" },
      { w: "Atmosphere", e: "🌫️", bn: "বায়ুমণ্ডল", ph: "at-mos-feer", s: "The atmosphere holds the air around Earth.", sb: "বায়ুমণ্ডল পৃথিবীর চারপাশে বাতাস ধরে রাখে।" },
      { w: "Temperature", e: "🌡️", bn: "তাপমাত্রা", ph: "tem-per-e-cher", s: "The temperature dropped after sunset.", sb: "সূর্যাস্তের পর তাপমাত্রা কমে গেল।" },
      { w: "Gust", e: "🌬️", bn: "ঝোড়ো বাতাস", ph: "gust", s: "A sudden gust blew our kites away.", sb: "হঠাৎ ঝোড়ো বাতাস আমাদের ঘুড়ি উড়িয়ে নিয়ে গেল।" },
      { w: "Monsoon", e: "🌧️", bn: "বর্ষাকাল", ph: "mon-soon", s: "The monsoon brings life-giving rain.", sb: "বর্ষাকাল জীবনদায়ী বৃষ্টি নিয়ে আসে।" },
      { w: "Cyclone", e: "🌀", bn: "ঘূর্ণিঝড়", ph: "sai-klon", s: "The cyclone damaged many homes.", sb: "ঘূর্ণিঝড়ে অনেক বাড়ি ক্ষতিগ্রস্ত হয়েছে।" },
      { w: "Drought", e: "🏜️", bn: "খরা", ph: "draut", s: "A long drought dried up the wells.", sb: "দীর্ঘ খরায় কূপগুলো শুকিয়ে গিয়েছিল।" },
      { w: "Downpour", e: "🌧️", bn: "মুষলধারে বৃষ্টি", ph: "daun-por", s: "A sudden downpour soaked everyone.", sb: "হঠাৎ মুষলধারে বৃষ্টি সবাইকে ভিজিয়ে দিয়েছে।" },
      { w: "Hail", e: "🌨️", bn: "শিলাবৃষ্টি", ph: "heil", s: "Hail damaged the young plants.", sb: "শিলাবৃষ্টি ছোট্ট গাছগুলোকে ক্ষতি করেছে।" },
      { w: "Precipitation", e: "🌦️", bn: "বৃষ্টিপাত", ph: "pre-si-pi-tei-shn", s: "Precipitation falls as rain or snow.", sb: "বৃষ্টিপাত বৃষ্টি বা তুষার রূপে পড়ে।" }
    ]
  },
  {
    theme: "Transport", emoji: "🚇", color: "#d63031",
    words: [
      { w: "Vehicle", e: "🚗", bn: "যানবাহন", ph: "vee-i-kl", s: "A bicycle is a simple vehicle.", sb: "সাইকেল একটি সহজ যানবাহন।" },
      { w: "Passenger", e: "🧑‍✈️", bn: "যাত্রী", ph: "pas-en-jer", s: "The bus carried thirty passengers.", sb: "বাসটি ত্রিশজন যাত্রী বহন করেছিল।" },
      { w: "Route", e: "🗺️", bn: "রুট", ph: "rut", s: "This is the shortest route to school.", sb: "এটি স্কুলের সবচেয়ে ছোট রুট।" },
      { w: "Journey", e: "🧳", bn: "যাত্রা", ph: "jer-ni", s: "Our train journey took three hours.", sb: "আমাদের ট্রেন যাত্রা তিন ঘণ্টা নিয়েছে।" },
      { w: "Departure", e: "🛫", bn: "প্রস্থান", ph: "di-par-cher", s: "Please check the departure time.", sb: "দয়া করে প্রস্থানের সময় দেখে নাও।" },
      { w: "Arrival", e: "🛬", bn: "আগমন", ph: "a-rai-vl", s: "We waited for her arrival at the station.", sb: "আমরা স্টেশনে তার আগমনের অপেক্ষা করেছি।" },
      { w: "Traffic", e: "🚦", bn: "যানজট", ph: "tra-fik", s: "The traffic was heavy this morning.", sb: "আজ সকালে যানজট বেশি ছিল।" },
      { w: "Pedestrian", e: "🚶", bn: "পথচারী", ph: "pe-des-tri-en", s: "Cars must stop for pedestrians.", sb: "গাড়িকে পথচারীদের জন্য থামতে হবে।" },
      { w: "Freight", e: "🚚", bn: "মালবাহী", ph: "freit", s: "The train carries freight at night.", sb: "ট্রেনটি রাতে মালবাহী পণ্য বহন করে।" },
      { w: "Commute", e: "🚇", bn: "যাতায়াত", ph: "ko-myut", s: "I commute to school by bus.", sb: "আমি বাস করে স্কুলে যাতায়াত করি।" }
    ]
  },
  {
    theme: "Around the House", emoji: "🏠", color: "#6c5ce7",
    words: [
      { w: "Residence", e: "🏠", bn: "বাসস্থান", ph: "re-zi-dens", s: "This is our family residence.", sb: "এটি আমাদের পারিবারিক বাসস্থান।" },
      { w: "Interior", e: "🛋️", bn: "অভ্যন্তরীণ", ph: "in-te-ri-er", s: "The interior of the house is bright.", sb: "বাড়ির ভেতরের অংশ উজ্জ্বল।" },
      { w: "Exterior", e: "🏠", bn: "বাহ্যিক", ph: "eks-te-ri-er", s: "The exterior needs a fresh coat of paint.", sb: "বাড়ির বাইরের অংশে নতুন রং দরকার।" },
      { w: "Renovation", e: "🛠️", bn: "সংস্কার", ph: "re-no-vei-shn", s: "We did a small renovation last year.", sb: "গত বছর আমরা একটা ছোট সংস্কার করেছি।" },
      { w: "Landlord", e: "🧑‍💼", bn: "বাড়িভাড়া দাতা", ph: "land-lord", s: "The landlord repaired the broken roof.", sb: "বাড়িভাড়া দাতা ভাঙা ছাদ মেরামত করেছেন।" },
      { w: "Tenant", e: "🧑", bn: "ভাড়াটে", ph: "te-nant", s: "The tenant pays rent every month.", sb: "ভাড়াটে প্রতিমাসে ভাড়া দেন।" },
      { w: "Appliance", e: "🔌", bn: "যন্ত্রপাতি", ph: "a-plai-ens", s: "A refrigerator is a useful appliance.", sb: "ফ্রিজ একটি উপযোগী যন্ত্রপাতি।" },
      { w: "Utility", e: "💡", bn: "উপযোগী সেবা", ph: "yu-ti-li-ti", s: "Electricity is an important utility.", sb: "বিদ্যুৎ একটি গুরুত্বপূর্ণ উপযোগী সেবা।" },
      { w: "Household", e: "👪", bn: "গৃহস্থালি", ph: "haus-hold", s: "Household work is shared by everyone.", sb: "গৃহস্থালির কাজ সবাই ভাগ করে করে।" },
      { w: "Shelter", e: "🏠", bn: "আশ্রয়", ph: "shel-ter", s: "The cave gave us shelter from the storm.", sb: "গুহাটি ঝড় থেকে আমাদের আশ্রয় দিয়েছে।" }
    ]
  },
  {
    theme: "Clothes & Fabric", emoji: "🧵", color: "#e17055",
    words: [
      { w: "Garment", e: "👗", bn: "পোশাক", ph: "gar-ment", s: "This garment is made of soft cotton.", sb: "এই পোশাকটি নরম তুলা দিয়ে তৈরি।" },
      { w: "Fabric", e: "🧵", bn: "কাপড়", ph: "fab-rik", s: "The fabric feels smooth and light.", sb: "কাপড়টি মসৃণ ও হালকা লাগে।" },
      { w: "Cotton", e: "☁️", bn: "তুলা", ph: "kot-n", s: "Cotton clothes are comfortable in summer.", sb: "গ্রীষ্মে তুলার পোশাক আরামদায়ক।" },
      { w: "Wool", e: "🧶", bn: "পশম", ph: "wul", s: "Wool keeps you warm in winter.", sb: "শীতে পশম তোমাকে গরম রাখে।" },
      { w: "Leather", e: "👜", bn: "চামড়া", ph: "le-ther", s: "His new bag is made of leather.", sb: "তার নতুন ব্যাগটি চামড়ার তৈরি।" },
      { w: "Silk", e: "🧣", bn: "রেশম", ph: "silk", s: "The shiny scarf is made of silk.", sb: "চকচকে স্কার্ফটি রেশমের তৈরি।" },
      { w: "Accessory", e: "⌚", bn: "আনুষাঙ্গিক", ph: "ak-se-so-ri", s: "A wristwatch is a useful accessory.", sb: "হাতঘড়ি একটি উপযোগী আনুষাঙ্গিক।" },
      { w: "Footwear", e: "👟", bn: "পাদুকা", ph: "fut-weir", s: "Good footwear protects your feet.", sb: "ভালো পাদুকা তোমার পা রক্ষা করে।" },
      { w: "Outfit", e: "👔", bn: "পোশাক পরিচ্ছদ", ph: "out-fit", s: "She chose a bright yellow outfit.", sb: "সে উজ্জ্বল হলুদ পোশাক পরিচ্ছদ বেছে নিয়েছে।" },
      { w: "Wardrobe", e: "🚪", bn: "পোশাকের ক্যাবিনেট", ph: "word-robe", s: "Her wardrobe is full of colourful clothes.", sb: "তার পোশাকের ক্যাবিনেট রঙিন পোশাকে ভরা।" }
    ]
  },
  {
    theme: "Careers", emoji: "💼", color: "#00cec9",
    words: [
      { w: "Profession", e: "💼", bn: "পেশা", ph: "pro-fesh-n", s: "Teaching is a noble profession.", sb: "শিক্ষকতা একটি সম্মানজনক পেশা।" },
      { w: "Occupation", e: "🧑‍🔧", bn: "পেশা", ph: "ok-yu-pei-shn", s: "What is your father's occupation?", sb: "তোমার বাবার পেশা কী?" },
      { w: "Employee", e: "🧑‍💼", bn: "কর্মচারী", ph: "em-ploi-i", s: "My sister is an employee of a bank.", sb: "আমার বোন ব্যাংকের কর্মচারী।" },
      { w: "Employer", e: "🧑‍💼", bn: "নিয়োগকর্তা", ph: "em-ploi-er", s: "The employer hired ten new workers.", sb: "নিয়োগকর্তা দশজন নতুন কর্মী নিয়োগ করেছেন।" },
      { w: "Colleague", e: "🧑‍🤝‍🧑", bn: "সহকর্মী", ph: "kol-eeg", s: "My colleague helped me finish the report.", sb: "আমার সহকর্মী রিপোর্ট শেষ করতে সাহায্য করেছেন।" },
      { w: "Salary", e: "💰", bn: "বেতন", ph: "sa-la-ri", s: "He saves part of his salary every month.", sb: "সে প্রতিমাসে বেতনের কিছু অংশ সঞ্চয় করে।" },
      { w: "Apprentice", e: "🔧", bn: "শিক্ষানবিশ", ph: "a-pren-tis", s: "The apprentice learned from the master.", sb: "শিক্ষানবিশটি মাস্টারের কাছ থেকে শিখেছে।" },
      { w: "Specialist", e: "🧑‍⚕️", bn: "বিশেষজ্ঞ", ph: "spe-shl-ist", s: "A heart specialist examined him.", sb: "একজন হৃদরোগ বিশেষজ্ঞ তাকে পরীক্ষা করেছেন।" },
      { w: "Consultant", e: "📋", bn: "পরামর্শদাতা", ph: "kon-sal-tant", s: "The consultant gave us useful advice.", sb: "পরামর্শদাতা আমাদের উপযোগী পরামর্শ দিয়েছেন।" },
      { w: "Volunteer", e: "🤝", bn: "স্বেচ্ছাসেবক", ph: "vol-en-teer", s: "She works as a volunteer at the shelter.", sb: "সে আশ্রয়কেন্দ্রে স্বেচ্ছাসেবক হিসেবে কাজ করে।" }
    ]
  },
  {
    theme: "Sports", emoji: "🏆", color: "#fdcb6e",
    words: [
      { w: "Athlete", e: "🏃", bn: "ক্রীড়াবিদ", ph: "ath-leet", s: "The athlete trained every morning.", sb: "ক্রীড়াবিদটি প্রতি সকালে প্রশিক্ষণ নিতেন।" },
      { w: "Endurance", e: "🏅", bn: "সহনশীলতা", ph: "en-dyu-rans", s: "Long-distance runners need great endurance.", sb: "দীর্ঘ দূরত্বের দৌড়বিদদের প্রচুর সহনশীলতা দরকার।" },
      { w: "Tactics", e: "♟️", bn: "কৌশল", ph: "tak-tiks", s: "The team changed its tactics at halftime.", sb: "দলটি অর্ধেক সময়ে তার কৌশল বদলেছে।" },
      { w: "Fixture", e: "📅", bn: "খেলার সময়সূচি", ph: "fik-ster", s: "The next fixture is on Friday.", sb: "পরের খেলার সময়সূচি শুক্রবার।" },
      { w: "Spectator", e: "👏", bn: "দর্শক", ph: "spek-tei-ter", s: "The spectators cheered very loudly.", sb: "দর্শকরা জোরে করতালি দিয়েছেন।" },
      { w: "Umpire", e: "🧑‍⚖️", bn: "আম্পায়ার", ph: "um-pai-er", s: "The umpire made a fair decision.", sb: "আম্পায়ার ন্যায্য সিদ্ধান্ত দিয়েছেন।" },
      { w: "Overtime", e: "⏱️", bn: "অতিরিক্ত সময়", ph: "o-ver-taim", s: "The final went into overtime.", sb: "ফাইনাল খেলা অতিরিক্ত সময়ে গিয়েছে।" },
      { w: "Penalty", e: "⚽", bn: "পেনাল্টি", ph: "pen-l-ti", s: "He scored a penalty kick.", sb: "সে পেনাল্টি কিকে গোল করেছে।" },
      { w: "Sportsmanship", e: "🤝", bn: "ক্রীড়ানৈতিকতা", ph: "sports-man-ship", s: "Good sportsmanship matters more than winning.", sb: "ভালো ক্রীড়ানৈতিকতা জয়ের চেয়ে গুরুত্বপূর্ণ।" },
      { w: "Training", e: "🏋️", bn: "প্রশিক্ষণ", ph: "trei-ning", s: "Daily training improves your performance.", sb: "দৈনিক প্রশিক্ষণ তোমার পারফরম্যান্স উন্নত করে।" }
    ]
  },
  {
    theme: "Music", emoji: "🎻", color: "#a29bfe",
    words: [
      { w: "Composition", e: "🎼", bn: "সুরচনা", ph: "kom-po-zi-shn", s: "That composition is over two hundred years old.", sb: "সেই সুরচনাটি দুশো বছরেরও পুরোনো।" },
      { w: "Instrument", e: "🎻", bn: "বাদ্যযন্ত্র", ph: "in-stru-ment", s: "Every instrument has its own sound.", sb: "প্রতিটি বাদ্যযন্ত্রের নিজস্ব শব্দ আছে।" },
      { w: "Tempo", e: "🥁", bn: "লয়", ph: "tem-po", s: "The tempo of this song is quite fast.", sb: "এই গানের লয় বেশ দ্রুত।" },
      { w: "Pitch", e: "🎵", bn: "স্বরের উচ্চতা", ph: "pich", s: "She sang the high notes with a clear pitch.", sb: "সে পরিচ্ছন্ন স্বরে উঁচু নোটগুলো গেয়েছে।" },
      { w: "Beat", e: "🥁", bn: "তাল", ph: "beet", s: "Clap your hands on every beat.", sb: "প্রতিটি তালে হাততালি দাও।" },
      { w: "Solo", e: "🎤", bn: "একক পরিবেশনা", ph: "so-lo", s: "He played a wonderful guitar solo.", sb: "সে এক অসাধারণ একক গিটার পরিবেশনা দিয়েছে।" },
      { w: "Ensemble", e: "🎼", bn: "দলবদ্ধ বাদন", ph: "on-sam-bl", s: "A small ensemble performed tonight.", sb: "একটি ছোট দলবদ্ধ বাদকদল আজ রাতে বাজিয়েছে।" },
      { w: "Accompaniment", e: "🎹", bn: "সঙ্গত", ph: "a-kum-pa-ni-ment", s: "The piano gave a gentle accompaniment.", sb: "পিয়ানো মৃদু সঙ্গত দিয়েছে।" },
      { w: "Repertoire", e: "🎭", bn: "রিপার্টরি", ph: "rep-er-twar", s: "The choir has a wide repertoire.", sb: "গায়কদলের রিপার্টরি বেশ বিস্তৃত।" },
      { w: "Applause", e: "👏", bn: "করতালি", ph: "a-ploz", s: "Loud applause followed the final song.", sb: "শেষ গানের পর জোরে করতালি পড়েছে।" }
    ]
  },
  {
    theme: "Geometry", emoji: "📐", color: "#0984e3",
    words: [
      { w: "Geometry", e: "📐", bn: "জ্যামিতি", ph: "ji-om-e-tri", s: "Geometry helps us understand shapes.", sb: "জ্যামিতি আমাদের আকার বুঝতে সাহায্য করে।" },
      { w: "Dimension", e: "📏", bn: "মাত্রা", ph: "dai-men-shn", s: "A square has two dimensions.", sb: "একটি বর্গের দুটি মাত্রা থাকে।" },
      { w: "Parallel", e: "║", bn: "সমান্তরাল", ph: "pa-ra-lel", s: "The two railway lines are parallel.", sb: "দুটি রেললাইন সমান্তরাল।" },
      { w: "Perpendicular", e: "⟂", bn: "লম্ব", ph: "per-pen-dik-yu-ler", s: "The wall is perpendicular to the floor.", sb: "দেয়াল মেঝের সাথে লম্বভাবে আছে।" },
      { w: "Angle", e: "📐", bn: "কোণ", ph: "ang-gl", s: "A right angle measures ninety degrees.", sb: "একটি সমকোণ নব্বই ডিগ্রি।" },
      { w: "Radius", e: "⭕", bn: "ব্যাসার্ধ", ph: "rei-di-es", s: "The radius is half of the diameter.", sb: "ব্যাসার্ধ হলো ব্যাসের অর্ধেক।" },
      { w: "Diameter", e: "⭕", bn: "ব্যাস", ph: "dai-am-i-ter", s: "Measure the circle's diameter carefully.", sb: "বৃত্তের ব্যাস সতর্কভাবে মাপো।" },
      { w: "Circumference", e: "⭕", bn: "পরিধি", ph: "ser-kam-fe-rans", s: "Circumference is the distance around a circle.", sb: "পরিধি হলো বৃত্তের চারপাশের দূরত্ব।" },
      { w: "Volume", e: "🧊", bn: "আয়তন", ph: "vol-yum", s: "This box has a very large volume.", sb: "এই বাক্সের আয়তন খুব বড়।" },
      { w: "Surface", e: "🟫", bn: "পৃষ্ঠ", ph: "ser-fis", s: "The surface of the table is smooth.", sb: "টেবিলের পৃষ্ঠ মসৃণ।" }
    ]
  },
  {
    theme: "Numbers & Time", emoji: "🧮", color: "#e84393",
    words: [
      { w: "Fraction", e: "½", bn: "ভগ্নাংশ", ph: "frak-shn", s: "One half is a simple fraction.", sb: "অর্ধেক একটি সহজ ভগ্নাংশ।" },
      { w: "Decimal", e: "🔟", bn: "দশমিক", ph: "des-i-ml", s: "Zero point five is a decimal number.", sb: "শূন্য দশমিক পাঁচ একটি দশমিক সংখ্যা।" },
      { w: "Percentage", e: "💯", bn: "শতাংশ", ph: "per-sen-teij", s: "Fifty per cent is a percentage.", sb: "পঞ্চাশ শতাংশ একটি শতাংশের উদাহরণ।" },
      { w: "Estimate", e: "🧮", bn: "আনুমানিক হিসাব", ph: "es-ti-meit", s: "Estimate the answer before you calculate.", sb: "হিসাব করার আগে উত্তরটি আনুমানিক করে নাও।" },
      { w: "Calculate", e: "🧮", bn: "হিসাব করা", ph: "kal-kyu-leit", s: "Calculate the total cost of the books.", sb: "বইগুলোর মোট খরচ হিসাব করো।" },
      { w: "Duration", e: "⏳", bn: "সময়কাল", ph: "dyu-rei-shn", s: "The film has a short duration.", sb: "সিনেমাটির সময়কাল ছোট।" },
      { w: "Decade", e: "📅", bn: "দশক", ph: "de-keid", s: "A decade is a period of ten years.", sb: "এক দশক হলো দশ বছরের সময়।" },
      { w: "Millennium", e: "📅", bn: "সহস্রাব্দ", ph: "mi-len-i-um", s: "We are living in a new millennium.", sb: "আমরা একটি নতুন সহস্রাব্দে বাস করছি।" },
      { w: "Punctual", e: "⏰", bn: "সময়ানুবর্তী", ph: "pung-chu-el", s: "Please be punctual for the meeting.", sb: "অনুগ্রহ করে সভায় সময়মতো এসো।" },
      { w: "Prompt", e: "⏱️", bn: "তৎক্ষণাৎ", ph: "prompt", s: "Thank you for your prompt reply.", sb: "তোমার তৎক্ষণাৎ উত্তরের জন্য ধন্যবাদ।" }
    ]
  },
  {
    theme: "Feelings", emoji: "😊", color: "#fd79a8",
    words: [
      { w: "Enthusiastic", e: "🤩", bn: "উৎসাহী", ph: "en-thyu-zee-as-tik", s: "She is enthusiastic about the school trip.", sb: "স্কুল ভ্রমণ নিয়ে সে খুব উৎসাহী।" },
      { w: "Contentment", e: "😊", bn: "পরিতোষ", ph: "kon-tent-ment", s: "He smiled with quiet contentment.", sb: "সে শান্ত পরিতোষে হাসিমুখে ছিল।" },
      { w: "Anxiety", e: "😰", bn: "উদ্বেগ", ph: "ang-zai-e-ti", s: "Deep breathing can reduce anxiety.", sb: "গভীর শ্বাস উদ্বেগ কমাতে পারে।" },
      { w: "Frustration", e: "😤", bn: "হতাশা", ph: "frus-trei-shn", s: "He showed frustration at the long delay.", sb: "দীর্ঘ দেরিতে সে হতাশা প্রকাশ করেছে।" },
      { w: "Sympathy", e: "🫂", bn: "সহানুভূতি", ph: "sim-pa-thi", s: "She offered sympathy to her sad friend.", sb: "সে তার দুঃখী বন্ধুকে সহানুভূতি দিয়েছে।" },
      { w: "Empathy", e: "💞", bn: "সহমর্মিতা", ph: "em-pa-thi", s: "Empathy means understanding another's feelings.", sb: "সহমর্মিতা মানে অন্যের অনুভূতি বোঝা।" },
      { w: "Optimism", e: "🌈", bn: "আশাবাদ", ph: "op-ti-miz-m", s: "Optimism helps us face difficult days.", sb: "আশাবাদ কঠিন দিনগুলোর মোকাবিলা করতে সাহায্য করে।" },
      { w: "Pessimism", e: "☁️", bn: "হতাশাবাদ", ph: "pes-i-miz-m", s: "Do not let pessimism stop your dreams.", sb: "হতাশাবাদকে তোমার স্বপ্ন বাধা দিতে দিও না।" },
      { w: "Admiration", e: "😍", bn: "প্রশংসা", ph: "ad-mi-rei-shn", s: "We watched the dancer in admiration.", sb: "আমরা প্রশংসায় নৃত্যশিল্পীকে দেখছিলাম।" },
      { w: "Compassion", e: "🫂", bn: "করুণা", ph: "kom-pa-shn", s: "Kindness and compassion make the world better.", sb: "দয়া ও করুণা পৃথিবীকে ভালো করে।" }
    ]
  },
  {
    theme: "Kitchen", emoji: "🍳", color: "#ff9f43",
    words: [
      { w: "Utensil", e: "🥄", bn: "রান্নার সরঞ্জাম", ph: "yu-ten-sl", s: "A spatula is a very useful utensil.", sb: "স্প্যাটুলা একটি উপযোগী রান্নার সরঞ্জাম।" },
      { w: "Crockery", e: "🍽️", bn: "বাসনপত্র", ph: "krok-er-i", s: "The clean crockery is on the top shelf.", sb: "পরিচ্ছন্ন বাসনপত্রগুলো উপরের তাকে আছে।" },
      { w: "Cutlery", e: "🍴", bn: "কাটারি", ph: "kut-ler-i", s: "We keep the cutlery in a drawer.", sb: "আমরা কাটারি একটি ড্রয়ারে রাখি।" },
      { w: "Grill", e: "🔥", bn: "গ্রিল করা", ph: "gril", s: "Dad grilled the fish for dinner.", sb: "বাবা রাতের খাবারে মাছ গ্রিল করেছেন।" },
      { w: "Steam", e: "♨️", bn: "বাষ্প", ph: "steem", s: "Thick steam rose from the hot soup.", sb: "গরম স্যুপ থেকে ঘন বাষ্প উঠছিল।" },
      { w: "Boil", e: "🫧", bn: "ফুটানো", ph: "boil", s: "Boil the water before you drink it.", sb: "পান পানের আগে পানি ফুটিয়ে নাও।" },
      { w: "Chop", e: "🔪", bn: "কাটা", ph: "chop", s: "Chop the onions into small pieces.", sb: "পেঁয়াজ ছোট ছোট টুকরো করে কাটো।" },
      { w: "Stir", e: "🥄", bn: "নাড়া", ph: "ster", s: "Stir the soup gently with a spoon.", sb: "চামচ দিয়ে স্যুপটি আলতো করে নাড়ো।" },
      { w: "Marinade", e: "🥩", bn: "মেরিনেড", ph: "ma-ri-neid", s: "The chicken sat in a spicy marinade.", sb: "মুরগিটি মসলাদার মেরিনেডে ছিল।" },
      { w: "Leftover", e: "🍱", bn: "অবশিষ্ট খাবার", ph: "left-o-ver", s: "We ate the leftovers for lunch.", sb: "আমরা দুপুরে অবশিষ্ট খাবার খেয়েছি।" }
    ]
  },
  {
    theme: "Garden", emoji: "🌻", color: "#26de81",
    words: [
      { w: "Germination", e: "🌱", bn: "অঙ্কুরোদগম", ph: "jer-mi-nei-shn", s: "Germination starts when a seed gets water.", sb: "বীজে পানি পেলে অঙ্কুরোদগম শুরু হয়।" },
      { w: "Photosynthesis", e: "☀️", bn: "সালোকসংশ্লেষ", ph: "fo-to-sin-tha-sis", s: "Leaves use sunlight for photosynthesis.", sb: "পাতা সালোকসংশ্লেষের জন্য সূর্যালোক ব্যবহার করে।" },
      { w: "Nutrient", e: "🪴", bn: "পুষ্টি উপাদান", ph: "nyu-tri-ent", s: "Good soil provides plants with nutrients.", sb: "ভালো মাটি গাছকে পুষ্টি উপাদান দেয়।" },
      { w: "Pruning", e: "✂️", bn: "ছাঁটাই", ph: "pru-ning", s: "Pruning helps the rose bush grow better.", sb: "ছাঁটাই গোলাপগাছকে ভালো বাড়তে সাহায্য করে।" },
      { w: "Irrigation", e: "🚿", bn: "সেচ", ph: "ir-i-gei-shn", s: "Farmers use irrigation during dry months.", sb: "শুকনো মাসে কৃষকরা সেচ ব্যবহার করেন।" },
      { w: "Compost", e: "🍂", bn: "কম্পোস্ট", ph: "kom-post", s: "Compost makes the garden soil rich.", sb: "কম্পোস্ট বাগানের মাটিকে উর্বর করে।" },
      { w: "Bloom", e: "🌸", bn: "ফোটা", ph: "bloom", s: "The roses bloom every May.", sb: "প্রতি মে মাসে গোলাপ ফোটে।" },
      { w: "Fragrance", e: "🌷", bn: "সুগন্ধ", ph: "freig-rans", s: "The flowers have a lovely fragrance.", sb: "ফুলগুলোর সুন্দর সুগন্ধ আছে।" },
      { w: "Wilt", e: "🥀", bn: "শুকিয়ে যাওয়া", ph: "wilt", s: "The flowers wilted in the hot sun.", sb: "রোদে ফুলগুলো শুকিয়ে গিয়েছে।" },
      { w: "Thorn", e: "🌹", bn: "কাঁটা", ph: "thorn", s: "The rose stem has sharp thorns.", sb: "গোলাপের কাণ্ডে ধারালো কাঁটা আছে।" }
    ]
  },
  {
    theme: "Ocean", emoji: "🌊", color: "#0984e3",
    words: [
      { w: "Marine", e: "🐠", bn: "সামুদ্রিক", ph: "ma-reen", s: "Marine life is full of bright colours.", sb: "সামুদ্রিক জীবন উজ্জ্বল রঙে ভরপুর।" },
      { w: "Trench", e: "🌊", bn: "গভীর খাত", ph: "trench", s: "The ocean floor has deep trenches.", sb: "সমুদ্রের তলায় গভীর খাত আছে।" },
      { w: "Sonar", e: "📡", bn: "সোনার", ph: "so-nar", s: "Ships use sonar to measure the depth.", sb: "জাহাজ গভীরতা মাপতে সোনার ব্যবহার করে।" },
      { w: "Plankton", e: "🦠", bn: "প্ল্যাঙ্কটন", ph: "plank-ton", s: "Tiny plankton floats near the surface.", sb: "ক্ষুদ্র প্ল্যাঙ্কটন পৃষ্ঠের কাছে ভাসে।" },
      { w: "Breach", e: "🐋", bn: "জল থেকে লাফ", ph: "breach", s: "The whale breached the water surface.", sb: "তিমিটি জলের উপর থেকে লাফ দিয়েছে।" },
      { w: "Salinity", e: "🧂", bn: "লবণাক্ততা", ph: "sa-lin-i-ti", s: "The sea has a high level of salinity.", sb: "সমুদ্রে লবণাক্ততার মাত্রা বেশি।" },
      { w: "Tsunami", e: "🌊", bn: "সুনামি", ph: "tsu-na-mi", s: "A tsunami can be very dangerous.", sb: "সুনামি খুব বিপজ্জনক হতে পারে।" },
      { w: "Harbour", e: "⚓", bn: "বন্দর", ph: "har-ber", s: "The fishing boats returned to the harbour.", sb: "মাছধরার নৌকাগুলো বন্দরে ফিরে এসেছে।" },
      { w: "Diving", e: "🤿", bn: "ডাইভিং", ph: "dai-ving", s: "We went diving near the colourful reef.", sb: "আমরা রঙিন প্রবালের কাছে ডাইভিং করেছি।" },
      { w: "Submerged", e: "🛥️", bn: "নিমজ্জিত", ph: "sub-merjd", s: "The old ship lay submerged for years.", sb: "পুরোনো জাহাজটি বছরের পর বছর নিমজ্জিত ছিল।" }
    ]
  },
  {
    theme: "Space", emoji: "🚀", color: "#6c5ce7",
    words: [
      { w: "Solar system", e: "🪐", bn: "সৌরজগৎ", ph: "so-lar sis-tem", s: "Earth is part of our solar system.", sb: "পৃথিবী আমাদের সৌরজগতের অংশ।" },
      { w: "Rotation", e: "🔄", bn: "আবর্তন", ph: "ro-tei-shn", s: "Earth's rotation gives us day and night.", sb: "পৃথিবীর আবর্তন আমাদের দিন ও রাত দেয়।" },
      { w: "Revolution", e: "🔄", bn: "পরিভ্রমণ", ph: "re-vo-lu-shn", s: "One revolution around the Sun takes a year.", sb: "সূর্যের চারপাশে এক পরিভ্রমণে একটি বছর লাগে।" },
      { w: "Axis", e: "🪐", bn: "অক্ষ", ph: "ak-sis", s: "The Earth spins on its axis.", sb: "পৃথিবী তার অক্ষের উপর ঘোরে।" },
      { w: "Weightlessness", e: "🧑‍🚀", bn: "ওজনহীনতা", ph: "weit-lis-nes", s: "Astronauts feel weightlessness in space.", sb: "মহাকাশে নভোচারীরা ওজনহীনতা অনুভব করেন।" },
      { w: "Probe", e: "🛰️", bn: "মহাকাশ অন্বেষক যান", ph: "prob", s: "The space probe sent photos back to Earth.", sb: "মহাকাশ অন্বেষক যানটি পৃথিবীতে ছবি পাঠিয়েছে।" },
      { w: "Supernova", e: "💥", bn: "সুপারনোভা", ph: "su-per-no-va", s: "A supernova is the death of a giant star.", sb: "সুপারনোভা একটি বিশাল তারার মৃত্যু।" },
      { w: "Black hole", e: "⚫", bn: "কৃষ্ণগহ্বর", ph: "blak hol", s: "A black hole pulls in even light.", sb: "কৃষ্ণগহ্বর আলোকেও টেনে নেয়।" },
      { w: "Constellation", e: "🌟", bn: "তারামণ্ডল", ph: "kon-sta-lei-shn", s: "We found a constellation in the night sky.", sb: "আমরা রাতের আকাশে একটি তারামণ্ডল খুঁজে পেলাম।" },
      { w: "Mission", e: "🚀", bn: "অভিযান", ph: "mi-shn", s: "The space mission was a great success.", sb: "মহাকাশ অভিযানটি বড় সাফল্য ছিল।" }
    ]
  },
  {
    theme: "Birds", emoji: "🦅", color: "#fdcb6e",
    words: [
      { w: "Avian", e: "🐦", bn: "পাখিসংক্রান্ত", ph: "ei-vi-en", s: "This book is about avian behaviour.", sb: "এই বইটি পাখির আচরণ সম্পর্কে।" },
      { w: "Plumage", e: "🪶", bn: "পালকের সমষ্টি", ph: "plu-mij", s: "The peacock's plumage is truly stunning.", sb: "ময়ূরের পালকের সমষ্টি সত্যিই অসাধারণ।" },
      { w: "Talons", e: "🦅", bn: "নখর", ph: "ta-lnz", s: "The eagle caught the fish with its talons.", sb: "ঈগল নখর দিয়ে মাছটি ধরেছে।" },
      { w: "Nesting", e: "🪺", bn: "বাসা তৈরি", ph: "nes-ting", s: "Birds build nesting sites in early spring.", sb: "পাখিরা বসন্তের শুরুতে বাসা তৈরি করে।" },
      { w: "Hatch", e: "🐣", bn: "ফোটা", ph: "hach", s: "The tiny chicks hatch from their eggs.", sb: "ছোট্ট ছানারা ডিম থেকে ফোটে।" },
      { w: "Fledgling", e: "🐦", bn: "নতুন উড়তে শেখা পাখি", ph: "fledj-ling", s: "The fledgling tried hard to fly.", sb: "ছোট্ট পাখিটি উড়তে জোর চেষ্টা করেছে।" },
      { w: "Soar", e: "🦅", bn: "উঁচুতে উড়া", ph: "sor", s: "Eagles soar high above the hills.", sb: "ঈগল পাহাড়ের উপর উঁচুতে উড়ে বেড়ায়।" },
      { w: "Perch", e: "🐦", bn: "বসা", ph: "perch", s: "The little bird perched on a branch.", sb: "ছোট্ট পাখিটি এক ডালে বসেছিল।" },
      { w: "Chirp", e: "🎵", bn: "কিচিরমিচির", ph: "cherp", s: "Sparrows chirp happily at dawn.", sb: "ভোরে চড়ুইয়া আনন্দে কিচিরমিচির করে।" },
      { w: "Ornithologist", e: "🔭", bn: "পক্ষীবিদ", ph: "or-ni-thol-o-jist", s: "The ornithologist studies rare birds.", sb: "পক্ষীবিদ বিরল পাখি নিয়ে গবেষণা করেন।" }
    ]
  },
  {
    theme: "Bugs", emoji: "🐝", color: "#26de81",
    words: [
      { w: "Metamorphosis", e: "🦋", bn: "রূপান্তর", ph: "met-a-mor-fo-sis", s: "A caterpillar undergoes a strange metamorphosis.", sb: "শুঁয়োপোকা এক অদ্ভুত রূপান্তরের মধ্য দিয়ে যায়।" },
      { w: "Larva", e: "🐛", bn: "লার্ভা", ph: "lar-va", s: "The hungry larva eats leaves all day.", sb: "ক্ষুধার্ত লার্ভা সারাদিন পাতা খায়।" },
      { w: "Pupa", e: "🧵", bn: "পিউপা", ph: "pyu-pa", s: "The pupa rests before becoming a butterfly.", sb: "প্রজাপতি হওয়ার আগে পিউপা বিশ্রাম নেয়।" },
      { w: "Pollination", e: "🌼", bn: "পরাগায়ন", ph: "pol-i-nei-shn", s: "Bees help with the pollination of flowers.", sb: "মৌমাছি ফুলের পরাগায়নে সাহায্য করে।" },
      { w: "Colony", e: "🐜", bn: "উপনিবেশ", ph: "kol-o-ni", s: "An ant colony has thousands of members.", sb: "একটি পিঁপড়া উপনিবেশে হাজারো সদস্য থাকে।" },
      { w: "Pheromone", e: "🐜", bn: "ফেরোমোন", ph: "fe-ro-mone", s: "Ants leave a pheromone trail for others.", sb: "পিঁপড়ারা অন্যদের জন্য ফেরোমোনের পথ রেখে যায়।" },
      { w: "Exoskeleton", e: "🪲", bn: "বহিঃকঙ্কাল", ph: "ek-so-skel-e-ton", s: "An insect has a hard exoskeleton.", sb: "পোকার শক্ত বহিঃকঙ্কাল থাকে।" },
      { w: "Shed", e: "🪲", bn: "খোলক ছাড়া", ph: "shed", s: "A growing cicada sheds its old skin.", sb: "বাড়তে থাকা সিকাডা তার পুরোনো চামড়া ছেড়ে দেয়।" },
      { w: "Sting", e: "🐝", bn: "হুল", ph: "sting", s: "A bee's sting can be quite painful.", sb: "মৌমাছির হুল বেশ ব্যথাদায়ক হতে পারে।" },
      { w: "Venom", e: "🕷️", bn: "বিষ", ph: "ven-om", s: "Spider venom helps it catch small prey.", sb: "মাকড়সার বিষ ছোট শিকার ধরতে সাহায্য করে।" }
    ]
  },
  {
    theme: "Actions", emoji: "🔍", color: "#e17055",
    words: [
      { w: "Investigate", e: "🔍", bn: "তদন্ত করা", ph: "in-ves-ti-geit", s: "The police investigated the missing bag.", sb: "পুলিশ নিখোঁজ ব্যাগটি তদন্ত করেছে।" },
      { w: "Analyse", e: "🧪", bn: "বিশ্লেষণ", ph: "a-na-laiz", s: "Let's analyse the results together.", sb: "চলো ফলাফলগুলো একসাথে বিশ্লেষণ করি।" },
      { w: "Evaluate", e: "⚖️", bn: "মূল্যায়ন", ph: "i-val-yu-eit", s: "The teacher evaluated our homework.", sb: "শিক্ষক আমাদের বাড়ির কাজ মূল্যায়ন করেছেন।" },
      { w: "Demonstrate", e: "🧑‍🏫", bn: "প্রদর্শন", ph: "dem-on-streit", s: "He demonstrated the science experiment.", sb: "সে বিজ্ঞান পরীক্ষাটি প্রদর্শন করেছে।" },
      { w: "Persuade", e: "🗣️", bn: "বোঝানো", ph: "per-sweid", s: "She persuaded me to join the club.", sb: "সে আমাকে ক্লাব যোগ দিতে বুঝিয়েছে।" },
      { w: "Negotiate", e: "🤝", bn: "আলোচনা", ph: "ni-go-shi-eit", s: "They negotiated a fair agreement.", sb: "তারা একটি ন্যায্য চুক্তির আলোচনা করেছে।" },
      { w: "Persist", e: "💪", bn: "অধ্যবসায়", ph: "per-sist", s: "If you persist, you will surely succeed.", sb: "অধ্যবসায় করলে তুমি নিশ্চয়ই সফল হবে।" },
      { w: "Adapt", e: "🦎", bn: "অভিযোজিত হওয়া", ph: "a-dapt", s: "Animals adapt to their surroundings.", sb: "প্রাণীরা তাদের পরিবেশের সাথে অভিযোজিত হয়।" },
      { w: "Contribute", e: "🤝", bn: "অবদান", ph: "kon-tri-byut", s: "Everyone contributed to the class project.", sb: "সবাই শ্রেণী প্রকল্পে অবদান রেখেছে।" },
      { w: "Achieve", e: "🏆", bn: "অর্জন", ph: "a-cheev", s: "You can achieve great things with practice.", sb: "অনুশীলন দিয়ে তুমি মহৎ কিছু অর্জন করতে পারো।" }
    ]
  },
  {
    theme: "Opposites", emoji: "↔️", color: "#00cec9",
    words: [
      { w: "Abundant", e: "🍲", bn: "প্রচুর", ph: "a-bun-dant", s: "The garden has an abundant supply of flowers.", sb: "বাগানে প্রচুর ফুল আছে।" },
      { w: "Scarce", e: "💧", bn: "দুষ্প্রাপ্য", ph: "skers", s: "Clean water is scarce in some places.", sb: "কিছু জায়গায় পরিচ্ছন্ন পানি দুষ্প্রাপ্য।" },
      { w: "Fragile", e: "🏺", bn: "ভঙ্গুর", ph: "fra-jail", s: "This old clay pot is very fragile.", sb: "এই পুরোনো মাটির পাত্রটি খুব ভঙ্গুর।" },
      { w: "Sturdy", e: "🪵", bn: "মজবুত", ph: "ster-di", s: "The wooden table is strong and sturdy.", sb: "কাঠের টেবিলটি শক্ত ও মজবুত।" },
      { w: "Modest", e: "🙏", bn: "বিনয়ী", ph: "mo-dest", s: "She is very modest about her success.", sb: "সে তার সাফল্য নিয়ে খুব বিনয়ী।" },
      { w: "Arrogant", e: "😤", bn: "অহংকারী", ph: "a-ro-gant", s: "Don't be arrogant after winning a prize.", sb: "পুরস্কার জয়ের পর অহংকারী হয়ো না।" },
      { w: "Cautious", e: "🧐", bn: "সতর্ক", ph: "ko-shus", s: "Be cautious when using sharp tools.", sb: "ধারালো হাতিয়ার ব্যবহার করার সময় সতর্ক থাকো।" },
      { w: "Reckless", e: "🏍️", bn: "অসাবধানী", ph: "rek-lis", s: "Reckless driving causes accidents.", sb: "অসাবধানী গাড়ি চালানো দুর্ঘটনা ঘটায়।" },
      { w: "Transparent", e: "🪟", bn: "স্বচ্ছ", ph: "trans-pe-rent", s: "The clean glass window is transparent.", sb: "পরিচ্ছন্ন কাঁচের জানালা স্বচ্ছ।" },
      { w: "Opaque", e: "🪨", bn: "অস্বচ্ছ", ph: "o-peik", s: "The thick stone wall is opaque.", sb: "মোটা পাথরের দেয়াল অস্বচ্ছ।" }
    ]
  },
  {
    theme: "Places", emoji: "🏙️", color: "#a29bfe",
    words: [
      { w: "Metropolis", e: "🏙️", bn: "মহানগর", ph: "me-trop-o-lis", s: "A metropolis is a very large city.", sb: "মহানগর হলো খুব বড় শহর।" },
      { w: "Suburb", e: "🏘️", bn: "শহরতলি", ph: "sub-erb", s: "They live in a quiet green suburb.", sb: "তারা শান্ত সবুজ শহরতলিতে বাস করেন।" },
      { w: "Industrial", e: "🏭", bn: "শিল্প সংক্রান্ত", ph: "in-das-tri-el", s: "The industrial area is very busy.", sb: "শিল্প এলাকাটি খুব ব্যস্ত।" },
      { w: "Rural", e: "🌾", bn: "গ্রামীণ", ph: "ru-ral", s: "Rural life is calm and peaceful.", sb: "গ্রামীণ জীবন শান্ত ও নিরব।" },
      { w: "Urban", e: "🏙️", bn: "নগর সংক্রান্ত", ph: "er-ban", s: "Urban life is often fast and crowded.", sb: "নগর জীবন প্রায় দ্রুত ও ভিড়ে ভরা।" },
      { w: "Landmark", e: "🗼", bn: "ল্যান্ডমার্ক", ph: "land-mark", s: "The old clock tower is a famous landmark.", sb: "পুরোনো ঘড়ির টাওয়ার একটি বিখ্যাত ল্যান্ডমার্ক।" },
      { w: "District", e: "🗺️", bn: "জেলা", ph: "dis-trikt", s: "Our district has many good schools.", sb: "আমাদের জেলায় অনেক ভালো স্কুল আছে।" },
      { w: "Province", e: "🗺️", bn: "প্রদেশ", ph: "prov-ins", s: "That province is famous for its tea gardens.", sb: "সেই প্রদেশ চা বাগানের জন্য বিখ্যাত।" },
      { w: "Continent", e: "🌍", bn: "মহাদেশ", ph: "kon-ti-nent", s: "Asia is the largest continent on Earth.", sb: "এশিয়া পৃথিবীর বৃহত্তম মহাদেশ।" },
      { w: "Destination", e: "🧳", bn: "গন্তব্য", ph: "des-ti-nei-shn", s: "The beach was our favourite destination.", sb: "সমুদ্র সৈকত আমাদের প্রিয় গন্তব্য ছিল।" }
    ]
  },
  {
    theme: "Grand Finale", emoji: "🎉", color: "#ff6b6b",
    words: [
      { w: "Achievement", e: "🏆", bn: "অর্জন", ph: "a-cheev-ment", s: "Every small step is an achievement.", sb: "প্রতিটি ছোট পা একটা অর্জন।" },
      { w: "Perseverance", e: "💪", bn: "অধ্যবসায়", ph: "per-se-ve-rans", s: "Perseverance turns hard work into success.", sb: "অধ্যবসায় কঠোর পরিশ্রমকে সাফল্যে রূপ দেয়।" },
      { w: "Wisdom", e: "🦉", bn: "প্রজ্ঞা", ph: "wiz-dom", s: "Old books are full of wisdom.", sb: "পুরোনো বই প্রজ্ঞায় ভরপুর।" },
      { w: "Integrity", e: "🛡️", bn: "সততা", ph: "in-teg-ri-ti", s: "Integrity means always telling the truth.", sb: "সততা মানে সবসময় সত্য কথা বলা।" },
      { w: "Wonder", e: "✨", bn: "বিস্ময়", ph: "wun-der", s: "The night sky is full of wonder.", sb: "রাতের আকাশ বিস্ময়ে ভরপুর।" },
      { w: "Inspiration", e: "💡", bn: "অনুপ্রেরণা", ph: "in-spi-rei-shn", s: "Good teachers give us inspiration.", sb: "ভালো শিক্ষক আমাদের অনুপ্রেরণা দেন।" },
      { w: "Resilience", e: "🌱", bn: "স্থিতিস্থাপকতা", ph: "ri-zil-yens", s: "Resilience helps us try again after failure.", sb: "স্থিতিস্থাপকতা ব্যর্থতার পর আবার চেষ্টা করতে সাহায্য করে।" },
      { w: "Kindness", e: "🤝", bn: "দয়া", ph: "kaind-nes", s: "Small acts of kindness change the world.", sb: "দয়ার ছোট কাজগুলো পৃথিবী বদলে দেয়।" },
      { w: "Mastery", e: "🎯", bn: "দক্ষতা", ph: "mas-ter-i", s: "Patient practice leads to mastery.", sb: "ধৈর্য সহকারে অনুশীলন দক্ষতা আনে।" },
      { w: "Potential", e: "🚀", bn: "সম্ভাবনা", ph: "po-ten-shl", s: "Every child has enormous potential.", sb: "প্রতিটি শিশুর অপার সম্ভাবনা আছে।" }
    ]
  }
];
