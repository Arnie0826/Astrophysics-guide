const translationsIndex4 = {
    ru: {
      pageTitle: "Закон сохранения энергии и типы орбит",
      pageHeading: "Закон сохранения энергии и типы орбит",
      description: "Для движения тела с массой m в гравитационном поле тела с массой M, со скоростью V на расстоянии r от гравитационного центра справедливо следующее соотношение:",
      energyText: "где E₀ — постоянная величина, если на тело не действуют внешние силы, кроме силы притяжения к центральному телу, равная сумме кинетической и потенциальной энергии тела. Это равенство принято называть законом сохранения энергии для тела, движущегося в поле консервативных (потенциальных) сил.",
      trajectoryText: "Если E₀ > 0, траектория тела — гипербола, если E₀ = 0 — парабола, а если E₀ < 0 — эллипс. При эллиптической траектории движение ограничено, так как малое тело не может бесконечно удаляться, поскольку суммарная энергия меньше нуля. На Рис. 4 представлены примеры возможных траекторий относительно центрального тела (точка C). При V₀ > V₂ – тело движется по гиперболе, при V₀ = V₂ – по параболе, а при V₀ ≤ V₂ – по эллипсу.",
      orbitalText: "Первая космическая скорость — минимальная скорость, необходимая для того, чтобы маломассивное тело стало искусственным спутником центрального тела.",
      speedText: "где M — масса центрального тела, а R — радиус орбиты. Отсюда можно получить выражение для скорости искусственного небесного тела на высоте h над поверхностью тела радиуса R.",
      backLink: "На главную",
      nextLink: "Следующая страница",
      goBackButton: "Назад"
    },
    en: {
      pageTitle: "Law of Conservation of Energy and Orbital Types",
      pageHeading: "Law of Conservation of Energy and Orbital Types",
      description: "For the motion of a body with mass m in the gravitational field of a body with mass M, moving at speed V at a distance r from the gravitational center, the following relation holds:",
      energyText: "where E₀ is a constant, if no external forces act on the body except the gravitational attraction of the central body, equal to the sum of its kinetic and potential energies. This equality is known as the law of conservation of energy for a body moving in a field of conservative (potential) forces.",
      trajectoryText: "If E₀ > 0, the trajectory is a hyperbola; if E₀ = 0, it is a parabola; and if E₀ < 0, the trajectory is an ellipse. In an elliptical trajectory, the motion is limited because a small body cannot recede indefinitely when the total energy is less than zero. Figure 4 shows examples of possible trajectories relative to the central body (point C).",
      orbitalText: "The first cosmic velocity is the minimum speed required for a small body to become an artificial satellite of the central body.",
      speedText: "where M is the mass of the central body and R is the orbital radius. From this, an expression for the speed of an artificial celestial body at a height h above the surface of a body of radius R can be derived.",
      backLink: "Back to Home",
      nextLink: "Next Page",
      goBackButton: "Go Back"
    },
    kk: {
      pageTitle: "Энергияны сақтау заңы және орбиталар түрлері",
      pageHeading: "Энергияны сақтау заңы және орбиталар түрлері",
      description: "m массасындағы дененің, M массасындағы дененің гравитациялық өрісінде, V жылдамдығымен, r қашықтықта қозғалысы үшін келесі қатынас ақиқат:",
      energyText: "мұндағы E₀ — тұрақты шамасы, егер денеге сыртқы күштер әсер етпесе, тек орталық дененің тарту күші әсер етіп, оның кинетикалық және потенциалдық энергиясының қосындысына тең. Бұл теңдік дененің консервативтік (потенциалдық) өрісіндегі қозғалысы үшін энергияны сақтау заңы деп аталады.",
      trajectoryText: "Егер E₀ > 0, дененің траекториясы – гипербола; егер E₀ = 0 – парабола; егер E₀ < 0 – эллипс. Эллиптикалық траекторияда қозғалыс шектеулі, өйткені кіші дене шексіз жылдамдықпен алысқа жете алмайды, себебі жалпы энергия теріс болады. 4-суретте орталық денеге қатысты мүмкін траектория үлгілері берілген (C нүктесі). Егер V₀ > V₂ – дене гиперболамен қозғалады, егер V₀ = V₂ – параболамен, ал егер V₀ ≤ V₂ – эллипспен.",
      orbitalText: "Бірінші ғарыш жылдамдығы – орталық дененің жасанды серігі болу үшін қажетті минималды жылдамдық.",
      speedText: "мұндағы M – орталық дененің массасы, ал R – орбита радиусы. Осыдан, R радиусты дененің беті үстіндегі h биіктіктегі жасанды аспан денесінің жылдамдығын анықтайтын өрнек алынады.",
      backLink: "Басты бетке",
      nextLink: "Келесі бет",
      goBackButton: "Артқа"
    }
  };
  
  function changeLanguage(lang) {
    document.getElementById("page-title").innerText = translationsIndex4[lang].pageTitle;
    document.title = translationsIndex4[lang].pageTitle;
    document.getElementById("page-heading").innerText = translationsIndex4[lang].pageHeading;
    document.getElementById("description").innerText = translationsIndex4[lang].description;
    document.getElementById("energy-text").innerHTML = translationsIndex4[lang].energyText;
    document.getElementById("trajectory-text").innerText = translationsIndex4[lang].trajectoryText;
    document.getElementById("orbital-text").innerText = translationsIndex4[lang].orbitalText;
    document.getElementById("speed-text").innerText = translationsIndex4[lang].speedText;
    document.getElementById("back-link").innerText = translationsIndex4[lang].backLink;
    document.getElementById("next-link").innerText = translationsIndex4[lang].nextLink;
    if (document.getElementById("back-button")) {
      document.getElementById("back-button").innerText = translationsIndex4[lang].goBackButton;
    }
  }
  
  function toggleDarkMode() {
    document.body.classList.add("dark-mode");
  }
  
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
  }
  
  