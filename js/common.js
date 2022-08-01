$(function () {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    function loginSave() {
        var stat = 0;
        $(".lo_save").click(function () {
            if (stat == 0) {
                $(this).addClass("active");
                stat = 1;
            } else if (stat == 1) {
                $(this).removeClass("active");
                stat = 0;
            }
        });
    }
    loginSave();
    
    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 50) {
            $("#new_hd").addClass("active");
        } else {
            $("#new_hd").removeClass("active");
        }
    });

    function scrollNav() {
        if ($(this).scrollTop() >= 50) {
            $("#new_hd").addClass("active");
        } else {
            $("#new_hd").removeClass("active");
        }
    }
    scrollNav();

    function menuBars() {
        $(".bars_box > a").click(function () {
            $("#nav_menu").addClass("active");
            $("body").css({
                overflowY : "hidden",
            });
            $(".menu_bg").fadeIn(500);
        });
        
        $(".menu_close > a ").click(function(){
            $("#nav_menu").removeClass("active");
            $("body").css({
                overflowY : "auto",
            });
            $(".menu_bg").fadeOut(500);
        });
    }
    menuBars();

    function menuNav() {
        $(".nav_main > a").click(function () {
            //slide up all the link lists
            $(".sub_nav").slideUp();
            $(".nav_main > a").removeClass("active");
            //slide down the link list below the h3 clicked - only if its closed
            if (!$(this).next().is(":visible")) {
                $(this).next().slideDown();
                $(this).addClass("active");
            }
        });
    }
    menuNav();
    
    //calendar
    function calendarClick() {
        $(".cal_box").click(function(){
            $(".calendar_bg").fadeIn(500);
            $(".calendar_modal").addClass("active");
        });
        
        $(".calendar_bg").click(function(){
            $(".calendar_bg").fadeOut(500);
            $(".calendar_modal").removeClass("active");
        })
    }
    calendarClick();
    
    //colorCheck
    function colorCheck() {
        $(".color_box").click(function(){
            $(".color_modal").addClass("active");
            $(".calendar_bg").fadeIn(500);
        });
        
        $(".color_box > li").click(function(){
            $(".color_box > li").removeClass("active");
            $(this).addClass("active");
        });
    }
    colorCheck();
    
    //searchCheck
    function searchCheck() {
        $(".search_icon > a").click(function(){
            $(".search_modal").addClass("active");
            $(".calendar_bg").fadeIn(500);
        });
        
        $(".color_box > li").click(function(){
            $(".color_box > li").removeClass("active");
            $(this).addClass("active");
        });
    }
    searchCheck();
    
    //viewSTAR
    function viewStar() {
        var star = 0;
        $(".btn_icon > .star").click(function(){
            if(star == 0) {
                $(this).addClass("active");
                star = 1;
            }else if(star == 1) {
                $(".btn_icon > .star").removeClass("active");
                star = 0;
            }
        })
    }
    viewStar();
    
    function clubSelect() {
        $(".select_ob > a").click(function () {
            //slide up all the link lists
            $(".sub_select").slideUp();
            //slide down the link list below the h3 clicked - only if its closed
            if (!$(this).next().is(":visible")) {
                $(this).next().slideDown();
            }
        });
        
        $(".sub_select > li > a").click(function () {
            //slide up all the link lists
            $(".sub_select > li > a").removeClass("active");
            //slide down the link list below the h3 clicked - only if its closed
            if (!$(this).next().is(":visible")) {
                $(this).addClass("active");
            }
        });
    }
    clubSelect();
    
    //witer_swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
    });
    
});
