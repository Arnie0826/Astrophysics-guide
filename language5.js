const translationsIndex5 = {
    ru: {
      pageTitle: "Законы Кеплера",
      pageHeading: "Законы Кеплера",
      law1Text: "<b>I-ый закон:</b> Все планеты движутся по эллиптическим орбитам, в одном из фокусов которых находится Солнце.",
      law2Text: "<b>II-ой закон:</b> Радиус-вектор планеты за равные промежутки времени заметает равные площади:",
      law3Text: "<b>III-ий закон:</b> Квадраты периодов обращения планет относятся, как кубы больших полуосей их орбит.",
      additionalLawText: "где а — большая полуось, Т — период обращения.",
      newtonLawText: "<b>Обобщённый</b> Ньютонов <b>III-ий закон Кеплера</b> имеет следующий вид:",
      finalText: "где М₁ и М₂ — массы центральных тел, m₁ и m₂ — массы обращающихся вокруг них тел. Так как массы планет m много меньше массы звезды M, то M + m ≈ M.",
      backLink: "На главную",
      nextLink: "Следующая страница",
      goBackButton: "Назад"
    },
    en: {
      pageTitle: "Kepler's Laws",
      pageHeading: "Kepler's Laws",
      law1Text: "<b>First Law:</b> All planets move in elliptical orbits, with the Sun at one of the foci.",
      law2Text: "<b>Second Law:</b> A line joining a planet and the Sun sweeps out equal areas in equal intervals of time:",
      law3Text: "<b>Third Law:</b> The squares of the orbital periods of planets are proportional to the cubes of the semi-major axes of their orbits.",
      additionalLawText: "where a is the semi-major axis and T is the orbital period.",
      newtonLawText: "<b>The generalized</b> Newtonian <b>Third Law of Kepler</b> is as follows:",
      finalText: "where M₁ and M₂ are the masses of the central bodies, and m₁ and m₂ are the masses of the orbiting bodies. Since the masses of the planets m are much smaller than the mass of the star M, M + m ≈ M.",
      backLink: "Back to Home",
      nextLink: "Next Page",
      goBackButton: "Go Back"
    },
    kk: {
      pageTitle: "Кеплер заңдары",
      pageHeading: "Кеплер заңдары",
      law1Text: "<b>Бірінші заң:</b> Барлық планеталар эллиптикалық орбиталар бойымен қозғалады, олардың бір фокусында Күн орналасқан.",
      law2Text: "<b>Екінші заң:</b> Планета мен Күнді қосатын түзу тең уақыт аралығында тең аудандарды кеседі:",
      law3Text: "<b>Үшінші заң:</b> Планеталардың айналу кезеңдерінің квадраттары олардың орбиталарының жарты осьтер кубына пропорционал.",
      additionalLawText: "мұндағы a – үлкен жарты ось, T – айналу кезеңі.",
      newtonLawText: "<b>Жалпылама</b> Ньютондық <b>Кеплер заңдарының Үшінші заңы</b> келесідей:",
      finalText: "мұндағы M₁ және M₂ – орталық денелердің массалары, m₁ және m₂ – олардың айналасындағы денелердің массалары. Планеталардың массалары m, жұлдыздың M массасынан едәуір аз болғандықтан, M + m ≈ M.",
      backLink: "Басты бетке",
      nextLink: "Келесі бет",
      goBackButton: "Артқа"
    }
  };
  
  function changeLanguage(lang) {
    document.getElementById("page-title").innerText = translationsIndex5[lang].pageTitle;
    document.title = translationsIndex5[lang].pageTitle;
    document.getElementById("page-heading").innerText = translationsIndex5[lang].pageHeading;
    document.getElementById("law1-text").innerHTML = translationsIndex5[lang].law1Text;
    document.getElementById("law2-text").innerHTML = translationsIndex5[lang].law2Text;
    document.getElementById("law3-text").innerHTML = translationsIndex5[lang].law3Text;
    document.getElementById("additional-law-text").innerText = translationsIndex5[lang].additionalLawText;
    document.getElementById("newton-law-text").innerHTML = translationsIndex5[lang].newtonLawText;
    document.getElementById("final-text").innerText = translationsIndex5[lang].finalText;
    document.getElementById("back-link").innerText = translationsIndex5[lang].backLink;
    document.getElementById("next-link").innerText = translationsIndex5[lang].nextLink;
    if (document.getElementById("back-button")) {
      document.getElementById("back-button").innerText = translationsIndex5[lang].goBackButton;
    }
  }
  
  function toggleDarkMode() {
    document.body.classList.add("dark-mode");
  }
  
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
  }
  
  