  $(document).ready(function () {
 
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 50,
        speed: 1000,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    })

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            dots:false,
            loop:true,
             autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
        }

    }

})


});