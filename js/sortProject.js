$('.portfolio-item').isotope({
    itemSelector: '.item',
     masonry: {
    // columnWidth: 40,
    gutter: 20,
    isFitWidth: true
    }
});

$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');
    
    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
    return false;
});