$(document).ready(function () {

    $('.tab').click(function () {
        var index = $(this).index();
        $(this).siblings().removeClass('active-tab');
        $(this).addClass('active-tab');
        $('.tab-list').eq(index).siblings('.tab-list').hide();
        $('.tab-list').eq(index).slideDown();
    });

    $(document).ready(function () {
        $('#nav-icon1').click(function () {
            $(this).toggleClass('open');
            $('.menu').fadeToggle(500);
        });
    });

    if ($(".menu").css('display') == 'block') {
        $('body').css('overflow-y', 'hidden');
    }
    
    $('.sideb-btn').click(function () {
        $('.right-cont').stop().slideToggle('slow');
    });
    
    var checkWidth = jQuery(window).width();
    
    function SidebRes() {
    
        if(checkWidth > 992) {
            $('.right-cont').removeAttr('style');
        }
    }
    
    $(window).resize(SidebRes);
    
    var maxHeight = 120;
 
    $(".t-blk-half").each(function(){
      if ( $(this).height() > maxHeight ) 
      {
        maxHeight = $(this).height();
      }
    });

    $(".t-blk-half").height(maxHeight);
    
});

function CarouselCatmain() {

    var checkWidth = jQuery(window).width();
    var catmain_carousel = jQuery(".partn-list");
    if (checkWidth < 768) {
        catmain_carousel.addClass('owl-carousel').owlCarousel({
            margin: 0,
            nav: false,
            navText: ['<', '>'],
            dots: true,
            responsive: {
                0: {
                    items: 1,
                    autoHeight: true
                },
                425: {
                    items: 2,
                    autoHeight: true
                },
                500: {
                    items: 3,
                    autoHeight: true
                },
                640: {
                    items: 4,
                    autoHeight: true
                }
            }
        });
    } else {
        if (catmain_carousel.data('owlCarousel') != 'undefined') {
            catmain_carousel.trigger('destroy.owl.carousel').removeClass('owl-carousel');
        }
    }
};
jQuery(document).ready(CarouselCatmain);
jQuery(window).resize(CarouselCatmain);