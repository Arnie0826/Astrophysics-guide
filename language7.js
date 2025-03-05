const translationsIndex7 = {
    ru: {
      pageTitle: "Фазы планет и спутников",
      pageHeading: "Фазы планет и спутников",
      phaseIntro: "<b>Фаза</b> <i>планеты (спутника) — отношение площади</i> освещённой части видимого диска ко всей его площади. Фаза рассчитывается по формуле:",
      phaseDetails: "<b>где φ — фазовый угол</b> — угол между лучом света, падающим от Солнца на планету, и лучом, отражённым от неё в сторону наблюдателя. Фаза объекта может принимать значения от 0 до 1. Видимая граница между освещённой и неосвещённой частями поверхности объекта называется терминатором. В терминаторной зоне для наблюдателя источник пересекает горизонт.",
      backLink: "На главную",
      nextLink: "Следующая страница",
      goBackButton: "Назад"
    },
    en: {
      pageTitle: "Phases of Planets and Satellites",
      pageHeading: "Phases of Planets and Satellites",
      phaseIntro: "<b>Phase</b> of a planet (or satellite) is the ratio of the illuminated area of its visible disk to its total area. The phase is calculated by the formula:",
      phaseDetails: "<b>where φ is the phase angle</b> — the angle between the ray of light coming from the Sun to the planet and the ray reflected from it toward the observer. The phase of an object can range from 0 to 1. The visible boundary between the illuminated and dark parts of the object's surface is called the terminator. In the terminator zone, the source crosses the horizon for the observer.",
      backLink: "Back to Home",
      nextLink: "Next Page",
      goBackButton: "Go Back"
    },
    kk: {
      pageTitle: "Планеталар мен спутниктердің фазалары",
      pageHeading: "Планеталар мен спутниктердің фазалары",
      phaseIntro: "<b>Фаза</b> – планета (немесе спутниктің) көрінетін дискісінің жарықтанған ауданының жалпы ауданға қатынасы. Фаза келесі формула бойынша есептеледі:",
      phaseDetails: "<b>мұндағы φ – фазалық бұрыш</b> – Күннен планетаға түсетін жарық сәулесімен, планетадан көрерменге шағылысып келетін сәуле арасындағы бұрыш. Объектінің фазасы 0-ден 1-ге дейін болуы мүмкін. Объектінің жарықтанған және көлеңкелі бөліктерінің арасындағы көрінетін шекара терминатор деп аталады. Терминатор аймағында бақылаушы үшін көзіне көлеңке шегетін нүкте көрінеді.",
      backLink: "Басты бетке",
      nextLink: "Келесі бет",
      goBackButton: "Артқа"
    }
  };
  
  function changeLanguage(lang) {
    document.getElementById("page-title").innerText = translationsIndex7[lang].pageTitle;
    document.title = translationsIndex7[lang].pageTitle;
    document.getElementById("page-heading").innerText = translationsIndex7[lang].pageHeading;
    document.getElementById("phase-intro").innerHTML = translationsIndex7[lang].phaseIntro;
    document.getElementById("phase-details").innerText = translationsIndex7[lang].phaseDetails;
    document.getElementById("back-link").innerText = translationsIndex7[lang].backLink;
    document.getElementById("next-link").innerText = translationsIndex7[lang].nextLink;
    if (document.getElementById("back-button")) {
      document.getElementById("back-button").innerText = translationsIndex7[lang].goBackButton;
    }
  }
  
  function toggleDarkMode() {
    document.body.classList.add("dark-mode");
  }
  
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
  }
  