const translationsIndex3 = {
    ru: {
      pageTitle: "Закон всемирного тяготения",
      pageHeading: "Закон всемирного тяготения",
      description: "Согласно закону всемирного тяготения, сила притяжения между двумя телами с массами M₁ и M₂, находящимися на расстоянии r, равна...",
      constantText: "где G = 6.67 • 10⁻¹¹ м³/(кг•с²) – <b>гравитационная постоянная</b>.",
      potentialText: "<b>Гравитационный потенциал</b> поля точечной (или сферически симметричной) массы M на расстоянии r равен работе, которую необходимо затратить, чтобы принести единичную массу с бесконечности в данную точку. Эта работа отрицательна и является <b>потенциальной энергией</b>.",
      accelerationText: "Напряженность гравитационного поля (dU/dr) часто называют <b>ускорением свободного падения g</b>, где...",
      backLink: "На главную",
      nextLink: "Следующая страница",
      goBackButton: "Назад"
    },
    en: {
      pageTitle: "Universal Law of Gravitation",
      pageHeading: "Universal Law of Gravitation",
      description: "According to the universal law of gravitation, the gravitational force between two bodies with masses M₁ and M₂, separated by a distance r, is equal to...",
      constantText: "where G = 6.67 • 10⁻¹¹ m³/(kg•s²) – the <b>gravitational constant</b>.",
      potentialText: "<b>The gravitational potential</b> of a point (or spherically symmetric) mass M at a distance r is equal to the work required to bring a unit mass from infinity to that point. This work is negative and represents the <b>potential energy</b>.",
      accelerationText: "The gradient of the gravitational field (dU/dr) is often called the <b>acceleration due to gravity g</b>, where...",
      backLink: "Back to Home",
      nextLink: "Next Page",
      goBackButton: "Go Back"
    },
    kk: {
      pageTitle: "Ғаламдық тартылыс заңы",
      pageHeading: "Ғаламдық тартылыс заңы",
      description: "Ғаламдық тартылыс заңы бойынша, екі дененің, массалары M₁ және M₂, арақашықтық r болған кезде, олардың арасындағы тартылыс күші ... тең.",
      constantText: "мұндағы G = 6.67 • 10⁻¹¹ м³/(кг•с²) – <b>гравитация тұрақтысы</b>.",
      potentialText: "<b>Гравитациялық потенциал</b> нүктелік (немесе сфералық симметриялы) M массасының r қашықтықтағы мәні – бірлік массаны шексіздікке дейін жеткізуге қажетті жұмыс. Бұл жұмыс теріс және <b>потенциалдық энергия</b> деп аталады.",
      accelerationText: "Гравитациялық өрістің градиенті (dU/dr) жиі <b>еркін түсу үдеуі g</b> деп аталады, мұнда...",
      backLink: "Басты бетке",
      nextLink: "Келесі бет",
      goBackButton: "Артқа"
    }
  };
  
  function changeLanguage(lang) {
    document.getElementById("page-title").innerText = translationsIndex3[lang].pageTitle;
    document.title = translationsIndex3[lang].pageTitle;
    document.getElementById("page-heading").innerText = translationsIndex3[lang].pageHeading;
    document.getElementById("description").innerHTML = translationsIndex3[lang].description;
    document.getElementById("constant-text").innerHTML = translationsIndex3[lang].constantText;
    document.getElementById("potential-text").innerHTML = translationsIndex3[lang].potentialText;
    document.getElementById("acceleration-text").innerHTML = translationsIndex3[lang].accelerationText;
    document.getElementById("back-link").innerText = translationsIndex3[lang].backLink;
    document.getElementById("next-link").innerText = translationsIndex3[lang].nextLink;
    if (document.getElementById("back-button")) {
      document.getElementById("back-button").innerText = translationsIndex3[lang].goBackButton;
    }
  }
  
  function toggleDarkMode() {
    document.body.classList.add("dark-mode");
  }
  
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
  }
  
  