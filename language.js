const translations = {
    ru: {
      title: "АСТРАДЬ <br> КРАТКИЙ СБОРНИК ФОРМУЛ ПО АСТРОФИЗИКЕ",
      navHome: "Главная",
      subtitle: "Разделы астрономии",
      topic1: "Расстояние и размеры",
      topic2: "Закон всемирного тяготения",
      topic3: "Закон сохранения энергии",
      topic4: "Законы Кеплера",
      topic5: "Таблица постоянных",
      topic6: "Фазы планет и спутников",
      topic7: "Материалы",
      darkModeBtn: "Тёмный режим",
      lightModeBtn: "Светлый режим"
    },
    en: {
      title: "ASTRAD <br> A BRIEF COLLECTION OF ASTROPHYSICS FORMULAS",
      navHome: "Home",
      subtitle: "Astronomy Sections",
      topic1: "Distance and Sizes",
      topic2: "Universal Law of Gravitation",
      topic3: "Law of Conservation of Energy",
      topic4: "Kepler's Laws",
      topic5: "Constant Table",
      topic6: "Phases of Planets and Satellites",
      topic7: "Materials",
      darkModeBtn: "Dark Mode",
      lightModeBtn: "Light Mode"
    },
    kk: {
      title: "АСТРАДЬ <br> АСТРОФИЗИКА ФОРМУЛАЛАРЫНЫҢ ҚЫСҚАША ЖИНАҒЫ",
      navHome: "Басты бет",
      subtitle: "Астрономия бөлімдері",
      topic1: "Қашықтық және өлшемдер",
      topic2: "Ғаламдық тартылыс заңы",
      topic3: "Энергияны сақтау заңы",
      topic4: "Кеплер заңдары",
      topic5: "Тұрақты кесте",
      topic6: "Планеталар мен спутниктердің фазалары",
      topic7: "Материалдар",
      darkModeBtn: "Қараңғы режим",
      lightModeBtn: "Жарық режим"
    }
  };
  
  function changeLanguage(lang) {
    document.getElementById("title").innerHTML = translations[lang].title;
    document.getElementById("nav-home").innerText = translations[lang].navHome;
    document.getElementById("subtitle").innerText = translations[lang].subtitle;
  
    // Update each topic link
    document.getElementById("topic1").innerText = translations[lang].topic1;
    document.getElementById("topic2").innerText = translations[lang].topic2;
    document.getElementById("topic3").innerText = translations[lang].topic3;
    document.getElementById("topic4").innerText = translations[lang].topic4;
    document.getElementById("topic5").innerText = translations[lang].topic5;
    document.getElementById("topic6").innerText = translations[lang].topic6;
    document.getElementById("topic7").innerText = translations[lang].topic7;
  
    // Update dark/light mode buttons
    document.getElementById("darkModeBtn").innerText = translations[lang].darkModeBtn;
    document.getElementById("lightModeBtn").innerText = translations[lang].lightModeBtn;
  }
  
  function toggleDarkMode() {
    document.body.classList.add("dark-mode");
  }
  
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
  }
  