//прелоадер
$(window).on('load', function () {
    var preloader = $('.block_preloader'),
        scrollers = $('.scrollers'),
        itemN = $('.projects .block');

    setTimeout(function(){
        preloader.css({ "z-index": "0", "opacity": "0"});
        itemN.css({ "filter": "blur(0)", "-webkit-filter": "blur(0)" });
        scrollers.addClass("scrollers-out");
        /*
        $.each(itemN, function(i, el) {
            setTimeout(function() {
                $(el).css({ "transform": "translateY(0px)", "opacity": "1"});
            }, (i * 200));
        });
        */

    }, 1);

    // function preloadImages() {
    //
    //     for(var i = 0; i<arguments.length; i++) {
    //         $("<img />").attr("src", arguments[i]);
    //     }
    // }
    // preloadImages("/../images/des/project_1.jpg","/../images/des/project.jpg","/../images/des/project_2.jpg","/../images/des/project_3.jpg",
    //     "/../images/des/project_4.jpg","/../images/des/project_5.jpg","/../images/des/project_6.jpg","/../images/des/project_7.jpg");
});

var block  = $(".block");

function scrollers() {
    var scrolled           = 0,
        scroller_down      = $(".scroller_down"),
        scroller_up        = $(".scroller_up"),
        projects           = $(".projects .wrapper"),
        projectsOutHeight  = projects.height(),
        projectsHeight     = projects.innerHeight(),
        windowWidth        = $(window).width(),
        blockLength        = (block.length)/2;
    if (windowWidth < 980) {
        blockLength        = block.length;
    }
    var blockHeight = block.height(),
        blockLengthHeight  = (blockHeight * blockLength) - projectsOutHeight;

    scroller_down.on("click" ,function(){
        scrolled=scrolled+blockHeight;
        if ( scrolled > blockLengthHeight ) {
            scrolled = blockLengthHeight
        }

        projects.stop().animate({
            scrollTop:  scrolled
        }, 1000);

    });

    scroller_up.on("click" ,function(){
        if ( scrolled > blockLengthHeight ) {
            scrolled = blockLengthHeight
        }
        scrolled=scrolled-blockHeight;
        if ( scrolled < 0 ) {
            scrolled = 0
        }

        projects.stop().animate({
            scrollTop:  scrolled
        });

    });
}
function fontSizeIntro() {
    var intro            = $(".intro"),
        introP           = $(".intro p"),
        introPLength     = introP.length,
        introPHeight     = introP.height() * introPLength,
        introHeight      = intro.height();
    if (introPHeight > introHeight ) {
        introP.addClass("font-lower");
    }
    else if (introPHeight < introHeight) {
        introP.removeClass("font-lower");
    }
}
function projectTitle() {
    var title            = $(".title");

    $.each(block, function(i, el) {
        var pic = $(this).find(".project-pic");
        $(this).hover(
            function() {
                var titleHeight = $(this).find(title).innerHeight();
                pic.css("top", -titleHeight);
            }, function() {
                pic.css("top", 0);
            }
        );
    });
}

$(document).ready(function() {
    $("html").addClass(platform.name.toLowerCase());
    $("html").addClass(platform.os.family.toLowerCase());
    //список
    $("#directions").click(function() {
        var intro = $(".menu .intro"),
            ul    = $(".menu ul");

        intro.toggleClass( "open", 1 );
        ul.toggleClass( "open", 1 );
    });

    scrollers();
    //fontSizeIntro();
    projectTitle();

    $('a[data-ajax-on-modal]').magnificPopup({
        type: 'ajax',
        tLoading: '<div class="spinner"><img src="/images/des/ring.svg"></div>',
        mainClass: 'ajax-modal',
        closeOnBgClick: false,
        enableEscapeKey: false,
        callbacks: {
            ajaxContentAdded: function () {
                // var currId = $.magnificPopup.instance.currItem.el.attr('id');
                // var oldAnchor = location.hash;
                var url = ($.magnificPopup.instance.currItem.src);

                window.history.pushState('page2', 'Title', '#' + url);
                console.log(window.location.hash);
                $('.ajax-modal').find('.mfp-close').on('click', function (e) {
                    e.preventDefault();
                    $.magnificPopup.close();
                    window.history.back();

                });
            }
        }
    });
});
$(window).on('resize', function(){
    scrollers();
    //fontSizeIntro();
    projectTitle();
});