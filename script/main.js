(function ($) {

    "use strict";

    $(window).on('load', function () {

        /* 
   MixitUp
   ========================================================================== */
        $('#portfolio').mixItUp();
        $('#marqueenew').css("display", "none");

        /* 
         One Page Navigation & wow js
         ========================================================================== */
        var OnePNav = $('.onepage-nev');
        var top_offset = OnePNav.height() - -0;
        OnePNav.onePageNav({
            currentClass: 'active',
            scrollOffset: top_offset,
        });

        /*Page Loader active
          ========================================================*/

        /*PRELOADER JS*/
        $('.spinner').fadeOut();
        $('.preloader').delay(350).fadeOut('slow');
        /*END PRELOADER JS*/

        /*START MENU JS*/
        if ($(window).scrollTop() > 200) {
            $('.fixed-top').addClass('menu-bg');
        } else {
            $('.fixed-top').removeClass('menu-bg');
        }
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.site-navigation, .header-white, .header').addClass('navbar-fixed');
                $('#marqueenew').css("display", "flex");
            } else {
                $('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
                $('#marqueenew').css("display", "none");
            }
            
            
            
        });
        /*END MENU JS*/

        /* WOW Scroll Spy
    ========================================================*/
        var wow = new WOW({
            //disabled for mobile
            mobile: false
        });

        wow.init();

        /* Nivo Lightbox 
        ========================================================*/
        $('.lightbox').nivoLightbox({
            effect: 'fadeScale',
            keyboardNav: true,
        });

        /* Counter
        ========================================================*/
        $('.counterUp').counterUp({
            delay: 20,
            time: 3000
        });

        /* Tesimonial
    ========================================================*/
        $(".carousel-testimony").owlCarousel({
            loop: true,
            navText: false,
            autoplay: true,
            items: 1,
            slideSpeed: 5000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                979: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });


        /* Back Top Link active
        ========================================================*/
        var offset = 200;
        var duration = 500;
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });

        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });



    });

}(jQuery));



// menu hover

$('.dropdown').hover(function(){ 
  $('.dropdown-toggle', this).trigger('click'); 
});


//news alert box close
$('#crossitnow').click(function(){
    $('#marqueenew').css("display", "none");
});

$('#closeitnow').click(function(){
    $('#mybox').css("display", "none");
})


$('#object1').click(function(){
    swal("Preparation of  financial into other country GAAP.", "Jindal Drilling PTE Ltd. (Singapore) \n Kohlar India Pvt. Ltd. (USA Based Company)\n Kohlar India Pvt. Ltd. (USA Based Company)\n Global Ethical Products Pte Ltd. (Singapore)");
})

$('#object2').click(function(){
    swal("Some list of clients for whom we are doing certification and valuation works", "Jindal Drilling PTE Ltd. (Singapore) \n \t-Valuation of shares for equity acceptance,  Valuation for purchase of shares, Valuation of assets for exemption certificate under EPCG.\nMaharashtra seamless limited\n\t-Valuation of shares for purchase of shares and FDI.\nLakhani (Group)\n\t-Valuation of shares for merger of two companies of Lakhani group.  Case is before the court.  Valuation of net assets for the merger as well.\nKohlar India Pvt. Ltd. (USA Based Company)\n	\t-Valuation of Net assets and equity shares for FDI.\nTSC Crest South Asia Pvt. Ltd.\n	\t-Valuation of share for FDI, Valuation of assets for IFRS.\nDEV Drilling PTE Ltd.\n	\t-Valuation of shares for purchase shares of foreign company.\nGroup companies of India bulls and many more\n	\t-Valuation of shares for merger of companies.\nSBA Hydro projects pvt. Ltd.\n	\t-Valuation of shares and net assets for return of FDI.\n");
})

$('#object3').click(function(){
    swal("Some of the company names are given below:- ", "UDAAN Services Private Limited, \nBlessing Exports.\nTex ‘n’ Nets\nSuper Driling Private Limited\nNGK Trading Company\nMadhura Rubbers");
})

$('#object4').click(function(){
    swal("Some of the company names are given below:- ", "Integrated Infosolutions (India) Private Limited\nKrishna Maruti Limited\nM M.Exports (India)\nMatrix Clothing Private Limited\nThomson press India limited\nStarlite industries limited\nFashion Club Global\nIndian Technological Products Private limited\nLT Foods Limited\nJainsons Engineering Private Limited\nShri Primolite\nNKG Infrastructure Limited\nKP Abhresive private limited\nCD International");
})

$('#object5').click(function(){
    swal("Some list of clients for whom we are doing certification and valuation works", "Ranbaxy Laboratories limited Now taken over by Sunpharma Industries Limited\n	-Valuation under CCI guidelines, value of shares for foreign investment. \n Valuation of assets for custom declaration.\n Orient craft limited\n	-Valuation for sale of machinery to sister concern.\nCrew Bos products limited\n	-Valuation for sales of assets and liabilities for sale of business.\nMatrix clothings private limited\n	-Valuation under CCI guidelines, valuation of  business for purchase of plant and machinery.\nDelhi duty free services private limited (GMR group company)\n	-Valuation for sale of equity shares, valuation for custom declaration\n");
})

$('#object6').click(function(){
    swal("Some list of clients for whom we are doing IFRS advisory and valuation works", "Jindal Drilling PTE (Singapore)\nMaharashtra seamless limited\nTSC Crest South Asia Pvt. Ltd.\nDEV Drilling PTE Ltd.\nSBA Hydro power Ltd.\nGVN Fules Private Limited");
})
