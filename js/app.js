/* ======================================
|   |   |   Preloader
========================================= */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});


/* ======================================
|   |   |   Stats
========================================= */
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 20000
    });
});


/* ======================================
|   |   |   Navigation
========================================= */
$ (function () {

    $(window).scroll(function(){

        if($(window).scrollTop() >50) {

            //Show white nav
            $("nav").addClass("white-nav-top");

        } else {

            //Hide white nav
            $("nav").removeClass("white-nav-top");
        }

    });


}); 

/* ======================================
|   |   |   Smooth scroll
========================================= */
$(function ()  {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
	
        //get section id like #about, #services, #teams etc
        var section_id = $(this).attr("href");
    
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 0
        }, 1250, "easeInOutExpo");

    });
}); 

/* ======================================
|   |   |   Animation
========================================= */
$(function () {
    new WOW().init();
});

//home animation on page load
$(window).on('load', function() {

    $("#about_text h2").addClass("animated fadeInDown");
    $(".location_text span").addClass("animated fadeInDown");
    $("#home-text").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});

/* ======================================
|   |   |   Mobile Menu
========================================= */
$(function () {

    //Show mobile view
    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height", "100%");
    });

    //Hide mobile view
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        $("#mobile-nav").css("height", "0%");
    });

});


/*===========================
DROP DOWN SERVICES SECTION
=============================*/
// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
// if (content.style.display === "block") {
//     content.style.display = "none";
//     } else {
//     content.style.display = "block";
//     }
// });
// }