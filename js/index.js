$('.btn-about').click( (e) => {
    $('.btn-about').removeClass("active");

    // $('.btn-about').css("display","none");
    e.target.classList.add('active');
    let section = e.target.id;
    if(section == "about"){
        $('.about__container').css("display","block");
        $('.skills__container').css("display","none");
        $('.education__container').css("display","none");
    }
    else if(section == "skills"){
        $('.about__container').css("display","none");
        $('.skills__container').css("display","block");
        $('.education__container').css("display","none");
    }
    else{
        $('.about__container').css("display","none");
        $('.skills__container').css("display","none");
        $('.education__container').css("display","block");
    }

});


$('.nav-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });