// Catalog filter
$(function() {
   $(".catalog-filter select").change(function() {
    $(".catalog-filter").submit();
  });
  $(".catalog-filter").submit(function(a) {
    a.preventDefault();
    a = $(this);
    $.ajax(window.location.href, 
        {
        type:a.attr("method"), 
        url:a.attr("action"), 
        data:a.serialize(), 
        success:function(a) {
                $(".catalog__list").empty().html($(a).find(".catalog__list").html());
        }
        });
    });
});
$(document).ready(function(){
$(document).on('submit','#ajaxForm form',function(ev){
        var frm = $('#ajaxForm form');
        $.ajax({
            type: 'post',
            url: '/feedbackajaxform',
            data: frm.serialize(),
            success: function (data) {
   				$('ajaxForm form').remove();
                $('#ajaxForm').html( data ); 
            }
        });
        ev.preventDefault();
    });
	
});

//Дописываем функционал поиска

//Конец

//Main Menu
jQuery(function($) {
    function initNavScale() {
        $('.header-menu__list').each(function () {
            var holder = $(this);
            var holderWidth = holder.width();
            var balanceWidth = holderWidth;
            var lis = holder.find('> li');
            var lisWidth = 0;
            if ($(window).width() > 1064) { //fix
                lis.css("width", "auto");
                lis.filter(':first-child').addClass('first-child');
                lis.filter(':last-child').addClass('last-child');
                lis.each(function () {
                    var w = $(this).width();
                    lisWidth += w;
                    this.w = w;
                });
                if (lisWidth > holderWidth) return;
                var p2 = (holderWidth - lisWidth) / lis.length
                lis.each(function (i) {
                    var W = parseInt(this.w + p2, 10);
                    if (i == lis.length - 1) {
                        W = balanceWidth;
                    }
                    this.style.width = W + 'px';
                    balanceWidth -= W;
                });
            }
            else {
                lis.attr("style", "");
            }
        });
    }
    initNavScale();
    $(window).on('resize', function () {
        initNavScale();
    });
});

// Line Search
$('.search__button').click(function() {
    $('.search__line').toggleClass('_active');
});
$('.search__close').click(function() {
    $('.search__line').toggleClass('_active');
});

// Main Menu Mobile
$(function() {
    $('.header-menu__mobile').click(function() {
        $('.header-menu__list').toggleClass('_active');
        $('.header-category').toggleClass('_active');
        $('.header').toggleClass('_active');
        $(this).toggleClass('active');
    });
    $('body').click(function (e) {
        if( !$(e.target).closest(".header-menu__list, .header-category, .header-menu__mobile").length && $(".header._active").is(':visible')){
            $('.header-menu__list').toggleClass('_active');
            $('.header-category').toggleClass('_active');
            $('.header').toggleClass('_active');
            $('.header-menu__mobile').toggleClass('active');
        }
    });
});

// Open Menu Catalog Mobile
$('.goods-button__filter').click(function() {
    $('.goods__column._left').toggleClass('_active');
    $(this).toggleClass('_active');
});

// Tel Mask
jQuery(function($){
    if( "inputmask" in $.fn ) {
        $(".mask-number").inputmask("+7 (999) 999-99-99");
    }
});

// Popups Feedback
$(function() {
    $('.feedback-open').click(function () {
        $("#w-feedback").fadeIn();
        return false;
    });
    $('.popup__close').click(function (e) {
        if($("#w-feedback").is(':visible')){
            $("#w-feedback").fadeOut();			
        }
		$("#advantage__one").fadeOut();
		$("#advantage__two").fadeOut();
		$("#advantage__three").fadeOut();
		$("#index-callback__thanks").fadeOut();
    });
    $('body').click(function (e) {
        if( !$(e.target).closest(".popup__wrapper").length && $("#w-feedback").is(':visible')){
            $("#w-feedback").fadeOut();
        }
		$("#advantage__one").fadeOut();
		$("#advantage__two").fadeOut();
		$("#advantage__three").fadeOut();
    });
    if ($("#w-feedback .errors, #w-feedback ._thank").length) {
        $("#w-feedback").show();
    }
    $('.error').keypress(function(){
        $(this).removeClass('error');
    });
	$('.advantage__one').click(function () {
        $("#advantage__one").fadeIn();
        return false;
    });
	$('.advantage__two').click(function () {
        $("#advantage__two").fadeIn();
        return false;
    });
	$('.advantage__three').click(function () {
        $("#advantage__three").fadeIn();
        return false;
    });
});

// Popups Help
$(function() {
    $('.help-open').click(function () {
        $("#w-help").fadeIn();
        return false;
    });
    $('.popup__close').click(function (e) {
        $("#w-help").fadeOut();
    });
    $('body').click(function (e) {
        if( !$(e.target).closest(".popup__wrapper").length && $("#w-help").is(':visible')){
            $("#w-help").fadeOut();
        }
    });
    if ($("#w-help .errors, #w-help ._thank").length) {
        $("#w-help").show();
    }
});

// Slider Reviews
jQuery(function($){
    if( "slick" in $.fn ) {
        $('.big-slider__list').slick({
            arrows: true, //навигационные кнопоки
            dots: true, //точки навигации
            respondTo: 'window',
            draggable: true, //перелистывания мышью
            infinite: true, //Бесконечная прокрутка
            adaptiveHeight: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 5000
        });
        $('.best-seller__list').slick({
            arrows: true, //навигационные кнопоки
            dots: false, //точки навигации
            respondTo: 'window',
            draggable: true, //перелистывания мышью
            infinite: true, //Бесконечная прокрутка
            adaptiveHeight: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1

                    }
                }

            ]
        });
        $('.goods-sale__list').slick({
            arrows: true, //навигационные кнопоки
            dots: false, //точки навигации
            respondTo: 'window',
            draggable: true, //перелистывания мышью
            infinite: true, //Бесконечная прокрутка
            adaptiveHeight: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.preview-news__list').slick({
            arrows: true, //навигационные кнопоки
            dots: false, //точки навигации
            respondTo: 'window',
            draggable: true, //перелистывания мышью
            infinite: true, //Бесконечная прокрутка
            adaptiveHeight: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1940,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1560,
                    settings: {
                        slidesToShow: 4

                    }
                },
                {
                    breakpoint: 1110,
                    settings: {
                        slidesToShow: 3

                    }
                },
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 2

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1

                    }
                }

            ]
        }); $('.preview-works__list').slick({
            arrows: true, //навигационные кнопоки
            dots: false, //точки навигации
            respondTo: 'window',
            draggable: true, //перелистывания мышью
            infinite: true, //Бесконечная прокрутка
            adaptiveHeight: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1940,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1560,
                    settings: {
                        slidesToShow: 4

                    }
                },
                {
                    breakpoint: 1110,
                    settings: {
                        slidesToShow: 3

                    }
                },
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 2

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1

                    }
                }

            ]
        });
        $('.partners__list').slick({
            autoplay: true,
            arrows: true, //навигационные кнопоки
            dots: false, //точки навигации
            respondTo: 'window',
            draggable: true, //перелистывания мышью
            infinite: true, //Бесконечная прокрутка
            adaptiveHeight: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3

                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 2

                    }
                },
                {
                    breakpoint: 360,
                    settings: {
                        slidesToShow: 1

                    }
                }
            ]
        });
    }
});

// Show Big Photo
jQuery(function($){
    if( "fancybox" in $.fn ) {
        $(".show-photo").fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            padding: 0,
            autoCenter: true,
            helpers 			: {
                title 			: {
                    type: 'inside'
                }
            }
        });
    }
});

// Gallery Scroll
jQuery(function($){
    if( "mCustomScrollbar" in $.fn ) {
        $(".table-scroll").mCustomScrollbar({
            axis:"x",
            mouseWheel: false,
            scrollInertia: 0,
            scrollbarPosition: "outside"
        });
    }
});

// Gallery Pager
$(function(){
    //summ width for container
    summWidthForContainer();
    $(window).on("resize", summWidthForContainer);
    function summWidthForContainer() {
        var summ = 0;
        $(".gallery-preview__list li").each(function() {
            summ += $(this).outerWidth(true);
        });
        summ = Math.ceil(summ);
        $(".gallery-preview__list").width(summ);
    }

    //show big image
    $(".gallery-preview__align").on("click", function(){
        var $li = $(this).closest("li");
        var index = $li.index();

        $(".gallery-preview__align").removeClass("_active");
        $(this).addClass("_active");

        $(".gallery-show__item").css({display: "none"});
        $(".gallery-show__item").eq(index).css({display: "block"});
    });
	
});

// Scroll Arrow
jQuery( document ).ready(function($){
    var $root = $('html, body');
    $('._arrow-scroll, .scrollTop').on("click", function(){
        var href = $(this).attr("href");
        $root.animate({
            scrollTop: $(href).offset().top
        }, 700, function () {
            window.location.hash = href;
        });
        return false;
    });
});

// Scroll Button Up
jQuery( document ).ready(function($){
    var
        speed = 500,
        $scrollTop = $("<a/>")
            .addClass('scrollTop')
            .attr({href:'#top', style:'display:none;'})
            .appendTo('body');

    $scrollTop.on("click", function(e){
        e.preventDefault();

        $( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
    });

    function show_scrollTop(){
        ( $(window).scrollTop() > 300 ) ? $scrollTop.fadeIn(600) : $scrollTop.fadeOut(600);
    }
    $(window).on("scroll", function(){show_scrollTop()} );
    show_scrollTop();
});

// Product Tabs
$(document).ready(function(){
    $('.product-tab__button').click(function(){
        $('.product-tab__button').removeClass('_active');
        $(this).addClass('_active');
        var num_active = $('.product-tab__section').find('._active').index();
        $('.product-tab__item').removeClass('_active');
        $('.product-tab__item').eq(num_active).addClass('_active');
    });
});

$('.product-tab__item').each(function(){
    if ($(this).find('.empty').length) {
        var tabIndex = $(this).find('.empty').parents('.product-tab__item').index();
        $('.product-tab__button').eq(tabIndex).hide();
        $('.product-tab__item').eq(tabIndex).hide();
    }
});

/* Product Mobile Info */
$(function() {
    $('.product-tab__mobile').on('click', function(e) {
        //e.preventDefault();
        $this = $(this);
        $('.product-tab__item').removeClass('_active');
        if ($this.hasClass('_active')) {
            $this.removeClass('_active');
            $this.siblings('.mobile-tab').slideUp(400);
        } else {
            $this.closest('.product-tab__item').addClass('_active');
            $('.product-tab__mobile').removeClass('_active');
            $this.addClass('_active');
            $('.mobile-tab').slideUp(400);
            $this.siblings('.mobile-tab').slideDown(400);
        }
    });
});

// Accordion Menu
$(function(){
    $('.goods-menu').on('click','a',function(e){
        var subMenu = $(this).next();
        if(subMenu.length){
            if(subMenu.is(':visible')){
                
                $(this).removeClass('_active');
            } else {
                subMenu.slideUp();
                $(this).siblings("._active").removeClass('_active')
                    .find(" > ul:visible").slideUp();
                
                $(this).addClass('_active');
            }
           
        }
    });
    $('.materials > ul > li').click(function(){
        $('.materials > ul').fadeOut();
       
    });

    $('.tab-title__item').click(function(){
        $('.tab-title__item, .tab-content__item').removeClass('_active');
        $(this).addClass('_active');
        $('.tab-content__item').eq($(this).index()).addClass('_active');
    });
	$('.loginform__registr-btn').click(function(){
		$('.loginform').fadeOut();
		$('.registation-form').fadeIn();
	});
	$('.loginform__close').click(function(){
		$('.loginform,.auth-shadow').fadeOut();
	});
	$('.registation-form__close').click(function(){
		$('.registation-form,.auth-shadow').fadeOut();
	});
	if($('.loginform').length > 0){
		$('.auth-shadow').fadeIn();
	}
	if($('.registation-success').length > 0){
		setTimeout(function() { 
			$('.registation-success').fadeOut();
		}, 3000);
	}
	$('.login-btn').click(function(){
		$('.loginform,.auth-shadow').fadeIn();
	});
	$( "body" ).on( "submit", ".registation-form form", function() {
		pswd = $('.registation-form__inputtext._main').val();
		pswd_confrm = $('.registation-form__inputtext._confirm').val();
		if(pswd!==pswd_confrm){
			alert('Пароли не совпадают');
			return false;
		}
	});
	
	
	
});


/**/
$(document).ready(function() {

$(".header-menu__list .hmm_li").hover(function() { //При наведении на элемент списка меню
	$(this).css({ 'background' : 'floralwhite'}); //Добавить цвет фона + изображение на элемент списка
	$(this).find(".submenu").show(); //Показать подменю
} , function() { //при уходе с элемента списка...
	$(this).css({ 'background' : 'none'}).addClass( "this" ); //Убрать изменения фона
	$(this).find(".submenu").hide(); //Скрыть подменю
});
 
 
 $('.nav_otziv_el').click(function() {
        var click_id=$(this).attr('id');
        console.log(click_id);
        /**/
        $('.nav_otziv_el').removeClass('span_active');
        $('#' + click_id).addClass('span_active');
        
        $('.tab').removeClass('active');
        $('.con_' + click_id).addClass('active');
        
        /*if (click_id != $('.nav_otziv_el .active').attr('id') ) {
            $('.nav_otziv_el .active').removeClass('active');
            $(this).addClass('active');
            $('.nav_otziv_el').removeClass('active');
            $('#con_' + click_id).addClass('active');
        }*/
    })
 
 $("a.current").attr("href", "javascrript:void(0);");
 

  $('.slider_cart').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
  });

  
  

    $('.elementlist_workshop .elementid .back').hide().css('left', 0);
    
   // function mySideChange(front) {
   //      if (front) {
   //          $(this).parent().find('div.front').show();
   //          $(this).parent().find('div.back').hide();
            
   //      } else {
   //          $(this).parent().find('div.front').hide();
   //          $(this).parent().find('div.back').show();
   //      }
   //  }
    
   //  $('div.elementlist_workshop').hover(
   //      function () {
   //          $(this).find('.el3').stop().rotate3Di('flip', 500, {sideChange: mySideChange});
   //      },
   //      function () {
   //          $(this).find('.el3').stop().rotate3Di('unflip', 500, {sideChange: mySideChange});
   //      }
   //  );
    
    $('.etext_block').rotate3Di('-=180', 1000);
   $('.elementlist_workshop').click(function () {
       if ($(this).hasClass('el4_active')) {
           $(this).removeClass('el4_active');
           $(this).find('.etext_block').fadeOut();
           $(this).rotate3Di('-=180', 1000);
       } else {
            $(this).rotate3Di('-=180', 1000);
            $(this).addClass('el4_active');
            $(this).find('.etext_block').fadeIn();
       }
    });
	
	
    

});

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.header-menu__list li a').forEach(function(link){
        if(link.getAttribute('href') === location.pathname){
            link.removeAttribute('href');
            link.parentElement.classList.add('active-link');
        }
    })
})
//new script-----------------------------------------------------------------------------------------------------------
$(function(){
  $('.minimized').click(function(event) {
	  console.log('ok');
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
     left: ($(document).width() - $('#magnify').outerWidth())/2,
     // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
   });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});