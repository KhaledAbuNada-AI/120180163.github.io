/*
    To connect with me on Facebook :-
    https://www.facebook.com/MahmoudMohsenTarkhan
*/
$(document).ready(function(){
    
    $("div.menu").click(function(){
        $(this).toggleClass("active").end();
        $("nav ul.flex").toggleClass("active").end();
        });
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= 100){
            $("nav").addClass("active");
            $("div.menu").addClass("menuActive");
        }else {
            $("nav").removeClass("active");
            $("div.menu").removeClass("menuActive");
        }
        if($(this).scrollTop() >= ($("section.academyFeatures").offset().top - 555) ){
            $("div.up").addClass("active");
        }else $("div.up").removeClass("active");
    });
    $("header div.down").click(function(){
        $("html,body").animate({scrollTop:$("section.academyFeatures").offset().top - 120},1000);
        $(this).fadeOut(1000);
    });
    
    $("div.up").click(function(){
        $("html,body").animate({scrollTop:0},$(window).scrollTop() / 2);
    });
    
    $("nav ul.flex > li").click(function(){
        $(this).toggleClass("active").children().toggleClass("active").end().siblings().removeClass("active").children().removeClass("active");
    });
    
    $("body").niceScroll({
        cursorcolor:"#333",
        cursorwidth:"15px",
        cursorborder:"none",
        cursorborderradius:"0px",
        cursorzindex:"4",
        cursorspeed:"50"
    });

    $('.carousel').carousel({interval:1000});
});
