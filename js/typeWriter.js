// Calling our writing function when DOM has loaded, and it also depending of the language. 
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("settings") == "sv") {
    typeWriterHeaderSV();
    setTimeout(typeWriterSpan, 3000, 1);
  } else {
    typeWriterHeaderEN();
    setTimeout(typeWriterSpan, 2400, 0);
  }
});

var i = 0;
var x = 0;
let index;
let headerTxt = [
  "Hi, I'm Andreas, Web Developer.",
  "Hej, jag är Andreas, Webbutvecklare."
];
var spanTxt = [
  "Fullstack Developer / Freelancer",
  "Fullstack utvecklare / Frilansare"
];
let hero__span = document.getElementsByClassName("hero__span")[0];
let hero__header = document.getElementsByClassName("hero__header")[0];
var speed = 75;

// Function which writes out each letter in our hero header, when language is English.
function typeWriterHeaderEN() {
  if (i < headerTxt[0].length) {
    if (i == 16) {
      hero__header.innerHTML += "<br>";
    } else if (i >= 8 && i < 15) {
      let span = document.createElement("SPAN");
      span.innerHTML = headerTxt[0].charAt(i);
      hero__header.appendChild(span);
    } else {
      hero__header.innerHTML += headerTxt[0].charAt(i);
    }
    i++;
    setTimeout(typeWriterHeaderEN, speed);
  }
}

// Function which writes out each letter in our hero header, when language is Swedish.
function typeWriterHeaderSV() {
  let hero__header = document.getElementsByClassName("hero__header")[0];
  if (i < headerTxt[1].length) {
    if (i == 20) {
      hero__header.innerHTML += "<br>";
    } else if (i >= 11 && i < 19) {
      let span = document.createElement("SPAN");
      span.innerHTML = headerTxt[1].charAt(i);
      hero__header.appendChild(span);
    } else {
      hero__header.innerHTML += headerTxt[1].charAt(i);
    }
    i++;
    setTimeout(typeWriterHeaderSV, speed);
  }
}

// Function which writes out each letter in our hero span, when language is either English or Swedish.
function typeWriterSpan(value) {
  if (x == 0) {
    index = value;
  }

  if (x < spanTxt[index].length) {
    hero__span.innerHTML += spanTxt[index].charAt(x);
    x++;
    setTimeout(typeWriterSpan, 25);
  }
}
