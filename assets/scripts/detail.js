"use strict";
window.addEventListener("DOMContentLoaded", start);
let projectsArray = [
  {
    id: "game-proj",
    label: "GAME",
    header: "Stay Inside Game",
    text:
      "Designed and developed in the beginning of lockdown this interactive game was inspired by the state of the world. The game uses css-animations and is made interactive with JavaScript.",
    imgSrc: "../assets/images/stay-inside-game.png",
    webLink: "https://sarahfrederiksen.dk/kea/04_animation/spil/",
    docLink: "../assets/docs/game-doc.pdf",
    extra:
      "For the visual and sound design of this project I used Illustrator and Adobe Audition. I recorded and edited the soundeffects myself. To get an overview of the game I made an activity diagram and a full State Machine Diagram (view it in the documentation). It was one of the first projects where I really used JavaScript for more than a burger menu.",
  },
  {
    id: "hog-proj",
    label: "FRONTEND",
    header: "Hacked Hogwarts",
    text:
      "For this project I koded a site where it's easy manage this fictional school's students. It's possible to sort, search, expell, and appoint several functions to students following specific rules.",
    imgSrc: "../assets/images/hogwarts.png",
    webLink:
      "http://sarahfrederiksen.dk/kea/frontend/hacked_hogwarts/index.html",
    docLink: "../assets/docs/hogwarts-doc.pdf",
    extra: "View full activity diagram in the documentation.",
  },
  {
    id: "color-proj",
    label: "FRONTEND",
    header: "Color Palette",
    text:
      "This color palette allows you to pick a color and have a palette laid out for you according to different rules such as analogous, triad, and so on.",
    imgSrc: "../assets/images/color.png",
    webLink: "http://sarahfrederiksen.dk/kea/frontend/color_palette/color.html",
    docLink: "undefined",
    extra: "undefined",
  },
  {
    id: "fruit-proj",
    label: "PROTOTYPE",
    header: "friskfrugt.dk",
    text:
      "Design of a fictional fruit seller website from a school project to practise using Adobe XD.",
    imgSrc: "../assets/images/frugt.png",
    webLink:
      "https://xd.adobe.com/view/bc1843a1-d636-4bb2-55b2-9d050f8e8c13-ca29/",
    docLink: "undefined",
    extra:
      "During the theme basic UX I designed and prototyped this site selling fruit. The assignment was to choose a product and a target audience, and then design from that. I cose fruit to families with children. From that I chose the nature inspired colorpalette and the happy, colorful pictures.<br><br>I also tested this prototype with a think-aloud-test, ,which confirmed that it was intuitive - with the icons, menu, buttons, and user journey. <br>But some users also requested more information about each product. To optimize this, one could use a mixture of desktop-research and interviews with fruitsellers and parrents to hear what's important for them when they have to choose which fruit to buy.<br><br>For the think-aloud-test the user was asked to:</p><ul><li>Buy an Apple</li><li>Find out where the strawberries was from</li><li>Find the contact information</li><li>Reflect on what the think the menu button means</li><li>Reflect on what'll happen when clicking on logo</li><li>Describe overall impression of the site</li></ul><p>",
  },
  {
    id: "ihs-proj",
    label: "WORDPRESS",
    header: "Idr??tsh??jskolen",
    text:
      "In this school project we collaborated with Idr??tsh??jskolen S??nderborg to design and develop a site for them. I primarily functioned as the coder, but contributed to each process of this teamwork.",
    imgSrc: "../assets/images/ihs.png",
    webLink: "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/",
    docLink: "../assets/docs/ihs-doc.pdf",
    extra:
      "For this site we used WordPress to store and structure the content. This content we then loaded onto the site with Rest API.",
  },
  {
    id: "shirt-proj",
    label: "CONFIGURATOR",
    header: "shirt.it",
    text:
      "Design of a shirt configurator made for a school project. During the project there was a focus on animations with CSS and GSAP. My role in the teamwork was getting the right functionality of the configurator with JavaScript and making the animations on the info-page look nice.",
    imgSrc: "../assets/images/shirt.png",
    webLink: "http://sarahfrederiksen.dk/kea/frontend/shirt/",
    docLink: "../assets/docs/shirt-doc.pdf",
    extra: "undefined",
  },
  {
    id: "sugar-proj",
    label: "WEB w GRID",
    header: "Sugar Rush",
    text:
      "With the assignment to create a site for displaying products that interested us, we made a cute sweet site for cakes and all kinds of dessert. WordPress was used to structure the backend.",
    imgSrc: "../assets/images/sugar.png",
    webLink: "http://sarahfrederiksen.dk/kea/2_semester/tema9/sugarrush/",
    docLink: "../assets/docs/sugar-doc.pdf",
    extra: "undefined",
  },
  {
    id: "gallery-proj",
    label: "PHOTOSHOP",
    header: "Gallery",
    text:
      "To get more familiar with PhotoShop I took photos and edited them so they had a consistent feel. I used tools such as ajustmentlayers and the stamp-tool to remove objects.",
    imgSrc: "../assets/images/gallery.png",
    webLink: "https://sarahfrederiksen.dk/kea/05_content/05_02_01b_galleri/",
    docLink: "undefined",
    extra: "undefined",
  },
  {
    id: "portfolio-proj",
    label: "WEB",
    header: "Portfolio 1.sem",
    text:
      "On 1. semester of Multimedia Design I designed and developed this portfolio. In some ways it's an early iteration to the site you're sitting on right now.",
    imgSrc: "../assets/images/portfolio.png",
    webLink: "https://sarahfrederiksen.dk/kea/portfolio/index.html",
    docLink: "../assets/docs/portfolio-doc.pdf",
    extra: "undefined",
  },
  {
    id: "data-proj",
    label: "RESEARCH",
    header: "Data Collecting",
    text:
      "Practicing collecting data, in this assignment I was introduced to an array of ways to collect data.",
    imgSrc: "../assets/images/data.jpg",
    webLink: "undefined",
    docLink: "../assets/docs/data-doc.pdf",
    extra: "undefined",
  },
  // {
  //   id: "",
  //   label: "",
  //   header: "",
  //   text:"",
  //   imgSrc: "../assets/images/",
  //   webLink: "",
  //   docLink: "undefined",
  //   extra:
  //     "undefined",
  // },
];

let projectsArrayDanish = [
  {
    id: "game-proj",
    label: "SPIL",
    header: "Stay Inside Spil",
    text:
      "Dette spil blev designet og kodet i starten af lockdown og var inspireret af verdenssituationen p?? dette tidspunk. Spillet bruger CSS-animationer og er interaktivt.",
    imgSrc: "../assets/images/stay-inside-game.png",
    webLink: "https://sarahfrederiksen.dk/kea/04_animation/spil/",
    docLink: "../assets/docs/game-doc.pdf",
    extra:
      "Under temaet Grundl??ggende Animation udviklede og designede jeg et spil fra bunden. Dette indvolverede: id??generering, konceptudvikling, design af spilbaggrunde, UI-elementer og spil-elementer og til sidst kodning af spillet ud fra aktivitetsdiagrammer og statemachinediagrammer. Spillets design skulle v??re inspireret af et andet design, hvor jeg valgte et andet spil og flat design.<br><br>I denne opgave blev vi introduceret til CSS-animationer og brug af JavaScript til at starte og stoppe disse animationer ved at tilf??je og fjerne class'er fra elementerne ved klik eller animationsslutning. Alts?? kan man med JavaScript f?? spillet (og mange andre ting) til at reagere p?? brugerens interaktion med elementerne.<br><br>Denne m??de at kontrollere elementer via class'er brugte jeg ogs?? til at styre de forskellige sk??rme: to forskellige slutsk??rme og startsk??rmen.<br><br>Jeg tilf??jede ogs?? lyd-kontrol, der fungere med JavaScript. Her bruges if, else og boolean-v??rdier, der tjekker hvorvidt lyden var t??ndt eller ej og s?? ved klik p?? lydikonet b??de slukker/t??nder lyden og ??ndre ikonet.<br><br>Tidsnedt??ller-baren i mit spil er fuldst??ndigt kodet i CSS og animeres ogs?? med CSS, s?? det passer med den 20 sek timer der startes i JavaScriptet ved spillets start.<br><br>Jeg brugte illustrator til designet. Lydeffekterne optog jeg selv og redigerede i Adobe Audition.",
  },
  {
    id: "hog-proj",
    label: "FRONTEND",
    header: "Hacked Hogwarts",
    text:
      "I dette project kodede jeg en hjemmeside hvor det er muligt at styre denne fiktionelle skole's elever. Det er muligt at sortere, s??ge, udvise og tildele specifikke opgaver til eleverne ifh. specifikke regler.",
    imgSrc: "../assets/images/hogwarts.png",
    webLink:
      "http://sarahfrederiksen.dk/kea/frontend/hacked_hogwarts/index.html",
    docLink: "../assets/docs/hogwarts-doc.pdf",
    extra: "Se fuldkommen aktivitetsdiagram i dokumentationen.",
  },
  {
    id: "color-proj",
    label: "FRONTEND",
    header: "Color Palette",
    text:
      "Denne farve palette tillader brugeren at v??lge en farve. Ud fra denne farve fremviser siden en fuld palette ud fra den valgte farvekombination s?? som analog, triade osv.",
    imgSrc: "../assets/images/color.png",
    webLink: "http://sarahfrederiksen.dk/kea/frontend/color_palette/color.html",
    docLink: "undefined",
    extra: "undefined",
  },
  {
    id: "fruit-proj",
    label: "PROTOTYPE",
    header: "friskfrugt.dk",
    text:
      "Design af en fiktionel frugts??lger-webshop fra et skoleprojekt, hvor jeg arbejdede med Adobe XD til at lave en prototype.",
    imgSrc: "../assets/images/frugt.png",
    webLink:
      "https://xd.adobe.com/view/bc1843a1-d636-4bb2-55b2-9d050f8e8c13-ca29/",
    docLink: "undefined",
    extra:
      "Under temaet <strong>Grundl??ggende UX</strong> lavede jeg en HI-FI prototype til et site der s??lger frugt. Opaven l??d p?? at v??lge produkt og m??lgruppe fra en forudbestemt liste og derefter designe dette site. Jeg valgte frugt til familier med sm??b??rn. Derfor valgte jeg de naturlige og lyse gr??nne farver og billeder, der fx viser et barn der spiser frugt.      <br><br>      Jeg udf??rte en t??nke-h??jt-test, der bekr??ftede at prototypen var intuitiv at bruge, i forhold til ikoner, menu, knapper og brugerrejse. <br>      Til geng??ld kunne der godt v??re mere information om frugterne p?? produktsiderne. For at optimere denne tekst kunne man bruge en blanding af desktop-research og interviews med frugtproducenter og for??ldre der besvarer hvad der er vigtig information n??r de skal v??lge hvilken frugt de skal k??be.      <br><br>      Til t??nke-h??jt-testen blev test personen bedt om at:  </p>  <ul>      <li>K??be et ??ble</li>      <li>Finde ud af hvor jordb??rene er fra</li>      <li>Finde kontaktinformationer til sp??rgsm??l til butikken</li>      <li>*peger p?? burgermenu*: Hvad tror du det ikon betyder?</li>      <li>*peger p?? logo*: Hvad tror du der sker hvis man trykker her?</li>  <li>Beskrive sin oplevelse med sitet</li>  </ul><p>",
  },
  {
    id: "ihs-proj",
    label: "WORDPRESS",
    header: "Idr??tsh??jskolen",
    text:
      "I dette skoleprojekt samarbejded vi med Idr??tsh??jskolen S??nderborg. Vi designede og koded en webside til dem. Min rolle var prim??rt <strong>koder</strong>, men jeg var inde over hele processen i gruppearbejdet.",
    imgSrc: "../assets/images/ihs.png",
    webLink: "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/",

    docLink: "../assets/docs/ihs-doc.pdf",
    extra:
      "Til denne side brugte vi WordPress til at organisere indholdet. Dette indhold blev derefter hentet ned med rest API.",
  },
  {
    id: "shirt-proj",
    label: "KONFIGURATOR",
    header: "shirt.it",
    text:
      "Design af en t-shirt konfigurator. Genne dette projekt var der et fokus p?? animation med CSS og GSAP. Min rolle i gruppen var prim??rt at f?? den rette funktionalitet til selve konfiguratoren (fx. tilf??je tekst, farve, osv.) og animationerne p?? info-siden.",
    imgSrc: "../assets/images/shirt.png",
    webLink: "http://sarahfrederiksen.dk/kea/frontend/shirt/",
    docLink: "../assets/docs/shirt-doc.pdf",
    extra: "undefined",
  },
  {
    id: "sugar-proj",
    label: "WEB m. GRID",
    header: "Sugar Rush",
    text:
      "Vi fik opgaven at producerer en webside der skulle fremvise produkter, der interesserede os. Derfor valgte vi at designe denne sukker s??de hjemmeside for kager og desserter. Vi brugte WordPress til at strukture back-end'en.",
    imgSrc: "../assets/images/sugar.png",
    webLink: "http://sarahfrederiksen.dk/kea/2_semester/tema9/sugarrush/",
    docLink: "../assets/docs/sugar-doc.pdf",
    extra: "undefined",
  },
  {
    id: "gallery-proj",
    label: "PHOTOSHOP",
    header: "Galleri",
    text:
      "For f?? bedre kendskab til PhotoShop, tog jeg billeder og redigerede dem til de havde et konsistent look med ajustementlayers. Derefter brugte jeg stamp-tool'et til at fjerne overfl??dige objekter fra billederne.",
    imgSrc: "../assets/images/gallery.png",
    webLink: "https://sarahfrederiksen.dk/kea/05_content/05_02_01b_galleri/",
    docLink: "undefined",
    extra: "undefined",
  },
  {
    id: "portfolio-proj",
    label: "WEB",
    header: "Portfolio 1.sem",
    text:
      "P?? 1. semester af multimediedesigner uddanelsen designede og kodede jeg denne portfolio. P?? en m??de er den en tidlig itteration af siden du sidder p?? lige nu.",
    imgSrc: "../assets/images/portfolio.png",
    webLink: "https://sarahfrederiksen.dk/kea/portfolio/index.html",
    docLink: "../assets/docs/portfolio-doc.pdf",
    extra: "undefined",
  },
  {
    id: "data-proj",
    label: "RESEARCH",
    header: "Dataindsamling",
    text:
      "For at blive bedre til at indsamle data blev jeg i denne opgave introduceret til forskellige dataindsamlingsmetoder.",
    imgSrc: "../assets/images/data.jpg",
    webLink: "undefined",
    docLink: "../assets/docs/data-doc.pdf",
    extra:
      "Under temaet Grundl??ggende UX blev vi introduceret til forskellige dataindsamlingsmetoder og testede s?? disse metoder af.<br><br>N??r man skal lave et produkt er det vigtigt at v??re meget opm??rksom p?? den m??lgruppe - den bruger - man fors??ger at fange. For at g??re produktet optimalt brugbart b??r man f??r og under udviklingsprocessen finde personer, der kunne have interesse i produktet og h??re/observere/l??se om hvad de har brug for og hvilke problemstillinger der netop er i deres liv.<br><br>Dette er is??r vigtigt hvis man som designer/udvikler ikke tilh??rer eller har nogen relation til m??lgruppen, da man i s??danne tilf??lde kan have forestillinger om behov og problemer, der ikke n??dvendigvis er sande.",
  },
  // {
  //   id: "",
  //   label: "",
  //   header: "",
  //   text:"",
  //   imgSrc: "../assets/images/",
  //   webLink: "",
  //   docLink: "undefined",
  //   extra:
  //     "undefined",
  // },
];

function start() {
  console.log("start");
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const la = urlParams.get("la");
  console.log(la);
  const languageSwitch = document.querySelector("[data-language]");
  let currentLanguage;
  if (la === null) {
    currentLanguage = languageSwitch.getAttribute("data-language");
  } else if (la === "en") {
    currentLanguage = "english";
    languageSwitch.setAttribute("data-language", "english");
    languageSwitch.innerHTML = "Dansk";
  } else if (la === "da") {
    currentLanguage = "danish";
    languageSwitch.setAttribute("data-language", "danish");
    languageSwitch.innerHTML = "English";
  }
  checkLanguage(currentLanguage);

  let rightLanguageArray = getRightLanguageArray(currentLanguage);
  // get details to show on page
  findProject(rightLanguageArray, id);
  languageSwitch.addEventListener("click", () => {
    if (currentLanguage === "english") {
      currentLanguage = "danish";
      languageSwitch.setAttribute("data-language", "danish");
      languageSwitch.innerHTML = "English";
      rightLanguageArray = getRightLanguageArray(currentLanguage);
      findProject(rightLanguageArray, id);
      checkLanguage(currentLanguage);
    } else if (currentLanguage === "danish") {
      currentLanguage = "english";
      languageSwitch.setAttribute("data-language", "english");
      languageSwitch.innerHTML = "Dansk";
      rightLanguageArray = getRightLanguageArray(currentLanguage);
      findProject(rightLanguageArray, id);
      checkLanguage(currentLanguage);
    }
  });
}

function findProject(arrayOfProjects, id) {
  arrayOfProjects.forEach((project) => {
    if (id == project.id) {
      showDetails(project);
    }
  });
}

function getRightLanguageArray(currentLanguage) {
  if (currentLanguage === "english") {
    return projectsArray;
  } else if (currentLanguage === "danish") {
    return projectsArrayDanish;
  }
}

function showDetails(project) {
  let main = document.querySelector("main");

  main.querySelector("h1").textContent = project.header;
  main.querySelector("h2").textContent = project.label;
  main.querySelector("#intro-text").textContent = project.text;
  main.querySelector("img").src = project.imgSrc;
  if (project.webLink != "undefined") {
    main.querySelector("#web-link").href = project.webLink;
  } else {
    main.querySelector("#web-but").classList.add("hidden");
  }
  if (project.docLink != "undefined") {
    main.querySelector("#doc-link").href = project.docLink;
  } else {
    main.querySelector("#doc-but").classList.add("hidden");
  }
  if (project.extra != "undefined") {
    main.querySelector("#extra").innerHTML = project.extra;
  } else {
    main.querySelector("#extra").classList.add("hidden");
  }
}
function showProjects() {
  console.log("Show Projects");
  document.querySelector("main").innerHTML = "";
  const currentLanguage = document
    .querySelector("[data-language]")
    .getAttribute("data-language");

  if (currentLanguage === "english") {
    projectsArray.forEach((project) => {
      const clone = document.querySelector("template").cloneNode(true).content;
      clone.querySelector(".project").id = project.id;
      clone.querySelector(".image").style.backgroundImage =
        "url(" + project.imgSrc + ")";
      clone.querySelector("h2").innerHTML += project.header;
      clone.querySelector("label").innerHTML = project.label + ": ";
      clone.querySelector("p").textContent = project.text;
      clone.querySelector(".project").addEventListener("click", openDetails);
      document.querySelector("main").appendChild(clone);
    });
  } else if (currentLanguage === "danish") {
    projectsArrayDanish.forEach((project) => {
      const clone = document.querySelector("template").cloneNode(true).content;
      clone.querySelector(".project").id = project.id;
      clone.querySelector(".image").style.backgroundImage =
        "url(" + project.imgSrc + ")";
      clone.querySelector("h2").innerHTML += project.header;
      clone.querySelector("label").innerHTML = project.label + ": ";
      clone.querySelector("p").textContent = project.text;
      clone.querySelector(".project").addEventListener("click", openDetails);
      document.querySelector("main").appendChild(clone);
    });
  }
}
function checkLanguage(currentLanguage) {
  console.log(currentLanguage);

  if (currentLanguage === "english") {
    document.querySelectorAll(".danish").forEach((text) => {
      text.classList.add("hidetext");
    });
    document.querySelectorAll(".english").forEach((text) => {
      text.classList.remove("hidetext");
    });
  } else if (currentLanguage === "danish") {
    document.querySelectorAll(".english").forEach((text) => {
      text.classList.add("hidetext");
    });
    document.querySelectorAll(".danish").forEach((text) => {
      text.classList.remove("hidetext");
    });
  }
}
