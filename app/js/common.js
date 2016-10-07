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

    }, 1000);

    function preloadImages() {

        for(var i = 0; i<arguments.length; i++) {
            $("<img />").attr("src", arguments[i]);
        }
    }
    preloadImages("/../images/des/project_1.jpg","/../images/des/project.jpg","/../images/des/project_2.jpg","/../images/des/project_3.jpg",
        "/../images/des/project_4.jpg","/../images/des/project_5.jpg","/../images/des/project_6.jpg","/../images/des/project_7.jpg");
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
    // var emailPattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    // var inputSubs    = document.getElementById('subscribe');
    // var checkbox    = document.getElementById('checkbox');
    // checkbox = $(document).find('input[type="checkbox"]');
    // if ($('#checkbox').attr("checked",true)) {
    //     inputSubs.disabled = false;
    //     console.log('ad');
    // }
    // text.oninput = function () {
    //     if (this.value != '' && emailPattern.test(this.value)) {
    //         console.log(this.value);
    //         inputSubs.disabled = false;
    //     }
    //     else inputSubs.disabled = true;
    // };
    // var input = $(val),
    //     val = input.val(),
    //     rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    //
    // if(val != '' && rv_email.test(val)){
    //     $(this).css('border', '1px solid white');
    // }

});
$(window).on('resize', function(){
    scrollers();
    //fontSizeIntro();
    projectTitle();
});