/*******************************************IMAGE GALLERY*******************************************/

/*******Filtering*******/

// init Isotope
var $grid = $('.img-grid').isotope({
    itemSelector: '.img-container',
    //layoutMode: 'fitRows',
});

// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {

    },
};

// bind filter button click
$('#filter-btn').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});

/*******Popup Image Gallary in Porfolio*******/

$('.popup-gallery').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});

/*******************************************CAROUSEL IN MY CLIENTS*******************************************/

$(document).ready(function() {
    $('.loop').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        responsive: {
            600: {
                items: 1
            }
        }
    });
});

/*******************************************SCROLL MAGIC*******************************************/

/*******Scroll for the links*******/
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({ triggerElement: "#hero", duration: $("#hero").height() }).setClassToggle("#hero-link", "active").addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#about", duration: $("#about").height() + 100 }).setClassToggle("#about-link", "active").addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#services", duration: $("#services").height() }).setClassToggle("#services-link", "active").addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#portfolio", duration: $("#portfolio").height() }).setClassToggle("#portfolio-link", "active").addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#client", duration: $("#client").height() + 250 }).setClassToggle("#client-link", "active").addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#contact", duration: $("#contact").height() }).setClassToggle("#contact-link", "active").addTo(controller);

/*******Other Scroll Magic Elements*******/

$(document).ready(function() {

    var controller2 = new ScrollMagic.Controller();

    //The about paragraph
    var about_scene = new ScrollMagic.Scene({
            triggerElement: '.about-text',
            triggerHook: .7
        })
        .setClassToggle('.about-text', 'about-text-animate')
        .reverse(false)
        .addTo(controller2);


    //Progress bars
    var progress_bar_scene = new ScrollMagic.Scene({

            triggerElement: '.about-resume',
            triggerHook: .7,

        })
        .setClassToggle('.inner-percent', 'inner-percent-animate')
        .reverse(false)
        .addTo(controller);

    //Icons in Services
    var about_scene = new ScrollMagic.Scene({
            triggerElement: '.trigger',
            triggerHook: .7
        })
        .setClassToggle('.icon', 'service-icon-animate')
        .reverse(false)
        .addTo(controller2);

});

/*******************************************MOBILE NAV*******************************************/
$('.mobile-toggle').click(function() {
    if ($('#main-header').hasClass('open-nav')) {
        $('#main-header').removeClass('open-nav');
    } else {
        $('#main-header').addClass('open-nav');
    }
});

/*******************************************NAV SCROLL*******************************************/
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

/*******************************************PRELOAD*******************************************/
var overlay = document.getElementById("preload-overlay");

window.addEventListener('load', function() {
    overlay.style.display = "none";
})

// set up text to print, each item in array is new line
var aText = new Array(
    "A hardworking and results-driven individual with a background in Physics from the university of capecoast, I have a strong passion for technology(digital electronics and computer programming). I aspire to become a system programmer as I want to build a career in software engineering. I enjoy working in teams to achieve organizational goals. ",
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typewriter");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();