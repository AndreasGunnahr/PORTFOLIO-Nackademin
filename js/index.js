/* Function which adding a click event to each button in the about section. 
  We are then displaying different content depending of the clicked button. */
$(".btn-about").click(e => {
  $(".btn-about").removeClass("active");

  e.target.classList.add("active");
  let section = e.target.id;
  if (section == "about") {
    $(".about__container").css("display", "block");
    $(".skills__container").css("display", "none");
    $(".education__container").css("display", "none");
  } else if (section == "skills") {
    $(".about__container").css("display", "none");
    $(".skills__container").css("display", "block");
    $(".education__container").css("display", "none");
  } else {
    $(".about__container").css("display", "none");
    $(".skills__container").css("display", "none");
    $(".education__container").css("display", "block");
  }
});

// Hiding the collapse top menu when user have picked a link. 
$(".nav-link").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});
