// Isotope function which is placing our project images in a grid.
$(".portfolio-item").isotope({
  itemSelector: ".item",
  masonry: {
    gutter: 20,
    isFitWidth: true
  }
});

// Isotope function which is sorting our project images.
$(".portfolio-menu ul li").click(function() {
  $(".portfolio-menu ul li").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");
  $(".portfolio-item").isotope({
    filter: selector
  });
  return false;
});
