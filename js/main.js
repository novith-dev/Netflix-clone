var owl = $('.owl-carousel');
owl.owlCarousel({
    nav:false,
    items:8,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2.5
        },
        600:{
            items:3
        },
        1000:{
            items:6.5
        }
    }
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
