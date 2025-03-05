const translationsIndex8 = {
    ru: {
      pageTitle: "Материалы",
      pageHeading: "Материалы",
      materialText: "Материалы:",
      syllabusLink: "Силлабус",
      videoLink: "Видео",
      backLink: "На главную",
      goBackButton: "Назад"
    },
    en: {
      pageTitle: "Materials",
      pageHeading: "Materials",
      materialText: "Materials:",
      syllabusLink: "Syllabus",
      videoLink: "Video",
      backLink: "Back to Home",
      goBackButton: "Go Back"
    },
    kk: {
      pageTitle: "Материалдар",
      pageHeading: "Материалдар",
      materialText: "Материалдар:",
      syllabusLink: "Силлабус",
      videoLink: "Бейне",
      backLink: "Басты бетке",
      goBackButton: "Артқа"
    }
  };
  
  function changeLanguage(lang) {
    document.getElementById("page-title").innerText = translationsIndex8[lang].pageTitle;
    document.title = translationsIndex8[lang].pageTitle;
    document.getElementById("page-heading").innerText = translationsIndex8[lang].pageHeading;
    
    // Update the material header text, if desired.
    if (document.getElementById("material-text")) {
      document.getElementById("material-text").innerText = translationsIndex8[lang].materialText;
    }
    
    // Update the text inside the buttons wrapped in links:
    if (document.getElementById("syllabus-link")) {
      document.querySelector("#syllabus-link button").innerText = translationsIndex8[lang].syllabusLink;
    }
    if (document.getElementById("video-link")) {
      document.querySelector("#video-link button").innerText = translationsIndex8[lang].videoLink;
    }
    
    // Update navigation links:
    document.getElementById("back-link").innerText = translationsIndex8[lang].backLink;
    
    // Update "Go Back" button if present:
    if (document.getElementById("back-button")) {
      document.getElementById("back-button").innerText = translationsIndex8[lang].goBackButton;
    }
  }
  
  function toggleDarkMode() {
    document.body.classList.add("dark-mode");
  }
  
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
  }
  