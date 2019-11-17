
// Language contains all of our different language settings from English and Swedish.
const language = {
  en: {
    contact: "CONTACT ME",
    about: "About me",
    skills: "Skills",
    education: "Education",
    "about-text":
      "Fullstack student with a long background from elite hockey who is passionate about new technology. Always been fascinated by problem solving and newly created, hence my interest in programming.<br/><br/>Besides, I am a communicative, encouraging team player who is happy to present ideas and help if problems arise. In addition to technology, I also have a burning interest in training.",
    "degree-1": "Fullstack developer",
    "school-date-1": "Nackademin<br/>2019-2020",
    "degree-2": "MSc in Computer Science",
    "school-date-2": "Royal Institute of Technology<br/>2017-2019",
    "degree-3": "Board member",
    "school-date-3": "KTH Hockey association<br/>2018-2019",
    CV: "Download CV",
    portfolio: "Portfolio",
    all: "All",
    quiz: "Quiz Application",
    crm: "CRM Application",
    soon: "Coming soon",
    talk: "Let's talk",
    name: "Your name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    submit: "Send Message",
    nav: [
      "Home",
      "About me",
      "Projects",
      "Contact",
      "Home",
      "About me",
      "Projects",
      "Contact"
    ]
  },
  sv: {
    contact: "KONTAKTA MIG",
    about: "Om mig",
    skills: "Kompetens",
    education: "Utbildning",
    "about-text":
      "Fullstack student med lång bakgrund från elithockey som brinner för ny teknik. Alltid varit fascinerad av problemlösning och nyskapade, därmed mitt intresse för programmering.<br/><br/>För övrigt så är jag en kommunikativ, uppmuntrande lagspelare som gärna presenterar idéer och hjälper till om problem uppstår. Utöver teknik så har jag även ett brinnande intresse inom träning.",
    "degree-1": "Fullstack utvecklare",
    "school-date-1": "Nackademin<br/>2019-2020",
    "degree-2": "Civilingenjör i datateknik",
    "school-date-2": "Kungliga tekniska högskolan<br/>2017-2019",
    "degree-3": "Styrelse medlem",
    "school-date-3": "KTH Ishockey förening<br/>2018-2019",
    CV: "Ladda ner CV",
    portfolio: "Portfölj",
    all: "Alla",
    quiz: "Quiz Applikation",
    crm: "CRM Applikation",
    soon: "Kommer snart",
    talk: "Kontakt",
    name: "Ditt namn",
    email: "E-post",
    subject: "Ämne",
    message: "Meddelande",
    submit: "Skicka meddelande",
    nav: [
      "Hem",
      "Om mig",
      "Projekt",
      "Kontakt",
      "Hem",
      "Om mig",
      "Projekt",
      "Kontakt"
    ]
  }
};

// When the website is loaded we display the last picked language or the standard english (if the user loads the page for the first time). 
$(document).ready(function() {
  let prevLang = localStorage.getItem("settings");
  if (prevLang == "en") {
    $(".dropdown-toggle").text("English");
  } else if (prevLang == "sv") {
    $(".dropdown-toggle").text("Swedish");
  }
  $(".lang").each(function(index, element) {
    if (language[prevLang][$(this).attr("key")].indexOf("<br/>") >= 0) {
      $(this).html(language[prevLang][$(this).attr("key")]);
    } else {
      $(this).text(language[prevLang][$(this).attr("key")]);
    }
  });

  $(".nav-span").each((index, element) => {
    element.innerHTML = language[prevLang].nav[index];
  });
});

// If the user picks a new language from the list, we then change the language throughout the whole website. 
$(function() {
  $(".dropdown-item").click(function() {
    let lang = $(this).attr("id");
    $(".dropdown-toggle").text($(this).text());
    if (lang == localStorage.getItem("settings")) {
      // Do nothing because the user choose the current language
    } else {
      localStorage.setItem("settings", lang);
      $(".lang").each(function(index, element) {
        if (language[lang][$(this).attr("key")].indexOf("<br/>") >= 0) {
          $(this).html(language[lang][$(this).attr("key")]);
        } else {
          $(this).text(language[lang][$(this).attr("key")]);
        }
      });
      hero__header.innerHTML = "";
      hero__span.innerHTML = "";
      x = 0;
      i = 0;
      if (localStorage.getItem("settings") == "sv") {
        typeWriterHeaderSV();
        setTimeout(typeWriterSpan, 3000, 1);
      } else {
        typeWriterHeaderEN();
        setTimeout(typeWriterSpan, 2400, 0);
      }
      $(".nav-span").each((index, element) => {
        element.innerHTML = language[lang].nav[index];
      });
    }
  });
});
