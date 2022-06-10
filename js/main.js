$(function () {
    
    // scroll reveal
    $('.scroll').on("click", function (e) {
        e.preventDefault(); // prevents default static scroll to page
        
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 450); 
    });
    
    window.sr = ScrollReveal();
    sr.reveal('.main-grid', {
        origin: 'top',
        distance: '100px',
        duration: 1000,
        reset: false,
        delay: 500
    });
    sr.reveal('.experienceSlide', {
        origin: 'left',
        distance: '100px',
        duration: 1000,
        reset: false,
        delay: 500
    });
    sr.reveal('.slide', {
        origin: 'right',
        distance: '100px',
        duration: 1000,
        reset: false,
        delay: 500
    });
    sr.reveal('.portSlide', {
        origin: 'bottom',
        distance: '100px',
        duration: 1000,
        reset: false,
        delay: 500
    });
    sr.reveal('.box', {
        origin: 'bottom',
        distance: '100px',
        duration: 1000,
        reset: false,
        delay: 500,
        
    });
    sr.reveal('.contactSlide', {
        origin: 'bottom',
        distance: '100px',
        duration: 1000,
        reset: true,
        delay: 500
    });
    
    
    $(".typed-cursor").css("font-size","80px")

    // home page typed js
    var typed = new Typed('.type', {
        strings: ['Welcome to my portfolio'],
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 1000,
        showCursor: false,
        });
        /* var typed = new Typed('.type2', {
        strings: ['learn about me...'],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
        backDelay: 1000,
        startDelay: 2300,
        autoInsertCss: true,
        }); */

});
