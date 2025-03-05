const translationsIndex2 = {
    ru: {
      pageTitle: "Расстояние и размеры",
      pageHeading: "Расстояние и размеры",
      description: "<b>Астрономическая единица</b> - единица измерения расстояния в астрономии, равная большой полуоси орбиты Земли.<br>1 а.е. = 149 597 870 70 м ~ 5.1x10¹ м (1.1)<br><br><b>Годичный параллакс</b> объекта - это угол, под которым видно орбиту Земли из окрестностей данного объекта. Применяется к объектам вне Солнечной системы.",
      moreText: "где а - большая полуось орбиты Земли и r - расстояние до объекта имеют одинаковые единицы измерений. Учитывая малость угла п можно считать sin n = r в (1.2), тогда",
      parallaxDesc: "<b>Горизонтальный параллакс (р)</b> - это угол, под которым виден радиус Земли (или R) для наблюдателя в центре объекта, когда последний находится на горизонте:",
      backLink: "На главную",
      nextLink: "Следующая страница",
      goBackButton: "Назад"
    },
    en: {
      pageTitle: "Distance and Sizes",
      pageHeading: "Distance and Sizes",
      description: "<b>Astronomical Unit</b> - the unit of distance in astronomy, equal to the semi-major axis of Earth's orbit.<br>1 AU = 149,597,870,70 m ~ 5.1x10¹ m (1.1)<br><br><b>Annual Parallax</b> of an object is the angle under which Earth's orbit is seen from the vicinity of that object. It is applied to objects outside the Solar System.",
      moreText: "where a is the semi-major axis of Earth's orbit and r is the distance to the object in the same measurement units. Given the small angle, one can assume sin n = r in (1.2), then",
      parallaxDesc: "<b>Horizontal parallax (p)</b> is the angle under which the radius of Earth (or R) is seen by an observer at the center of the object, when the object is on the horizon:",
      backLink: "Back to Home",
      nextLink: "Next Page",
      goBackButton: "Go Back"
    },
    kk: {
      pageTitle: "Қашықтық және өлшемдер",
      pageHeading: "Қашықтық және өлшемдер",
      description: "<b>Астрономиялық бірлік</b> - астрономиядағы қашықтық өлшем бірлігі, Жердің орбитасының үлкен жарты осіне тең.<br>1 а.е. = 149 597 870 70 м ~ 5.1x10¹ м (1.1)<br><br><b>Жылдық параллакс</b> объекті - бұл Жер орбитасын объекті маңында көретін бұрыш. Бұл Күн жүйесінен тыс объектілерге қолданылады.",
      moreText: "мұндағы а – Жер орбитасының жарты осі, r – объектіге дейінгі қашықтық, бірліктер бірдей. Бойынша бұрыштың кішкентайлығын ескере отырып, (1.2) формуласына сәйкес sin n = r деп есептеуге болады, онда",
      parallaxDesc: "<b>Горизонтальды параллакс (p)</b> - объектінің шетінде тұрған бақылаушы үшін Жердің радиусы (немесе R) көрінетін бұрышы:",
      backLink: "Басты бетке",
      nextLink: "Келесі бет",
      goBackButton: "Артқа"
    }
  };
  
  function changeLanguage(lang) {
    document.getElementById("page-title").innerText = translationsIndex2[lang].pageTitle;
    document.title = translationsIndex2[lang].pageTitle;
    document.getElementById("page-heading").innerText = translationsIndex2[lang].pageHeading;
    document.getElementById("description").innerHTML = translationsIndex2[lang].description;
    document.getElementById("more-text").innerText = translationsIndex2[lang].moreText;
    document.getElementById("parallax-desc").innerHTML = translationsIndex2[lang].parallaxDesc;
    document.getElementById("back-link").innerText = translationsIndex2[lang].backLink;
    document.getElementById("next-link").innerText = translationsIndex2[lang].nextLink;
    if (document.getElementById("back-button")) {
      document.getElementById("back-button").innerText = translationsIndex2[lang].goBackButton;
    }
  }
  
  function toggleDarkMode() {
    document.body.classList.add("dark-mode");
  }
  
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
  }
  