$(window).on('load', function () {
    var preloader = $('.block_preloader'),
        itemN = $('.projects .block');

    setTimeout(function(){
        preloader.css({ "z-index": "0", "opacity": "0"});
        itemN.css({ "filter": "blur(0)", "-webkit-filter": "blur(0)" });
        /*
        $.each(itemN, function(i, el) {
            setTimeout(function() {
                $(el).css({ "transform": "translateY(0px)", "opacity": "1"});
            }, (i * 200));
        });
        */

    }, 1000);

    function preloadImages() {

        for(var i = 0; i<arguments.length; i++) {
            $("<img />").attr("src", arguments[i]);
        }
    }
    preloadImages("images/des/project1.jpg","images/des/project2.jpg","images/des/project3.jpg","images/des/project4.jpg",
        "images/des/project5.jpg","images/des/project6.jpg","images/des/project7.jpg","images/des/project8.jpg");
});
$(document).ready(function() {

    $("#directions").on("click", function(){
        event.preventDefault();
        if ($(".menu .intro").hasClass( "open" )) {
            $(".menu .intro").removeClass( "open" );
            $(".menu ul").addClass( "open" );
        }
        else {
            $(".menu .intro").addClass( "open" );
            $(".menu ul").removeClass( "open" );
        }
        //$(".menu .intro").toggleClass( "open" );
        //$(".menu ul").toggleClass( "open" );
    });
});