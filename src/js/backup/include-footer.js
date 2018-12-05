
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    }
}
;
$(function() {
    $('input, textarea').each(function() {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function() {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function() {
            $(this).attr('placeholder', placeholder);
        });
    });
    $('a.button-nav').click(function() {
        $(this).toggleClass('active');
        $('.close-subnav').fadeToggle(0);
        $('.box-subnav').toggleClass('open');
        $('.mask-subnav').fadeToggle();
        if ($(document).height() > $(window).height()) {
            var scrollTop = $(window).scrollTop();
            $('html').addClass('opened-nav');
            $('.main-wrapper').css({
                'top': -scrollTop
            });
        }
        ;
        $('.header-fixed').addClass("fixed-nav");
        $('.box-search').fadeOut();
        $('.mask-search').fadeOut();
        $('html').removeClass("fixed_search");
        return false;
    });
    $('.header-button__link-nav > span.button-nav').click(function() {
        $(this).toggleClass('active');
        $('.close-subnav').fadeToggle(0);
        $('.box-subnav').toggleClass('open');
        $('.mask-subnav').fadeToggle();
        if ($(document).height() > $(window).height()) {
            var scrollTop = $(window).scrollTop();
            $('html').addClass('opened-nav');
            $('.main-wrapper').css({
                'top': -scrollTop
            });
        }
        $('.header-fixed').addClass('fixed-nav');
        $('.box-search').fadeOut();
        $('.mask-search').fadeOut();
        $('html').removeClass("fixed_search");
        return false;
    });
    $('.header-button__link-nav').click(function() {
        $('.button-nav').addClass('active');
        $('.close-subnav').fadeToggle(0);
        $('.box-subnav').toggleClass('open');
        $('.mask-subnav').fadeToggle();
        if ($(document).height() > $(window).height()) {
            var scrollTop = $(window).scrollTop();
            $('html').addClass('opened-nav');
            $('.main-wrapper').css({
                'top': -scrollTop
            });
        }
        $('.header-fixed').addClass('fixed-nav');
        $('.box-search').fadeOut();
        $('.mask-search').fadeOut();
        $('html').removeClass("fixed_search");
        return false;
    });
    $('a.close-subnav, span.close-subnav, .mask-subnav').click(function() {
        $('a.button-nav').removeClass('active');
        $('a.header-button__link-nav > span.button-nav').removeClass('active');
        $('.close-subnav').fadeOut(0);
        $('.box-subnav').removeClass('open');
        $('.mask-subnav').fadeOut();
        var scrollTop = parseInt($('.main-wrapper').css('top'));
        $('.main-wrapper').css({
            'top': 0
        });
        $('html').removeClass('opened-nav');
        $('.header-fixed').removeClass('fixed-nav');
        $('html,body').scrollTop(-scrollTop);
        var headerScroll = $('.content').offset().top;
        if ($(window).scrollTop() > headerScroll) {
            $('html').removeClass("fixed_search");
        } else {
            $('html').addClass('fixed_search');
        }
        ;
        return false;
    });
    var height_header = $('header').height();
    var height1 = $('.main-aside').height();
    var height2 = $('.box-inf').height();
    $(window).scroll(function() {
        if ($(window).scrollTop() > height_header + height1 + height2) {
            $('.header-fixed').addClass("fixed");
        } else {
            $('.header-fixed').removeClass("fixed")
        }
    });
    $(window).load(function() {
        if ($(window).scrollTop() > height_header + height1 + height2) {
            $('.header-fixed').addClass("fixed");
        } else {
            $('.header-fixed').removeClass("fixed")
        }
    });
    $('.js-anchor').click(function() {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 50
        }, 1000);
        $('.close-subnav').click();
        return false;
    });
    if ($('.js-mob-slider').length) {
        $('.js-mob-slider').slick({
            autoplay: true,
            autoplaySpeed: 5200,
            dots: true,
            fade: true,
            pauseOnHover: false,
            arrows: false,
            customPaging: function(slider, i) {
                var thumb = $(slider.$slides[i]).data('thumb');
                return '<a><span class="circle"><svg class="circleFill"><circle cx="15" cy="15" r="13" stroke="#ffffff" stroke-width="2" fill="none"/></svg><span class="circleCenter"></span><svg class="circleTrack"><circle cx="15" cy="15" r="13" stroke="rgba(255,255,255,0.1)" stroke-width="1" fill="none"/></svg></span></a>';
            }
        });
    }
    ;
    if ($('.js-inf').length) {
        $('.js-inf').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 6000,
                settings: "unslick"
            }, {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }]
        });
    }
    ;
    $('.js-categories').click(function() {
        $('.subnav-list').addClass('opened');
        return false;
    });
    $('.back-subnav').click(function() {
        $('.subnav-list').removeClass('opened');
        return false;
    });
    if ($('.question-text').length) {
        $('.question-text').stickyfloat('update', {
            duration: 0,
            stickToBottom: true
        });
        $('.nav').onePageNav({
            navItems: 'a',
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 300,
            scrollThreshold: 0.4,
            easing: 'swing',
            scrollChange: true
        });
    }
    ;
    $('.header-fixed .js-search').click(function() {
        $('.header-fixed').addClass('fixed-nav');
    });
    $('.js-search').click(function() {
        $('.box-search').fadeToggle();
        $('.mask-search').fadeToggle();
        if ($(document).height() > $(window).height()) {
            var scrollTop = $(window).scrollTop();
            $('html').toggleClass('opened-nav');
            $('.main-wrapper').css({
                'top': -scrollTop
            });
        }
        ;
        $('a.button-nav').removeClass('active');
        $('a.header-button__link-nav > span.button-nav').removeClass('active');
        $('.close-subnav').fadeOut(0);
        $('.box-subnav').removeClass('open');
        $('.mask-subnav').fadeOut();
        var headerScroll = $('.content').offset().top;
        if ($(window).scrollTop() > headerScroll) {
            $('html').removeClass("fixed_search");
        } else {
            $('html').addClass('fixed_search');
        }
        ;
        return false;
    });
    $('.js-close-search, .mask-search').click(function() {
        $('.box-search').fadeOut();
        $('.mask-search').fadeOut();
        var scrollTop = parseInt($('.main-wrapper').css('top'));
        $('.main-wrapper').css({
            'top': 0
        });
        $('html').removeClass('opened-nav');
        $('html,body').scrollTop(-scrollTop);
        $('.header-fixed').removeClass('fixed-nav');
        var headerScroll = $('.content').offset().top;
        if ($(window).scrollTop() > headerScroll) {
            $('html').removeClass("fixed_search");
        } else {
            $('html').addClass('fixed_search');
        }
        ;
        return false;
    });
    setTimeout(function() {
        if ($('.js-nav-slider').length) {
            $('.js-nav-slider').slick({
                dots: false,
                arrows: false,
                infinite: true,
                speed: 200,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: false,
                vertical: true,
                useCSS: true,
            });
        }
        ;
        if ($('.js-main-slider').length) {
            $('.js-main-slider').slick({
                dots: false,
                infinite: true,
                arrows: false,
                speed: 0,
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                useCSS: true,
                asNavFor: '.js-nav-slider',
                focusOnSelect: true,
            });
        }
        ;
    }, 1500);
    $.browser.chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
    if ($.browser.chrome) {
        $(window).scroll(function() {
            var scroll_num = $(window).scrollTop();
            $('.js-main-slider').on('beforeChange', function(index) {
                $(window).scrollTop(scroll_num);
                return false;
            });
            $('.js-nav-slider').on('beforeChange', function(index) {
                $(window).scrollTop(scroll_num);
                return false;
            });
        });
        if ($('.question-text').length) {
            $('.question-text').stickyfloat('update', {
                duration: 0,
                stickToBottom: true
            });
        }
        ;
    }
    $(window).scroll(function() {});
    var $firstAnimatingElements = $('.news-slider').find('[data-animation]');
    doAnimations($firstAnimatingElements);
    $('.js-main-slider').on('init', function(e, slick) {
        var currSlide = $('.js-nav-slider .slick-active').detach();
        currSlide.appendTo('.js-nav-slider .slick-list .slick-track');
    });
    $('.js-main-slider').on('afterChange', function(e, slick, currentSlide, nextSlide) {
        var currSlide = $('.js-nav-slider .slick-active').detach();
        currSlide.appendTo('.js-nav-slider .slick-list .slick-track');
    });
    $('.js-button-up').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    $('.js-write-comment').click(function() {
        $(this).next('.box-comment-form').slideDown();
        $(this).hide();
        return false;
    });
    $(document).click(function(e) {
        if ($(e.target).parents().filter('.article-filter__list:visible').length != 1) {
            if (!$('.filter-title').is(':visible')) {
                return true;
            }
            $('.article-filter__list').slideUp();
            $('.list-month').slideUp();
        }
    });
    if ($('.js-article-slider').length) {
        $('.js-article-slider').slick({
            dots: false,
            infinite: true,
            arrows: false,
            speed: 600,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: false,
            fade: true,
        });
    }
    ;
    if ($('.js-inside-slider').length) {
        $('.js-inside-slider').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            responsive: [{
                breakpoint: 6000,
                settings: "unslick"
            }, {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }]
        });
    }
    ;
    if ($('.default-header').length) {
        var headerScroll = $('.default-header').offset().top;
        $(window).scroll(function() {
            if ($(window).scrollTop() > headerScroll) {
                $('.header-fixed_absolute').addClass("fixed2");
                $('html').removeClass("fixed_search");
            } else {
                $('.header-fixed_absolute').removeClass("fixed2");
                $('html').not('.opened-nav').addClass("fixed_search");
            }
        });
        $(window).load(function() {
            if ($(window).scrollTop() > headerScroll) {
                $('.header-fixed_absolute').addClass("fixed2");
                $('html').removeClass("fixed_search");
            } else {
                $('.header-fixed_absolute').removeClass("fixed2");
                $('html').not('.opened-nav').addClass("fixed_search");
            }
        });
    }
    ;
    $('.box-mobile-select__title').click(function() {
        $(this).parent().find('.list-mobile-select').slideToggle();
        $(this).toggleClass('open');
        return false;
    });
    $(".list-mobile-select__link").click(function() {
        var name = $(this).html();
        name = $(name).text().replace(new RegExp("[0-9]", "g"), "");
        $(this).parents('.box-mobile-select').find(".box-mobile-select__change").html(name);
        $(this).parents('.box-mobile-select').find(".list-mobile-select").slideUp(100);
        $(this).parents('.box-mobile-select').find('.list-mobile-select li').removeClass("active");
        $(this).parent().addClass("active");
    });
    $(document).click(function(e) {
        if ($(e.target).parents().filter('.list-mobile-select:visible').length != 1) {
            $('.list-mobile-select').hide();
        }
        ;
    });
    $('.js-col_1').click(function() {
        $(this).parents('.box-popular-name').addClass('choose_1').removeClass('choose_2');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        return false;
    });
    $('.js-col_2').click(function() {
        $(this).parents('.box-popular-name').addClass('choose_2').removeClass('choose_1');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });
    $("#col_1").on("swipeleft", function() {
        $('.js-col_2').click();
    });
    $("#col_1").on("swiperight", function() {
        $('.js-col_2').click();
    });
    $("#col_2").on("swipeleft", function() {
        $('.js-col_1').click();
    });
    $("#col_2").on("swiperight", function() {
        $('.js-col_1').click();
    });
    $('.js-open-calendar').click(function() {
        $(this).toggleClass('active');
        $('.today-names__calendar').slideToggle();
        return false;
    });
    $('.js-more-items').click(function() {
        $(this).toggleText('Посмотреть больше', 'Скрыть');
        $(this).parents('.show-more-mobile').toggleClass('showed-items');
        return false;
    });
    if ($('.js-banners').length) {
        $('.js-banners').slick({
            dots: false,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            responsive: [{
                breakpoint: 6000,
                settings: "unslick"
            }, {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }]
        });
    }
    ;
    $('.tabs li a').click(function() {
        $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide-tab');
        $(this).parent().siblings().removeClass('active');
        var id = $(this).attr('href');
        $(id).removeClass('hide-tab');
        $(this).parent().addClass('active');
        return false;
    });
    $('area').hover(function() {
        var srcHover = $(this).attr('data-big');
        $('.about-interests__circle img').attr('src', srcHover);
        var srcClass = $(this).attr('data-class');
        $('.about-interests__circle').removeClass('clicked-item-1 clicked-item-2 clicked-item-3 clicked-item-4 clicked-item-5');
        $('.about-interests__circle').addClass(srcClass);
        return false;
    }, function() {
        var srcDefault = $('area.active').attr('data-big');
        $('.about-interests__circle img').attr('src', srcDefault);
        $('.about-interests__circle').removeClass('clicked-item-1 clicked-item-2 clicked-item-3 clicked-item-4 clicked-item-5');
        var srcClass = $('area.active').attr('data-class');
        $('.about-interests__circle').addClass(srcClass);
        return false;
    });
    $('#img_tab area').click(function() {
        $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide-tab');
        $(this).siblings().removeClass('active');
        var id = $(this).attr('href');
        $(id).removeClass('hide-tab');
        $(this).addClass('active');
        $('.about-interests__circle').removeClass('clicked-item-1 clicked-item-2 clicked-item-3 clicked-item-4 clicked-item-5');
        var srcClass = $(this).attr('data-class');
        $('.about-interests__circle').addClass(srcClass);
        return false;
    });
    $('.tab-mobile-name').click(function() {
        var id = $(this).next();
        $(id).siblings('.tab-cont').addClass('hide-tab');
        $(this).siblings().removeClass('active');
        $(id).toggleClass('hide-tab');
        $(this).toggleClass('active');
        $("html, body").animate({
            scrollTop: $(this).offset().top - 60
        }, 300);
        return false;
    });
    if ($('.js-holiday-card').length) {
        $('.js-holiday-card').slick({
            dots: false,
            infinite: true,
            arrows: true,
            speed: 600,
            autoplay: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            fade: false,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-right"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right"></i></button>',
            responsive: [{
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });
    }
    ;
    if ($('.js-photo-slider-preview').length) {
        $('.js-photo-slider-preview').slick({
            dots: false,
            arrows: false,
            autoplay: false,
            infinite: true,
            speed: 200,
            slidesToShow: 7,
            slidesToScroll: 1,
            fade: false,
            focusOnSelect: true,
            asNavFor: '.js-photo-slider-main'
        });
    }
    ;
    if ($('.js-photo-slider-main').length) {
        $('.js-photo-slider-main').slick({
            dots: false,
            infinite: true,
            arrows: true,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-right"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right"></i></button>',
            speed: 200,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            asNavFor: '.js-photo-slider-preview',
            responsive: [{
                breakpoint: 759,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }]
        });
    }
    ;
    if ($('.js-fact-list').length) {
        $('.js-fact-list').slick({
            dots: false,
            infinite: false,
            arrows: true,
            speed: 600,
            autoplay: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            fade: false,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-right"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right"></i></button>',
            responsive: [{
                breakpoint: 759,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });
    }
    ;
    $('.js-dates li').click(function() {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
        return false;
    });
    $('.js-open-form').click(function() {
        $(this).parents('.js-element').find('.box-card-form').fadeIn();
        return false;
    });
    $('.js-close-form').click(function() {
        $(this).parents('.js-element').find('.box-card-form').fadeOut();
        return false;
    });
    $('.check-all').change(function() {
        var checkboxes = $(this).parents('.list-checkbox').find(':checkbox');
        if ($(this).is(':checked')) {
            checkboxes.prop('checked', true);
            $(this).parents('li').siblings().addClass('disabled-check');
            $('.line-search').find('.btn-search, .mobile-icon').removeClass('pointer-disabled');
        } else {
            $(this).prop('checked', false);
            $(this).parents('li').siblings().removeClass('disabled-check');
            $(this).parents('li').siblings().find('input').prop('checked', false);
            $('.line-search').find('.btn-search, .mobile-icon').addClass('pointer-disabled');
        }
    });
    $('.list-checkbox__item input').change(function() {
        var empty = true;
        $('.list-checkbox__item input').each(function() {
            if ($(this).prop('checked')) {
                empty = false;
                return false;
            }
        });
        if (empty) {
            $('.line-search').find('.btn-search, .mobile-icon').addClass('pointer-disabled');
        } else {
            $('.line-search').find('.btn-search, .mobile-icon').removeClass('pointer-disabled');
        }
    });
});
if ($('#question').length) {
    $(function() {
        var a = document.querySelector('#question'),
            b = null,
            P = 0;
        window.addEventListener('scroll', Ascroll, false);
        document.body.addEventListener('scroll', Ascroll, false);
        function Ascroll() {
            if (b == null) {
                var Sa = getComputedStyle(a, ''),
                    s = '';
                for (var i = 0; i < Sa.length; i++) {
                    if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                        s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                    }
                }
                b = document.createElement('div');
                b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                a.insertBefore(b, a.firstChild);
                var l = a.childNodes.length;
                for (var i = 1; i < l; i++) {
                    b.appendChild(a.childNodes[1]);
                }
                a.style.height = b.getBoundingClientRect().height + 'px';
                a.style.padding = '0';
                a.style.border = '0';
            }
            var Ra = a.getBoundingClientRect(),
                R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#scroll_question').getBoundingClientRect().bottom);
            if ((Ra.top - P) <= 0) {
                if ((Ra.top - P) <= R) {
                    b.className = 'stop';
                    b.style.top = -R + 'px';
                } else {
                    b.className = 'sticky';
                    b.style.top = P + 'px';
                }
            } else {
                b.className = '';
                b.style.top = '';
            }
            window.addEventListener('resize', function() {
                a.children[0].style.width = getComputedStyle(a, '').width
            }, false);
        }
    });
}
;
if ($('#question2').length) {
    $(function() {
        var a = document.querySelector('#question2'),
            b = null,
            P = 0;
        window.addEventListener('scroll', Ascroll, false);
        document.body.addEventListener('scroll', Ascroll, false);
        function Ascroll() {
            if (b == null) {
                var Sa = getComputedStyle(a, ''),
                    s = '';
                for (var i = 0; i < Sa.length; i++) {
                    if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                        s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                    }
                }
                b = document.createElement('div');
                b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                a.insertBefore(b, a.firstChild);
                var l = a.childNodes.length;
                for (var i = 1; i < l; i++) {
                    b.appendChild(a.childNodes[1]);
                }
                a.style.height = b.getBoundingClientRect().height + 'px';
                a.style.padding = '0';
                a.style.border = '0';
            }
            var Ra = a.getBoundingClientRect(),
                R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#scroll_question2').getBoundingClientRect().bottom);
            if ((Ra.top - P) <= 0) {
                if ((Ra.top - P) <= R) {
                    b.className = 'stop';
                    b.style.top = -R + 'px';
                } else {
                    b.className = 'sticky';
                    b.style.top = P + 'px';
                }
            } else {
                b.className = '';
                b.style.top = '';
            }
            window.addEventListener('resize', function() {
                a.children[0].style.width = getComputedStyle(a, '').width
            }, false);
        }
    });
}
;
$(window).on("orientationchange", function(event) {
    $('.js-mob-slider').slick("refresh");
    $('.js-main-slider').slick("refresh");
});
function imageResize() {
    if ($('.main-article-wrap > .img-wrapper > img').length && $('.main-article-cont').length) {
        if (viewport().width < 760) {
            var width_content = $('.content').width();
            var margin_left_img = $('.content').offset().left - $('.main-article-wrap').offset().left;
        } else {
            var width_content = $('.main-article-cont').width();
            var margin_left_img = $('.main-article-cont').offset().left - $('.main-article-wrap').offset().left;
        }
        $('.main-article-wrap iframe').not(".dontmove,*[name=hybrid_ssp_api]").each(function() {
            var width = $(this).attr('width');
            var height = $(this).attr('height');
            var ratio = width / height;
            $(this).css({
                'width': width_content + 'px',
                'margin-left': margin_left_img + 'px',
                'max-width': 'none',
            }).attr('width', width_content).attr('height', width_content / ratio);
        });
        $('.main-article-wrap > .img-wrapper > img').each(function() {
            var width = $(this)[0].naturalWidth;
            var height = $(this)[0].naturalHeight;
            var resized = false;
            if (width >= width_content && height <= width || $(this).parent().attr("data-hyb-ssp-in-image-overlay")) {
                $(this).css({
                    'width': width_content + 'px',
                    'max-width': 'none',
                });
                $(this).parent().css({
                    'width': width_content + 'px',
                    'margin-left': margin_left_img + 'px',
                    'max-width': 'none',
                });
                resized = true;
            } else {
                $(this).css({
                    'margin': '0 auto',
                    'max-width': '100%',
                });
                $(this).parent().css({
                    'margin': '0 auto',
                    'max-width': '100%',
                });
            }
            var title = $(this).attr('title');
            if (title && !$(this).next().hasClass('photo-article__description')) {
                $(this).after('<div class="photo-article__description">' + title + '</div>');
            }
            $(this).next('.photo-article__description').css({
                'margin-left': (resized ? margin_left_img + 'px' : 0)
            });
        });
    }
}
;
imageResize();
function mainArticleFirstTextResize() {
    if ($('.single-post .main-article-wrap p:first-child').length) {
        if (viewport().width > 720) {
            var width_content = $('.main-article-cont').width();
            var margin_left_text = $('.main-article-cont').offset().left - $('.main-article-wrap').offset().left;
            $('.main-article-wrap:first').find('p:first').css({
                'width': width_content + 'px'
            });
            $('.main-article-wrap:first').find('p:first').css({
                'margin-left': margin_left_text + 'px'
            });
        } else {
            $('.main-article-wrap:first').find('p:first').css({
                'width': ''
            });
            $('.main-article-wrap:first').find('p:first').css({
                'margin-left': ''
            });
        }
    }
}
;
mainArticleFirstTextResize();
function showNamesMoreButton() {
    if ($('.js-more').length && $('.js-more-hide').length) {
        $('.js-more-hide').each(function(i, elem) {
            var names = ($(this).find('a')).length;
            if (viewport().width > 1024) {
                $(this).find('.hide-names-ipad').css({
                    'display': "inline"
                });
                if (names < 7) {
                    $(this).find($('.js-more')).hide();
                } else {
                    $(this).find($('.js-more')).show();
                }
            } else {
                $(this).find('.hide-names-ipad').css({
                    'display': ""
                });
                if (names < 5) {
                    $(this).find($('.js-more')).hide();
                } else {
                    $(this).find($('.js-more')).show();
                }
            }
        });
    }
}
showNamesMoreButton();
function hideTextYearsBlock() {
    if ($('.js-wrap-height-control .js-more-text-cont').length) {
        $('.js-wrap-height-control .js-more-text-cont').each(function(i, elem) {
            if ($(this).height() > $(this).parent().height()) {
                $(this).parent().addClass('hide-text');
            } else {
                $(this).parent().removeClass('hide-text');
            }
        });
    }
}
hideTextYearsBlock();
$(".js-read-more_years").toggle(function() {
    $(this).parents('.tab-cont').removeClass('hide-text');
    $(this).parents('.tab-cont').addClass('open-text');
    $(this).text("Свернуть");
}, function() {
    $(this).parents('.tab-cont').removeClass('open-text');
    $(this).parents('.tab-cont').addClass('hide-text');
    $(this).text("Читать дальше ...");
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top - 70
    }, 600);
});
var handler = function() {
    console.log('handler');
    var height_footer = $('footer').height();
    var height_header = $('header').height();
    imageResize();
    showNamesMoreButton();
    hideTextYearsBlock();
    mainArticleFirstTextResize();
    var height1 = $('.main-aside').height();
    var height2 = $('.box-inf').height();
    var heightFooter = $('footer').height();
    var heightDoc = $(document).height();
    var heightButtons = $('.fixed-button_desktop').height();
    var footer_top = $('.box-subscription').offset();
    var asideTop = $('.subpage-aside').offset();
    var heightTopArticle = $('.article-slider').height();
    $(window).scroll(function() {
        var scr_top = $(window).scrollTop();
        var top_pos = viewport_height + scr_top + 20;
        var heightAside = $('.subpage-aside').height();
        if ($(window).scrollTop() > height_header + height1 + height2) {
            $('.header-fixed').addClass("fixed");
        } else {
            $('.header-fixed').removeClass("fixed")
        }
        ;
        if ($('.fixed-button_desktop').length) {
            if ($(window).scrollTop() > heightButtons + 30) {
                $('.fixed-button_desktop').addClass("fixed");
            } else {
                $('.fixed-button_desktop').removeClass("fixed");
            }
            ;
            if (footer_top.top <= top_pos) {
                $('.fixed-button_desktop').addClass("fixed_bottom");
            } else {
                $('.fixed-button_desktop').removeClass("fixed_bottom");
            }
            ;
        }
    });
    $(window).load(function() {
        var scr_top = $(window).scrollTop();
        var top_pos = viewport_height + scr_top + 25;
        var heightAside = $('.subpage-aside').height();
        if ($(window).scrollTop() > height_header + height1 + height2) {
            $('.header-fixed').addClass("fixed");
        } else {
            $('.header-fixed').removeClass("fixed")
        }
        ;
        if ($('.fixed-button_desktop').length) {
            if ($(window).scrollTop() > heightButtons + 30) {
                $('.fixed-button_desktop').addClass("fixed");
            } else {
                $('.fixed-button_desktop').removeClass("fixed");
            }
            if (footer_top.top <= top_pos) {
                $('.fixed-button_desktop').addClass("fixed_bottom");
            } else {
                $('.fixed-button_desktop').removeClass("fixed_bottom");
            }
            ;
        }
        ;
    });
    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;
    if (viewport_wid <= 1023) {
        var asideIos = $('.subpage-aside__cont:eq(0)').detach();
        asideIos.appendTo('.ios-aside:eq(0)');
    } else {
        var asideIos = $('.subpage-aside__cont:eq(0)').detach();
        asideIos.appendTo('.subpage-aside:eq(0)');
    }
    ;
    if (viewport_wid <= 1024) {
        $('.js-main-slider').slick("refresh");
    }
    ;
    if (viewport_wid <= 759) {
        $('.js-inside-slider').slick("refresh");
        $('.js-mob-slider').slick("refresh");
        $('.js-inf').slick("refresh");
        $('.js-banners').slick("refresh");
    } else {}
    ;
    if ($('.default-header').length) {
        var headerScroll = $('.default-header').offset().top;
        $(window).scroll(function() {
            if ($(window).scrollTop() > headerScroll) {
                $('.header-fixed_absolute').addClass("fixed2");
                $('.default-header').addClass("fixed2");
                $('html').removeClass("fixed_search");
            } else {
                $('.header-fixed_absolute').removeClass("fixed2");
                $('.default-header').removeClass("fixed2");
                $('html').not('.opened-nav').addClass("fixed_search");
            }
            ;
        });
        $(window).load(function() {
            if ($(window).scrollTop() > headerScroll) {
                $('.header-fixed_absolute').addClass("fixed2");
                $('.default-header').addClass("fixed2");
                $('html').removeClass("fixed_search");
            } else {
                $('.header-fixed_absolute').removeClass("fixed2");
                $('.default-header').removeClass("fixed2");
                $('html').not('.opened-nav').addClass("fixed_search");
            }
            ;
        });
    }
    ;
}
$(window).bind('load', handler);
$(window).bind('resize', handler);
$(window).load(function() {
    var viewport_wid = viewport().width;
    if (/iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('.js-inf').slick('unslick');
    }
    ;
    if (viewport_wid <= 759) {
        $('.js-banners').slick("refresh");
    } else {}
    ;
});
setTimeout(function() {
    $('body').removeClass('loaded');
}, 5000);
;
var theme = {};
firstOnCalendarSelect = false;
MD5 = function(s) {
    function L(k, d) {
        return (k << d) | (k >>> (32 - d))
    }
    function K(G, k) {
        var I,
            d,
            F,
            H,
            x;
        F = (G & 2147483648);
        H = (k & 2147483648);
        I = (G & 1073741824);
        d = (k & 1073741824);
        x = (G & 1073741823) + (k & 1073741823);
        if (I & d) {
            return ( x ^ 2147483648 ^ F ^ H)
        }
        if (I | d) {
            if (x & 1073741824) {
                return ( x ^ 3221225472 ^ F ^ H)
            } else {
                return ( x ^ 1073741824 ^ F ^ H)
            }
        } else {
            return ( x ^ F ^ H)
        }
    }
    function r(d, F, k) {
        return (d & F) | ((~d) & k)
    }
    function q(d, F, k) {
        return (d & k) | (F & (~k))
    }
    function p(d, F, k) {
        return ( d ^ F ^ k)
    }
    function n(d, F, k) {
        return ( F ^ (d | (~k)))
    }
    function u(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(r(F, aa, Z), k), I));
        return K(L(G, H), F)
    }
    function f(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(q(F, aa, Z), k), I));
        return K(L(G, H), F)
    }
    function D(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(p(F, aa, Z), k), I));
        return K(L(G, H), F)
    }
    function t(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(n(F, aa, Z), k), I));
        return K(L(G, H), F)
    }
    function e(G) {
        var Z;
        var F = G.length;
        var x = F + 8;
        var k = (x - (x % 64)) / 64;
        var I = (k + 1) * 16;
        var aa = Array(I - 1);
        var d = 0;
        var H = 0;
        while (H < F) {
            Z = (H - (H % 4)) / 4;
            d = (H % 4) * 8;
            aa[Z] = (aa[Z] | (G.charCodeAt(H) << d));
            H++
        }
        Z = (H - (H % 4)) / 4;
        d = (H % 4) * 8;
        aa[Z] = aa[Z] | (128 << d);
        aa[I - 2] = F << 3;
        aa[I - 1] = F >>> 29;
        return aa
    }
    function B(x) {
        var k = "",
            F = "",
            G,
            d;
        for (d = 0; d <= 3; d++) {
            G = (x >>> (d * 8)) & 255;
            F = "0" + G.toString(16);
            k = k + F.substr(F.length - 2, 2)
        }
        return k
    }
    function J(k) {
        k = k.replace(/rn/g, "n");
        var d = "";
        for (var F = 0; F < k.length; F++) {
            var x = k.charCodeAt(F);
            if (x < 128) {
                d += String.fromCharCode(x)
            } else {
                if ((x > 127) && (x < 2048)) {
                    d += String.fromCharCode((x >> 6) | 192);
                    d += String.fromCharCode((x & 63) | 128)
                } else {
                    d += String.fromCharCode((x >> 12) | 224);
                    d += String.fromCharCode(((x >> 6) & 63) | 128);
                    d += String.fromCharCode((x & 63) | 128)
                }
            }
        }
        return d
    }
    var C = Array();
    var P,
        h,
        E,
        v,
        g,
        Y,
        X,
        W,
        V;
    var S = 7,
        Q = 12,
        N = 17,
        M = 22;
    var A = 5,
        z = 9,
        y = 14,
        w = 20;
    var o = 4,
        m = 11,
        l = 16,
        j = 23;
    var U = 6,
        T = 10,
        R = 15,
        O = 21;
    s = J(s);
    C = e(s);
    Y = 1732584193;
    X = 4023233417;
    W = 2562383102;
    V = 271733878;
    for (P = 0; P < C.length; P += 16) {
        h = Y;
        E = X;
        v = W;
        g = V;
        Y = u(Y, X, W, V, C[P + 0], S, 3614090360);
        V = u(V, Y, X, W, C[P + 1], Q, 3905402710);
        W = u(W, V, Y, X, C[P + 2], N, 606105819);
        X = u(X, W, V, Y, C[P + 3], M, 3250441966);
        Y = u(Y, X, W, V, C[P + 4], S, 4118548399);
        V = u(V, Y, X, W, C[P + 5], Q, 1200080426);
        W = u(W, V, Y, X, C[P + 6], N, 2821735955);
        X = u(X, W, V, Y, C[P + 7], M, 4249261313);
        Y = u(Y, X, W, V, C[P + 8], S, 1770035416);
        V = u(V, Y, X, W, C[P + 9], Q, 2336552879);
        W = u(W, V, Y, X, C[P + 10], N, 4294925233);
        X = u(X, W, V, Y, C[P + 11], M, 2304563134);
        Y = u(Y, X, W, V, C[P + 12], S, 1804603682);
        V = u(V, Y, X, W, C[P + 13], Q, 4254626195);
        W = u(W, V, Y, X, C[P + 14], N, 2792965006);
        X = u(X, W, V, Y, C[P + 15], M, 1236535329);
        Y = f(Y, X, W, V, C[P + 1], A, 4129170786);
        V = f(V, Y, X, W, C[P + 6], z, 3225465664);
        W = f(W, V, Y, X, C[P + 11], y, 643717713);
        X = f(X, W, V, Y, C[P + 0], w, 3921069994);
        Y = f(Y, X, W, V, C[P + 5], A, 3593408605);
        V = f(V, Y, X, W, C[P + 10], z, 38016083);
        W = f(W, V, Y, X, C[P + 15], y, 3634488961);
        X = f(X, W, V, Y, C[P + 4], w, 3889429448);
        Y = f(Y, X, W, V, C[P + 9], A, 568446438);
        V = f(V, Y, X, W, C[P + 14], z, 3275163606);
        W = f(W, V, Y, X, C[P + 3], y, 4107603335);
        X = f(X, W, V, Y, C[P + 8], w, 1163531501);
        Y = f(Y, X, W, V, C[P + 13], A, 2850285829);
        V = f(V, Y, X, W, C[P + 2], z, 4243563512);
        W = f(W, V, Y, X, C[P + 7], y, 1735328473);
        X = f(X, W, V, Y, C[P + 12], w, 2368359562);
        Y = D(Y, X, W, V, C[P + 5], o, 4294588738);
        V = D(V, Y, X, W, C[P + 8], m, 2272392833);
        W = D(W, V, Y, X, C[P + 11], l, 1839030562);
        X = D(X, W, V, Y, C[P + 14], j, 4259657740);
        Y = D(Y, X, W, V, C[P + 1], o, 2763975236);
        V = D(V, Y, X, W, C[P + 4], m, 1272893353);
        W = D(W, V, Y, X, C[P + 7], l, 4139469664);
        X = D(X, W, V, Y, C[P + 10], j, 3200236656);
        Y = D(Y, X, W, V, C[P + 13], o, 681279174);
        V = D(V, Y, X, W, C[P + 0], m, 3936430074);
        W = D(W, V, Y, X, C[P + 3], l, 3572445317);
        X = D(X, W, V, Y, C[P + 6], j, 76029189);
        Y = D(Y, X, W, V, C[P + 9], o, 3654602809);
        V = D(V, Y, X, W, C[P + 12], m, 3873151461);
        W = D(W, V, Y, X, C[P + 15], l, 530742520);
        X = D(X, W, V, Y, C[P + 2], j, 3299628645);
        Y = t(Y, X, W, V, C[P + 0], U, 4096336452);
        V = t(V, Y, X, W, C[P + 7], T, 1126891415);
        W = t(W, V, Y, X, C[P + 14], R, 2878612391);
        X = t(X, W, V, Y, C[P + 5], O, 4237533241);
        Y = t(Y, X, W, V, C[P + 12], U, 1700485571);
        V = t(V, Y, X, W, C[P + 3], T, 2399980690);
        W = t(W, V, Y, X, C[P + 10], R, 4293915773);
        X = t(X, W, V, Y, C[P + 1], O, 2240044497);
        Y = t(Y, X, W, V, C[P + 8], U, 1873313359);
        V = t(V, Y, X, W, C[P + 15], T, 4264355552);
        W = t(W, V, Y, X, C[P + 6], R, 2734768916);
        X = t(X, W, V, Y, C[P + 13], O, 1309151649);
        Y = t(Y, X, W, V, C[P + 4], U, 4149444226);
        V = t(V, Y, X, W, C[P + 11], T, 3174756917);
        W = t(W, V, Y, X, C[P + 2], R, 718787259);
        X = t(X, W, V, Y, C[P + 9], O, 3951481745);
        Y = K(Y, h);
        X = K(X, E);
        W = K(W, v);
        V = K(V, g)
    }
    var i = B(Y) + B(X) + B(W) + B(V);
    return i.toLowerCase()
};
(function($) {
    theme = {
        init: function() {
            if ($('.plyr').length) {
                setTimeout(function() {
                    $('.plyr').each(function() {
                        $(this).parent().next('.box-video__name').text($(this).attr('aria-label'));
                    });
                }, 1500);
            }
            $('.list-anchors__item a').click(function() {
                var target = $(this).attr('data-target');
                if (target) {
                    var a = $('*[href="' + target + '"]').trigger('click');
                    $(target).trigger('click');
                    if ($(a).parent().attr('id') == 'img_tab') {
                        $('#img_tab area').removeClass('active');
                        $(a).addClass('active');
                        var srcHover = $(a).attr('data-big');
                        var srcClass = $(a).attr('data-class');
                        $('.about-interests__circle img').attr('src', srcHover);
                        $('.about-interests__circle').attr('class', 'about-interests__circle ' + srcClass);
                    }
                }
            });
            $('.js-photo-slider-main').on('afterChange', function(event, slick, currentSlide) {
                var slide = slick.$slides[currentSlide];
                var alt = $(slide).find('img').attr('alt');
                alt = alt || '&nbsp;';
                var cnt = $('.photo-slider-preview-cont').find('.slick-slide').length;
                if (cnt <= 7) {
                    $('.photo-slider-preview .slick-current').removeClass('slick-current');
                    $('.slick-track').find('.slick-slide:eq(' + currentSlide + ')').addClass('slick-current');
                }
                $('.description-slider-article').html(alt);
            });
            $('.social-list__link').click(function() {
                var n = $(this).attr('data-n');
                $('.ya-share2__item:eq(' + n + ')').trigger('click');
                $.ajax({
                    type: 'POST',
                    url: options.ajaxurl,
                    data: {
                        action: "share",
                        post: post_id,
                        social: n
                    },
                }).done(function(data) {});
                return false;
            });
            $('.list-month__link').click(function() {
                var month = $(this).attr('data-month');
                var oneMonth = $('.one-month[data-month="' + month + '"]');
                if ($(oneMonth).length) {
                    $("html, body").animate({
                        scrollTop: $(oneMonth).offset().top - 100
                    }, 600);
                    return false;
                } else {}
            });
            $('.show-more-comment').click(function() {
                $('.comments-list__item.comment-hidden').show();
                $(this).hide();
                return false;
            });
            $('.box-comment-form form').on('submit', function() {
                $('.g-recaptcha > div').css({
                    border: 'none'
                });
                if (grecaptcha.getResponse() == "") {
                    $('.g-recaptcha > div').css({
                        border: '1px solid #FF0000'
                    });
                    return false;
                }
                var data = $(this).serialize() + '&action=comment';
                $.ajax({
                    type: 'POST',
                    url: options.ajaxurl,
                    dataType: 'json',
                    data: data,
                }).done(function(data) {
                    if (data.result) {
                        $('.comments-total').text(data.total);
                        $('.box-comment-form').fadeOut();
                        $('.box-write-comment > .button').show();
                        $('.comments-list').prepend(data.html);
                    }
                });
                return false;
            });
            $('.list-anchors__link').click(function() {
                textH = $(this).text();
                $('.subpage-cont').find('h1,h2,h3,h4,h5').each(function() {
                    var text = $(this).text();
                    var text2 = text.replace('-', '—');
                    if (text === textH || text2 === textH) {
                        scrollToElem = $(this);
                        $("html, body").animate({
                            scrollTop: $(scrollToElem).offset().top - 100
                        }, 600);
                        return false;
                    }
                });
                return false;
            });
            $('.filter-title').unbind().click(function() {
                if (!$(this).is(':visible')) {
                    return false;
                }
                $(this).next('.article-filter__list').slideToggle();
                $(this).next('.list-month').slideToggle();
                $(this).toggleClass('open');
                return false;
            });
            this.lazyLoadInit();
            this.quizInit();
            this.calendarInit();
            this.infiniteScrollInit();
            this.marketInit();
            this.bindJsMore();
            this.bindCategoryOrder();
            this.bindPaginationLinks();
            this.bindCategorySlider();
            this.bindInvitations();
            this.bindCategorySlider();
            if ($('.isotope').length) {
                setTimeout(function() {
                    theme.isotopeReLayout();
                }, 1000);
            }
            if ($('.single-post').length || $('.specialproject').length) {
                setTimeout(function() {
                    var id = $('.specialproject').length ? $('.specialproject').attr("data-post-id") : $('.single-post').attr('data-id');
                    var market = $('.market').length ? 1 : 0;
                    $.ajax({
                        type: 'POST',
                        url: options.ajaxurl,
                        dataType: 'json',
                        data: {
                            action: 'viewed',
                            id: id,
                            market: market
                        },
                    }).done(function(data) {});
                }, 1000);
            }
            if ($('.single-holiday').length) {
                if ($('.box-list-holiday-card').length) {
                    var max = 0;
                    $('.holiday-present-list__text').each(function() {
                        max = Math.max(max, $(this).height());
                    });
                    $('.holiday-present-list__text').css({
                        height: max + 'px'
                    });
                }
            }
            $('.icon-holiday-search').unbind().click(function() {
                $(this).hide();
                $('.aside-search').fadeIn();
                return false;
            });
            $('.js-subpage-aside-normal').stick_in_parent({
                offset_top: 35
            });
            $('.js-subpage-aside-articles').stick_in_parent({
                offset_top: 35
            });
            this.stickyScroll('#monthes-sticky', '#monthes-sticky-scroll');
            var viewport_wid = viewport().width;
            if ($('.js-fix-letters').length && viewport_wid > 759) {
                this.stickyScroll('.js-fix-letters', '.js-subpage-scroll-normal');
            }
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
            }
            $('*[data-style!=""]').each(function() {
                var style = $(this).attr('data-style');
                if (style) {
                    $(this).attr('style', style).attr('data-style', '');
                }
            });
            if ($('.banner_main').length) {
                $('.banner_main .close-banner').click(function() {
                    $.ajax({
                        type: 'POST',
                        url: options.ajaxurl,
                        data: {
                            action: 'main_banner_closed'
                        },
                    }).done(function(data) {
                        $('.banner_main').slideUp(function() {
                            $(this).remove();
                        });
                    });
                });
            }
            if ($('.yadisk-album').length) {
                $('.yadisk-album .photo-slider-main').find('img:lt(3)').each(function() {
                    $(this).attr('src', $(this).attr('data-src'));
                });
                $('.yadisk-album .photo-slider-preview').find('img').each(function() {
                    $(this).attr('src', $(this).attr('data-src'));
                });
                $(".yadisk-album .js-photo-slider-main").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
                    $('.yadisk-album .photo-slider-main img[src=""]:lt(2)').add(".yadisk-album .photo-slider-main img:eq(" + nextSlide + ")").each(function() {
                        $(this).attr('src', $(this).attr('data-src'));
                    });
                })
            }
            if ($('.fancybox').length) {
                $(".fancybox").fancybox({
                    openEffect: "fade",
                    closeEffect: "fade",
                    type: "image"
                });
            }
            if ($('.aside-search.pozdravleniya').length) {
                $('.aside-search.pozdravleniya').find('input[type="text"]').autocomplete({
                    minLength: 3,
                    source: function(request, response) {
                        autocomplete_term = request.term;
                        $.ajax({
                            url: options.ajaxurl,
                            dataType: "json",
                            data: {
                                action: 'pozdravleniya_search',
                                text: request.term,
                                term_id: $('.aside-search.pozdravleniya').find('input[type="text"]').attr('data-term')
                            },
                            success: function(data) {
                                response(data);
                            }
                        });
                    },
                    appendTo: '.article-filter'
                }).autocomplete("instance")._renderItem = function(ul, item) {
                    item.label = item.label.replace(autocomplete_term, '<b>' + autocomplete_term + '</b>');
                    return $("<li>").append("<a href=\"" + item.link + "\">" + item.label + "</a>").appendTo(ul);
                };
            }
            var hash = window.location.hash;
            if (hash && $('.list-anchors__link[href="' + hash + '"]').length) {
                $('.list-anchors__link[href="' + hash + '"]').click();
            }
            $('a.header-button__link,a.button-nav').click(function() {
                setTimeout(function() {
                    theme.lazyLoad();
                }, 500);
            });
            if ($('.box-form_didgital-forum').length) {
                $('.box-form_didgital-forum form').on("submit", function() {
                    var that = $(this);
                    var data = $(this).serialize();
                    data += "&page=" + location.href;
                    $.ajax({
                        type: 'POST',
                        url: options.ajaxurl,
                        data: data,
                    }).done(function(data) {
                        $(that).parent().hide();
                        $(that).parent().prev().find("h4").text("Мы вышлем вам программу в ближайшее время!");
                    });
                    return false;
                });
            }
            if ($('.question-text').length) {
                $('.question-text').find('a[data-href!=""]').click(function() {
                    location.href = $(this).attr('data-href');
                    return false;
                });
            }
            $('.list-checkbox__item input').change(function() {
                $('.list-checkbox__item input').not(this).prop("checked", false);
            });
            if ($('.cookie-policy').length) {
                if (document.cookie.indexOf("cookie-policy")) {
                    $('.cookie-policy').hide();
                    return false;
                }
                $('.cookie-policy').css({
                    "bottom": 0
                });
                $('.cookie-policy button').click(function() {
                    $('.cookie-policy').css({
                        "bottom": "-1000px"
                    });
                    var days = 365;
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    document.cookie = "cookie-policy=1; path=/; expires=" + date.toUTCString();
                });
            }
            $('.banner_wrap').click(function() {
                $.ajax({
                    type: 'POST',
                    url: options.ajaxurl,
                    data: {
                        action: 'banner_click',
                        banner: $(this).attr("data-id")
                    },
                }).done(function(data) {});
            });
        },
        ajax: function(options, callback, overlay, push) {
            push = push == undefined ? true : push;
            var toPush = options.url.replace('?slider', '');
            if (location.href != toPush && push) {
                console.log('push 1');
                try {
                    history.pushState({}, null, toPush);
                } catch (e) {}
            }
            options.url = options.url + (options.url.indexOf('?') != -1 ? '&ajax' : '?ajax');
            loading = true;
            if (overlay) {
                $('.icon-load').removeClass("load");
                $('body').addClass('loaded');
                $('.main-wrapper').css({
                    visibility: 'visible',
                    opacity: 0.1
                });
                setTimeout(function() {
                    $('.icon-load').addClass("load");
                }, 1000);
                $('body').css({
                    cursor: "progress"
                });
            }
            console.log(options.url);
            $.ajax(options).done(callback).done(function(data) {
                loading = false;
                $('body').removeClass('loaded');
                $('.main-wrapper').attr('style', '');
                $('body').css({
                    cursor: "default"
                });
                console.log("ajax done");
            });
        },
        infiniteScrollInit: function() {
            lastTop = false;
            loading = false;
            if (!$('.infinite-scroll-wrap').length) {
                $('body').append('<div class="infinite-scroll-wrap" style="display:none"></div>')
            }
            if ($('#infinite-scroll').length) {
                isotopeChanged = false;
                infiniteChanged = false;
                paged = options.paged || 1;
                initPagination = $('.paging-list').html();
                $('#infinite-scroll').prepend('<span class="infinite-page-end loaded" data-page="' + paged + '"></span>');
                $(window).scroll(function(e) {
                    var padding = 500;
                    var top = $(window).scrollTop();
                    if ($('.loads').is(':visible') && lastTop) {
                        e.preventDefault();
                    } else {
                        lastTop = top;
                    }
                    var paged = parseInt($('.paging-list__item.active:visible').find('a').text());
                    var last = parseInt($('.paging-list__item:visible:last').find('a').text());
                    var pageend = $('.infinite-page-end').not('.loaded');
                    if (!$(pageend).length) {
                        return false;
                    }
                    if ($('.isotope').length) {
                        theme.isotopePageEnd();
                        if (isotopeChanged) {
                            handler();
                            theme.isotopeReLayout();
                        }
                        if ($(pageend).css('top') == 'auto' || $(pageend).css('top') == '0px') {
                            theme.isotopePageEnd();
                            return false;
                        }
                    }
                    loading = false;
                    if (top >= ($(pageend).offset().top - padding)) {
                        var next = paged + 1;
                        if (next <= last && !$('.infinite-page-end[data-page="' + next + '"]').is('.loaded')) {
                            $(pageend).attr("data-page", next).addClass('loaded');
                            var link = $('a[data-page="' + next + '"]').attr('href');
                            $('.loads').show();
                            $('body').css({
                                cursor: "progress"
                            });
                            theme.ajax({
                                url: link,
                            }, function(data) {
                                var pagination = $('.paging-list', data).html();
                                $('.paging-list').html(pagination);
                                theme.bindPaginationLinks();
                                var items = $('#infinite-scroll > *', data);
                                $('#infinite-scroll').append(items);
                                isotopeChanged = true;
                                infiniteChanged = true;
                                handler();
                                $('.loads').hide();
                                $('body').css({
                                    cursor: "default"
                                });
                                $(window).trigger('resize').trigger('scroll');
                                if ($('.isotope').length) {
                                    theme.isotopeReLayout();
                                    setTimeout(function() {
                                        theme.isotopeReLayout();
                                    }, 500);
                                }
                                theme.bindInvitations();
                            });
                        }
                    }
                    if (!loading) {
                        var current_page = 1,
                            current_link;
                        $('.infinite-page-end.loaded').each(function() {
                            var page = parseInt($(this).attr('data-page'));
                            var elem = $('.paging-list__link[data-page="' + page + '"]');
                            var link = $(elem).attr('href');
                            if (link == '#') {
                                link = $(elem).attr('data-href');
                            }
                            if (top >= ($(this).offset().top)) {
                                current_page = page;
                                current_link = link;
                            }
                        });
                        if (current_link && location.href != current_link) {
                            console.log('push 2');
                            try {
                                history.pushState({}, null, current_link);
                            } catch (e) {}
                        }
                        $('.paging-list__item.active').removeClass('active');
                        $('.paging-list__link[data-page="' + current_page + '"]').parent().addClass('active');
                        if (current_page == 1) {
                            $('.paging-list').html(initPagination);
                            $('.paging-list a').unbind().click(theme.onPaginationClick);
                        }
                    }
                });
            }
            ;
            holidaysChanged = false;
            if ($('.infinite-holidays').length) {
                $(window).scroll(function(e) {
                    var top = $(window).scrollTop();
                    if (holidaysChanged) {
                        handler();
                        holidaysChanged = false;
                    }
                    if ($('.loads').is(':visible') && lastTop) {
                        $(window).scrollTop(lastTop);
                        e.preventDefault();
                    } else {
                        lastTop = top;
                    }
                    $('.one-month').each(function() {
                        thisMonth = $(this).attr('data-month');
                        var next_month = $(this).attr('data-next');
                        if (($(this).offset().top) < (top)) {
                            $('.list-month__item').removeClass('active');
                            $('.list-month__link[data-month="' + thisMonth + '"]').parent().addClass('active');
                        }
                        if (($(this).offset().top + $(this).height()) < (top + 500)) {
                            if (next_month && !$('.one-month[data-month="' + next_month + '"]').length && !loading) {
                                var link = $('.list-month__link[data-month="' + next_month + '"]').attr('href');
                                if (link.substr(0, 1) == '#') {
                                    return false;
                                }
                                if (link) {
                                    $('.loads').show();
                                    loading = true;
                                    theme.ajax({
                                        url: link,
                                    }, function(data) {
                                        var items = $('.one-month[data-month="' + next_month + '"]', data);
                                        $('.infinite-holidays').append(items);
                                        $('.loads').hide();
                                        holidaysChanged = true;
                                        setTimeout(function() {
                                            handler();
                                        }, 1000);
                                    });
                                }
                            }
                        }
                    });
                });
            }
            if ($('.infinite-names').length) {
                $(window).scroll(function(e) {
                    var top = $(window).scrollTop();
                    $('.box-letter__letter').each(function() {
                        if (($(this).offset().top + $(this).height()) < (top + 300)) {
                            thisLetter = $(this).text();
                            $('.list-letter__item').removeClass('active');
                            $('.list-letter__letter').filter(function() {
                                if ($(this).text() == thisLetter) {
                                    $(this).parent().addClass('active');
                                }
                            });
                        }
                    });
                });
                $('.list-letter__item a').unbind().click(function() {
                    if ($(this).attr('href') == '#') {
                        return false;
                    }
                    var letter = $(this).text();
                    var box = $('.box-letter__letter:contains(' + letter + ')');
                    if ($(box).length) {
                        $("html, body").animate({
                            scrollTop: $(box).offset().top - 50
                        }, 600);
                    } else {
                        var link = $(this).attr('href')
                        $('.loads').show();
                        theme.ajax({
                            url: link,
                        }, function(data) {
                            $('.loads').hide();
                            lastTop = 0;
                            var pagination = $('.paging-list', data).html();
                            initPagination = pagination;
                            $('.paging-list').html(pagination);
                            theme.bindPaginationLinks();
                            var items = $('#infinite-scroll > *', data);
                            $('#infinite-scroll').html('').append(items);
                            handler();
                        });
                    }
                    return false;
                });
                $('.list-group-name__item a').unbind().click(function() {
                    var link = $(this).attr('href');
                    if (link == '#') {
                        return false;
                    }
                    $('.loads').show();
                    theme.ajax({
                        url: link,
                    }, function(data) {
                        $('.loads').hide();
                        lastTop = 0;
                        var pagination = $('.paging-list', data).html();
                        initPagination = pagination;
                        $('.paging-list').html(pagination);
                        theme.bindPaginationLinks();
                        var data = $('.main-article', data).html();
                        $('.main-article').html(data);
                        handler();
                        theme.infiniteScrollInit();
                    });
                    return false;
                });
            }
            if ($('.gratters-by-holidays').length) {
                loadingNext = false;
                lastTop = 0;
                lastSingleUrl = '';
                $(window).scroll(function(e) {
                    var padding = 800;
                    var top = $(window).scrollTop();
                    var pageend = $('.same-list__item:last').not('.loaded');
                    if (top == lastTop) {
                        return false;
                    }
                    if ($('.loads').is(':visible') && lastTop) {
                        $(window).scrollTop(lastTop);
                        e.preventDefault();
                    } else {
                        lastTop = top;
                    }
                    if (!$(pageend).length) {
                        return false;
                    }
                    if (top > (($(pageend).offset().top + $(pageend).height()) - padding) && !loadingNext) {
                        $(pageend).addClass('loaded');
                        var ids = [];
                        $('.same-list__item').each(function() {
                            ids.push($(this).attr('data-post'));
                        });
                        var link = '/pozdravleniya/?from=' + $(pageend).attr('data-date') + '&post_id=' + ids.join(',');
                        loadingNext = true;
                        $('.loads').show();
                        theme.ajax({
                            url: link,
                        }, function(data) {
                            setTimeout(function() {
                                loadingNext = false;
                            }, 1500);
                            var items = $('.same-list > *', data);
                            $('.same-list').append(items);
                            isotopeChanged = true;
                            infiniteChanged = true;
                            theme.isotopeReLayout(items);
                            handler();
                            $('.loads').hide();
                            if ($('.isotope').length) {
                                theme.isotopeReLayout();
                                setTimeout(function() {
                                    theme.isotopeReLayout();
                                }, 500);
                            }
                        }, false, false);
                    }
                });
            }
            $('.article-holidays .article-filter__item a').unbind().click(function() {
                var link = $(this).attr('href');
                if (link == '#') {
                    return false;
                }
                if (link == '/holidays/') {
                    return true;
                }
                $('.loads').show();
                theme.ajax({
                    url: link,
                }, function(data) {
                    $('.loads').hide();
                    lastTop = 0;
                    var pagination = $('.paging-list', data).html();
                    initPagination = pagination;
                    $('.paging-list').html(pagination);
                    $('.bread-crumbs').html($('.bread-crumbs', data).html());
                    var data = $('.main-article', data).html();
                    $('.main-article').html(data);
                    handler();
                    setTimeout(function() {
                        handler();
                    }, 1500);
                    $("html, body").animate({
                        scrollTop: 0
                    }, 0);
                    theme.init();
                    theme.bindPaginationLinks();
                    theme.infiniteScrollInit();
                });
                return false;
            });
            $('.article-filter__item.all a').unbind().click(function() {
                $(this).parent().remove();
                $('.article-filter__item').addClass('visible');
                return false;
            });
            $('.infinite-holidays input').unbind().change(function() {
                var query = $(this).val();
            });
        },
        isotopeReLayout: function(items) {
            if (items) {
                if ($('.isotope').data('isotope')) {
                    $('.isotope').isotope('appended', items);
                    $(window).trigger('resize').trigger('scroll');
                    isotopeChanged = false;
                }
            }
            if ($('.isotope').data('isotope')) {
                $('.isotope').isotope('reloadItems').isotope('layout');
                isotopeChanged = false;
            }
            $(window).trigger('resize').trigger('scroll');
            handler();
            setTimeout(function() {
                handler();
            }, 5000);
            theme.isotopePageEnd();
        },
        isotopePageEnd: function() {
            if ($('.isotope').data('isotope')) {
                $('.isotope').isotope('reloadItems').isotope('layout');
            }
            var pageend = $('.infinite-page-end').not('.loaded');
            var top = $(pageend).prev('*:eq(0)').css('top');
            $(pageend).css({
                position: 'absolute',
                top: top
            });
        },
        bindPaginationLinks: function() {
            $('.paging-list a').unbind().click(function() {
                var page = parseInt($(this).text());
                var pageend = $('.infinite-page-end[data-page="' + page + '"]');
                if ($(pageend).length && $(pageend).hasClass('loaded')) {
                    $('.paging-list__item.active').removeClass('active');
                    $(this).parent().addClass('active');
                    var elem = $(pageend).nextAll('li').not('.infinite-page-end').filter(':first');
                    $("html, body").animate({
                        scrollTop: $(elem).offset().top - 100
                    }, 600);
                    var link = $(this).attr('href');
                    if (link == '#') {
                        link = $('.paging-list').attr('data-url');
                    }
                    if (location.href != link) {
                        console.log('push 4');
                        try {
                            history.pushState({}, null, link);
                        } catch (e) {}
                    }
                    return false;
                }
            });
        },
        bindCategoryOrder: function() {
            $('.article-filter__link.category').unbind().click(function() {
                var parent = $(this).parent().parent().parent();
                var link = $(this).attr('href');
                $('.filter-title', parent).removeClass('open').text($(this).text());
                $('.loads').show();
                $('body').css({
                    cursor: "progress"
                });
                $('.article-filter__item', parent).removeClass('active');
                $(this).parent().addClass('active');
                theme.ajax({
                    url: link,
                }, function(data) {
                    $('.loads').hide();
                    $('body').css({
                        cursor: "default"
                    });
                    var pagination = $('.paging-list', data).html();
                    initPagination = pagination;
                    $('.paging-list').html(pagination);
                    theme.bindPaginationLinks();
                    $('#filters').html($('#filters', data).html());
                    theme.bindCategoryOrder();
                    var items = $('#infinite-scroll > *', data);
                    $('#infinite-scroll').hide().html('').append(items);
                    isotopeChanged = true;
                    theme.isotopeReLayout();
                    $(parent).trigger('click');
                    setTimeout(function() {
                        $('#infinite-scroll').show();
                        theme.isotopeReLayout();
                        $(window).scroll();
                    }, 1000);
                });
                return false;
            });
        },
        bindCategorySlider: function() {
            $('.article-slider button').unbind().click(function() {
                var link = $('.article-slider').attr('data-' + ($(this).hasClass('slick-prev') ? 'prev' : 'next'));
                theme.ajax({
                    url: link + '?slider',
                }, function(data) {
                    var slider = $('.article-slider', data);
                    $('.article-slider').html($(slider).html()).attr('data-prev', $(slider).attr('data-prev')).attr('data-next', $(slider).attr('data-next'));
                    $('.content').html($('.content', data).html());
                    var pagination = $('.paging-list', data).html();
                    $('.paging-list').html(pagination);
                    theme.bindPaginationLinks();
                    if ($('.js-inside-slider').length) {
                        $('.js-inside-slider').slick({
                            dots: true,
                            infinite: true,
                            arrows: false,
                            speed: 1000,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            fade: true,
                            responsive: [{
                                breakpoint: 6000,
                                settings: "unslick"
                            }, {
                                breakpoint: 760,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    dots: true
                                }
                            }]
                        });
                    }
                    ;
                    $('.js-article-slider').slick({
                        dots: false,
                        infinite: true,
                        arrows: false,
                        speed: 600,
                        autoplay: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        swipe: false,
                        fade: true,
                    });
                    new WOW().init();
                    theme.init();
                }, true);
                return false;
            });
        },
        quizInit: function() {
            if (!$('.box-test').length) {
                return false;
            }
            quiz_id = $('.box-test').attr('data-id');
            quiz_questions = parseInt($('.box-test-wrap').attr('data-cnt'));
            question_n = 1;
            $('.test-button').not('.test-button_small').click(function() {
                question_n = question_n || 1;
                try {
                    clearTimeout(answerTimer);
                } catch (e) {}
                try {
                    clearTimeout(answerCountdown);
                } catch (e) {}
                if (question_n == 1) {
                    quiz.right = 0;
                    quiz.scores_count = {};
                    quiz.scores = 0;
                    quiz_timer = parseInt($('.box-test').attr('data-timer'));
                    quiz_timer_left = quiz_timer;
                }
                if (question_n == 1 && (quiz_timer || $('.box-question-text[data-timer!=0]').length)) {
                    $('.test-progress').show();
                    $('.test-quiz-progress').show();
                    if (quiz_timer) {
                        quizTimer = setTimeout(function() {
                            question_n = quiz_questions + 1;
                            $('.test-button_small.disabled:visible').removeClass('disabled');
                            $('.test-button_small').trigger("click");
                            $('.test-progress').hide();
                        }, quiz_timer * 1000);
                        quizCountdown = setInterval(function() {
                            quiz_timer_left--;
                            var m = parseInt(quiz_timer_left / 60);
                            if (m.toString().length == 1) {
                                m = "0" + m;
                            }
                            var s = quiz_timer_left - (m * 60);
                            if (s.toString().length == 1) {
                                s = "0" + s;
                            }
                            var percent = parseInt(quiz_timer_left / (quiz_timer / 100));
                            $('.test-quiz-progress div').css({
                                "width": percent + "%"
                            })
                            $('.test-quiz-progress span').text(m + ":" + s);
                        }, 1000);
                    }
                }
                if (!quiz_timer) {
                    $('.test-quiz-progress').hide();
                }
                $('.box-test-wrap, .box-question-text, .box-test-wrap_finish, .answer-check-list__percent').hide();
                $('.test-button_small').addClass('disabled');
                $('.answer-check-list__item').removeClass('positive negative');
                $('.answer-check-list').removeClass('disabled');
                $('.answer-check-list__percent-text').text('');
                $('.answer-check-list input').prop('checked', false);
                var n = question_n - 1;
                $('.box-question-text:eq(' + n + ')').show();
                question_timer = parseInt($('.box-question-text:eq(' + n + ')').attr('data-timer'));
                question_timer_left = question_timer;
                if (question_timer) {
                    $('.test-question-progress').show();
                    answerTimer = setTimeout(function() {
                        $('.test-button_small.disabled:visible').removeClass('disabled');
                        $('.test-button_small').trigger('click');
                        $('.test-question-progress div').css({
                            "width": "100%"
                        });
                        $('.test-question-progress span').text("");
                    }, question_timer * 1000);
                    answerCountdown = setInterval(function() {
                        question_timer_left--;
                        var m = parseInt(question_timer_left / 60);
                        if (m.toString().length == 1) {
                            m = "0" + m;
                        }
                        var s = question_timer_left - (m * 60);
                        if (s.toString().length == 1) {
                            s = "0" + s;
                        }
                        var percent = parseInt(question_timer_left / (question_timer / 100));
                        $('.test-question-progress div').css({
                            "width": percent + "%"
                        });
                        $('.test-question-progress span').text(m + ":" + s);
                    }, 1000);
                } else {
                    $('.test-question-progress').hide();
                }
                return false;
            });
            $('.test-button_small').click(function() {
                if ($(this).hasClass('disabled')) {
                    return false;
                }
                question_n++;
                if (question_n <= quiz_questions) {
                    $('.test-question-description').html("").hide();
                    $('.test-button').trigger('click');
                    $("html, body").animate({
                        scrollTop: $(".box-test").offset().top
                    }, 300);
                } else {
                    if (quiz.bycount) {
                        var max = 0,
                            resultN = null;
                        for (n in quiz.scores_count) {
                            if (quiz.scores_count[n] > max) {
                                max = parseFloat(quiz.scores_count[n]);
                                resultN = n;
                            }
                        }
                        for (n in quiz.results) {
                            var r = quiz.results[n];
                            if (parseFloat(r.value) == resultN) {
                                result = r;
                            }
                        }
                    } else {
                        var need = {},
                            sorted = [];
                        for (n in quiz.results) {
                            var r = quiz.results[n];
                            var value = r.value.split('-');
                            if (typeof need[value[0]] != "object") {
                                need[value[0]] = [];
                            }
                            need[value[0]].push(r);
                        }
                        for (n in need) {
                            for (nn in need[n]) {
                                sorted.push(need[n][nn]);
                            }
                        }
                        var result = null;
                        for (n in sorted) {
                            var r = sorted[n];
                            var value = r.value.split('-');
                            if (value.length == 1) {
                                value[1] = value[0];
                            }
                            value[0] = parseInt(value[0]);
                            value[1] = parseInt(value[1]);
                            if ((value[0] <= quiz.scores && quiz.scores <= value[1])) {
                                result = sorted[n];
                            }
                        }
                    }
                    data = result;
                    data.scores = quiz.scores;
                    data.right = quiz.right;
                    question_n = 1;
                    try {
                        clearTimeout(quizTimer);
                    } catch (e) {}
                    try {
                        clearInterval(questionCountdown);
                    } catch (e) {}
                    try {
                        clearInterval(answerCountdown);
                    } catch (e) {}
                    if (data.text.substr(0, 3) != "<p>") {
                        data.text = "<p>" + data.text + "</p>";
                    }
                    $('.box-test-wrap_finish strong').text(data.right);
                    $('.box-test-wrap_finish h3').text(data.title);
                    $('.box-test-wrap_finish .test-result').html(data.text);
                    $('.box-test-wrap, .box-question-text, .answer-check-list__percent').hide();
                    $('.box-test-wrap_finish').show();
                    $('.test-progress').hide();
                    yashareTest = Ya.share2("quizShare", {
                        content: {
                            url: $('.box-test').attr('data-url') + "?utm_scores=" + data.scores + "&utm_stat=" + data.right,
                            title: data.post_title,
                        }
                    });
                }
                return false;
            });
            $('.answer-check-list__label input').change(function() {
                var that = $(this);
                var li = $(that).parent().parent();
                var qId = $(li).find('input').attr('data-question-id');
                if ($(li).parent().hasClass('disabled')) {
                    return false;
                }
                $(li).parent().addClass('disabled');
                var right = $(li).parent().find('.answer-check-list__label[data-class="positive"]').parent();
                var _class = $(li).find('.answer-check-list__label').attr('data-class');
                if (_class == 'positive') {
                    $(li).addClass(_class);
                    var value = parseFloat($(li).attr('data-value'));
                    quiz.scores += value;
                    if (quiz.scores_count[value] == undefined) {
                        quiz.scores_count[value] = 0;
                    }
                    quiz.scores_count[value]++;
                    quiz.right++;
                } else {
                    $(li).addClass('negative');
                    $(right).addClass('positive');
                }
                var comment = quiz.questions[qId].post_content;
                if (comment) {
                    $('.test-question-description', li).html(comment).show();
                }
            });
            $('.social-list.quiz a').unbind().click(function() {
                var n = $(this).attr('data-n');
                $('#quizShare .ya-share2__item:eq(' + n + ')').trigger('click');
                return false;
            });
            if ($('.answer-check-list__label').length) {
                setInterval(function() {
                    if ($('.answer-check-list__label input:checked:visible').length && $('.test-button_small.disabled:visible').length) {
                        $('.test-button_small.disabled:visible').removeClass('disabled');
                    }
                }, 1000);
            }
        },
        calendarInit: function() {
            if (!$('#date_range').length) {
                return false;
            }
            $.datepicker.regional['ru'] = {
                closeText: 'Закрыть',
                prevText: '&#x3c;Пред',
                nextText: 'След&#x3e;',
                currentText: 'Сегодня',
                monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
                dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
                dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                dateFormat: 'dd.mm.yy',
                firstDay: 1,
                isRTL: false
            };
            $.datepicker.setDefaults($.datepicker.regional['ru']);
            monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
            skipFirstMonthChange = false;
            $('#date_range').datepicker({
                range: 'multiple',
                range_multiple_max: '1',
                showOtherMonths: true,
                duration: "0",
                dateFormat: 'yy-mm-dd',
                onSelect: function(dateText, inst) {
                    console.log(dateText + ' onSelect');
                    var date = new Date(dateText);
                    var today = new Date();
                    var date_block = $('.block-by-date[data-day="' + dateText + '"]');
                    if (!$(date_block).length) {
                        return false;
                    }
                    $('.block-by-date').hide();
                    $(date_block).show();
                    $('.today-names__inf-block').show();
                    if (!$('.today-names__inf-block.holidays .block-by-date[data-day="' + dateText + '"]').length) {
                        $('.today-names__inf-block.holidays').hide();
                    }
                    if (!$('.today-names__inf-block.namedays .block-by-date[data-day="' + dateText + '"]').length) {
                        $('.today-names__inf-block.namedays,.today-names__title').hide();
                    } else {
                        $('.today-names__title').show();
                    }
                    if ($('#date_range').hasClass('single-name') || !firstOnCalendarSelect) {
                        firstOnCalendarSelect = true;
                        return false;
                    }
                    var link = $('#date_range').hasClass('holiday') ? '/holidays/' : '/names/imeniny/';
                    link += monthNames[date.getMonth()] + '/' + date.getDate() + '/';
                    if (location.href != link) {
                        console.log('push 5');
                        if ($('.today-names__inf-block.holidays').find('.block-by-date[data-day="' + dateText + '"]').length) {
                            try {
                                history.pushState({}, null, link);
                            } catch (e) {}
                        }
                    }
                    var dateText = $(date_block).attr('date-text');
                    if ($.datepicker.formatDate('yy-mm-dd', date) != $.datepicker.formatDate('yy-mm-dd', today)) {
                        $('.today-names h3 label').hide();
                    } else {
                        $('.today-names h3 label').show();
                    }
                    $('.today-names h3 span, h1 span').text(dateText);
                    if ($('.today-names__title').length) {
                        $('.today-names__title span').text(dateText);
                    }
                    $('.today-names__inf-block.today, .today-names__inf-block.tomorrow').hide();
                },
                beforeShowDay: function(date) {
                    var _class = '';
                    if ($.inArray($.datepicker.formatDate('yy-mm-dd', date), days) > -1) {
                        _class = 'avalible';
                    }
                    if ($.inArray($.datepicker.formatDate('yy-mm-dd', date), holidays) > -1) {
                        _class += ' holiday';
                    }
                    return [true, _class];
                },
                onChangeMonthYear: function(year, month, inst) {
                    if ($('#date_range').hasClass('single-name')) {
                        return false;
                    }
                    if (skipFirstMonthChange) {
                        skipFirstMonthChange = false;
                        return false;
                    }
                    console.log('onChangeMonthYear');
                    $('.loads').show();
                    try {
                        clearTimeout(calandarTimeout);
                    } catch (e) {}
                    calandarTimeout = setTimeout(function() {
                        $.ajax({
                            type: 'POST',
                            url: options.ajaxurl,
                            dataType: 'json',
                            data: {
                                action: 'calendar_holidays',
                                year: year,
                                month: month
                            },
                        }).done(function(data) {
                            days = data.days;
                            holidays = data.holidays;
                            for (date in data.html_namedays) {
                                if (!$('.today-names__inf-block.namedays .block-by-date[data-day="' + date + '"]').length) {
                                    $('.today-names__inf-block.namedays').append(data.html_namedays[date]);
                                }
                            }
                            for (date in data.html_holidays) {
                                if (!$('.today-names__inf-block.holidays .block-by-date[data-day="' + date + '"]').length) {
                                    $('.today-names__inf-block.holidays .aside-names').append(data.html_holidays[date]);
                                }
                            }
                            $('#date_range').datepicker('setDate', year + '-' + month + '-01');
                            $('.ui-state-active').trigger('click');
                            $('#date_range').datepicker('setDate', year + '-' + month + '-01');
                            theme.bindJsMore();
                            $('.loads').hide();
                            console.log('onChangeMonthYear');
                        });
                    }, 1000);
                },
            });
            if (new Date(firstDay).getMonth() != new Date().getMonth()) {
                skipFirstMonthChange = true;
            }
            try {
                $('#date_range').datepicker('setDate', [firstDay]);
            } catch (e) {
                $('#date_range').datepicker('setDate', firstDay);
            }
            if ($('#date_range').hasClass('single-name')) {
                var date = new Date();
                $("#date_range").datepicker("option", "minDate", new Date(date.getFullYear(), 0, 01));
                $("#date_range").datepicker("option", "maxDate", new Date(date.getFullYear(), 11, 31));
            }
            var dayBlock = $('.block-by-date[data-day="' + firstDay + '"]');
            $('.block-by-date').hide();
            $(dayBlock).show();
            $('.today-names h3 span').text($(dayBlock).attr('date-text'));
            $('.ui-datepicker-prev, .ui-datepicker-next').click(function() {
                firstMonth = true;
            });
        },
        marketInit: function() {
            $('.market .sort select').change(function() {
                var link = $(this).find('option:selected').attr('data-link');
                location.href = link;
            });
            $('.market-filter button, .market-filter-clear').click(function() {
                var clear = $(this).hasClass('market-filter-clear') ? true : false;
                theme.marketFilter(clear);
                return false;
            });
            $('.market-filter').find('input').not('.flowers-search').change(function() {
                theme.marketFilter(false);
                return false;
            });
            $('.market-product .thumb img').click(function() {
                $('.market-product .thumb img').removeClass('active');
                $(this).addClass('active');
                $('.market-product .preview > img').attr('src', $(this).attr('src'));
            });
            $('.market-products.slider ul.items').slick({
                slide: 'li',
                dots: false,
                infinite: true,
                arrows: true,
                speed: 1000,
                slidesToShow: $('.holiday-present-list__item').length ? 1 : 3,
                slidesToScroll: 1,
                variableWidth: false,
                focusOnSelect: false,
                accessibility: false,
                responsive: [{
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '0px',
                        fade: true
                    }
                }]
            });
            $('.market .product-like').click(function() {
                var id = $(this).attr('data-id');
                $(this).toggleClass('liked');
                $.ajax({
                    type: 'POST',
                    url: options.ajaxurl,
                    data: {
                        action: 'market_like',
                        id: id
                    },
                }).done(function(data) {});
            });
            if ($('.selectpicker').length) {
                $('.selectpicker').dropdown();
                $('.sort .dropdown-link').click(function() {
                    setTimeout(function() {
                        $('.market .sort select').trigger('change');
                    }, 500);
                });
            }
            if ($('.nicescroll').length) {
                try {
                    setTimeout(function() {
                        $(".nicescroll").niceScroll({
                            cursorcolor: "white",
                            cursorwidth: "5px",
                            background: "rgba(0,0,0,0)",
                            horizrailenabled: false,
                            enableobserver: true
                        });
                    }, 1000);
                } catch (e) {}
            }
            $('.flowers-search').on("keyup", function() {
                var text = $(this).val();
                $(this).next().find('.market-filter__group').show();
                $(this).next().find('.market-filter__group').each(function() {
                    if ($(this).text().toUpperCase().indexOf(text.toUpperCase()) >= 0 || text == "") {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            });
            if ($("#parallax").length) {
                window.onscroll = function() {
                    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
                    document.getElementById('parallax').style.backgroundPosition = '0 ' + (-150 + (-0.25 * scrolled)) + 'px';
                }
            }
            if ($('.main-page').length && $('.market-products-inline--full').length && $(window).width() < 990) {
                $('.market-products-inline--full').removeClass('market-products-inline--full');
            }
        },
        marketFilter: function(clear) {
            clear = clear || false;
            var data = $('.market-filter').serialize();
            if (clear) {
                data = "action=market_filter&filter=";
            }
            $.ajax({
                type: 'POST',
                url: options.ajaxurl,
                data: data,
            }).done(function(data) {
                var url = '/market/all/?filtered';
                theme.ajax({
                    url: url,
                }, function(data) {
                    $('.content').html($('.content', data).html());
                    var pagination = $('.paging-list', data).html();
                    $('.paging-list').html(pagination);
                    theme.bindPaginationLinks();
                    new WOW().init();
                    theme.init();
                    try {
                        history.pushState({}, null, '/market/all/');
                    } catch (e) {}
                }, true);
            });
        },
        bindJsMore: function() {
            $(".js-more").toggle(function() {
                $(this).parents('.aside-names').find('.hide-names').css({
                    'display': "inline"
                });
                if (viewport().width <= 1024) {
                    $(this).parents('.aside-names').find('.hide-names-ipad').css({
                        'display': "inline"
                    });
                }
                $(this).text("Свернуть");
            }, function() {
                $(this).parents('.aside-names').find('.hide-names').css({
                    'display': "none"
                });
                if (viewport().width <= 1024) {
                    $(this).parents('.aside-names').find('.hide-names-ipad').css({
                        'display': "none"
                    });
                }
                $(this).text("Еще");
            });
            $(".js-more-article").unbind().toggle(function() {
                $(this).parents('.article-filter__list').find('.hide-more').css({
                    'display': "inline-block"
                });
                $(this).text("Свернуть");
            }, function() {
                $(this).parents('.article-filter__list').find('.hide-more').css({
                    'display': "none"
                });
                $(this).text("Еще");
            });
            $(".js-read-more").toggle(function() {
                $(this).parents('.js-more-text-cont').find('span.hide-text-inf').css({
                    'display': 'inline'
                });
                $(this).parents('.js-more-text-cont').find('div.hide-text-inf').css({
                    'display': 'block'
                });
                $(this).text("Свернуть");
            }, function() {
                $(this).parents('.js-more-text-cont').find('span.hide-text-inf').css({
                    'display': 'none'
                });
                $(this).parents('.js-more-text-cont').find('div.hide-text-inf').css({
                    'display': 'none'
                });
                $(this).text("Читать дальше ...");
                var target = $(this).attr('href');
                if (!$(target).length) {
                    target = $('*[name="' + target.replace('#', '') + '"]')
                }
                ;
                $('html, body').animate({
                    scrollTop: $(target).offset().top - 70
                }, 600);
            });
        },
        bindInvitations: function() {
            $('a.vote').unbind().click(function() {
                if ($(this).hasClass('active')) {
                    return false;
                }
                $(this).addClass('active');
                var id = $(this).attr('data-id');
                var cnt = parseInt($(this).find('span').text());
                $(this).find('span').text(cnt + 1);
                $.ajax({
                    type: 'POST',
                    url: options.ajaxurl,
                    data: {
                        action: 'invitations_vote',
                        id: id
                    },
                }).done(function(data) {});
                return false;
            });
            $('.holiday-present-list__link-card').unbind().click(function() {
                var item = $(this).parent().parent();
                if ($(item).parent().hasClass('holiday-present-list__item_with-card')) {
                    $(item).parent().removeClass('holiday-present-list__item_with-card');
                    $(item).find('.card-buttons').hide();
                    $(item).add('.box-card-form').css({
                        'background-image': ''
                    });
                    $(this).text('Открытка');
                } else {
                    $(item).parent().addClass('holiday-present-list__item_with-card');
                    $(item).find('.card-buttons').show();
                    images = images || [];
                    var image = images[0];
                    if (image) {
                        $(item).add('.box-card-form').css({
                            'background-image': 'url(' + image + ')'
                        }).attr('data-image', image);
                    }
                    $(this).text('Текст');
                }
                theme.isotopeReLayout();
                return false;
            });
            $('.card-buttons .button').unbind().click(function() {
                var item = $(this).parent().parent();
                $('.box-card-form.main').clone().appendTo(item).removeClass('main').fadeIn();
                $(item).find('form').append('<input type="hidden" name="post_id" value="' + $(item).attr('data-post') + '" />');
                $(item).find('form').append('<input type="hidden" name="term_id" value="' + $(item).attr('data-term') + '" />');
                $(item).find('form').append('<input type="hidden" name="image" value="' + $(item).attr('data-image') + '" />');
                $('.box-card-form__link').unbind().click(function() {
                    $('.box-card-form:visible').fadeOut();
                    return false;
                });
                $('.box-card-form .button').unbind().click(function() {
                    var form = $(this).parent().parent();
                    $(form).on('submit', function() {
                        $('.g-recaptcha > div').css({
                            border: 'none'
                        });
                        if (grecaptcha.getResponse() == "") {
                            $('.g-recaptcha > div').css({
                                border: '1px solid #FF0000'
                            });
                            return false;
                        }
                        setTimeout(function() {
                            $('.box-card-form:visible').fadeOut();
                        }, 500);
                    });
                    $(form).find('input[type="submit"]').click();
                    return false;
                });
                $('.box-capcha:visible > div').addClass('g-recaptcha');
                grecaptcha.render($('.g-recaptcha:visible')[0], {
                    sitekey: $('.g-recaptcha:visible').attr('data-sitekey')
                });
                return false;
            });
            $('.holiday-social-list__link').not('.vote,.link').unbind().click(function() {
                var that = $(this);
                var item = $(this).parents().get(4);
                var id = $(item).attr('data-post');
                cardID = id;
                card = $(item).attr('data-card');
                cardText = $(item).find('.holiday-present-list__text').text();
                shareN = $(this).attr('data-n');
                var image = $(item).attr('data-image');
                if (!card) {
                    images = images || [];
                    if (!image && images.length) {
                        image = images[0];
                    }
                    var md5 = MD5(image);
                    image = '/?card&post_id=' + id + '&image=' + image
                    $('.cardImg').remove();
                    $('body').append('<img id="card_' + id + '" class="cardImg" style="display: none"/>');
                    $('#card_' + id).load(function() {
                        card = location.protocol + '//' + location.host + '/wp-content/uploads/cards/card_' + md5 + '_' + id + '.png';
                        if ($(that).hasClass('link')) {
                            return true;
                        } else {
                            return theme.cardShare();
                        }
                    });
                    $('img#card_' + id).attr('src', image);
                } else {
                    return theme.cardShare();
                }
                return false;
            });
            $('.holiday-social-list__item .link').each(function() {
                var item = $(this).parents().get(4);
                var id = $(item).attr('data-post');
                var image = $(item).attr('data-image');
                images = images || [];
                if (!image && images.length) {
                    image = images[0];
                }
                image = '/?card&post_id=' + id + '&image=' + image
                $(this).attr('href', image).attr("target", "_blank");
            });
            $('.card-buttons__link').unbind().click(function() {
                var item = $(this).parents().get(1);
                var n = parseInt($(item).attr('data-n'));
                var next = n + 1;
                var image = false;
                images = images || [];
                if ((images.length - 1) < next) {
                    next = 0;
                }
                image = images[next];
                if (image) {
                    $(item).attr('data-n', next);
                    $(item).css({
                        'background-image': 'url(' + image + ')'
                    }).attr('data-image', image);
                }
                return false;
            });
        },
        cardShare: function() {
            var url = $('link[rel="canonical"]').attr("href") + "?utm_card=" + cardID;
            yashare.updateContent({
                url: url,
                title: $('h1').text(),
                description: cardText,
                image: card,
            });
            $('#yaShare .ya-share2__item:eq(' + shareN + ')').trigger('click');
        },
        stickyScroll: function(elem, wrap) {
            if ($(elem).length) {
                $(function() {
                    var a = document.querySelector(elem),
                        b = null,
                        P = $('.header-fixed').height() + 2,
                        newChild = null;
                    window.addEventListener('scroll', Ascroll, false);
                    document.body.addEventListener('scroll', Ascroll, false);
                    function Ascroll() {
                        if (viewport().width >= 760) {
                            if (b == null) {
                                newChild = null;
                                var Sa = getComputedStyle(a, ''),
                                    s = '';
                                for (var i = 0; i < Sa.length; i++) {
                                    if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                                        s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                                    }
                                }
                                b = document.createElement('div');
                                b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                                a.insertBefore(b, a.firstChild);
                                var l = a.childNodes.length;
                                for (var i = 1; i < l; i++) {
                                    b.appendChild(a.childNodes[1]);
                                }
                                a.style.height = b.getBoundingClientRect().height + 'px';
                                a.style.padding = '0';
                                a.style.border = '0';
                            }
                            var Ra = a.getBoundingClientRect(),
                                R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector(wrap).getBoundingClientRect().bottom + P);
                            if ((Ra.top - P) <= 0) {
                                if ((Ra.top - P) <= R) {
                                    b.className = 'stop';
                                    b.style.top = -R + 'px';
                                } else {
                                    b.className = 'sticky';
                                    b.style.top = P + 'px';
                                }
                            } else {
                                b.className = '';
                                b.style.top = '';
                            }
                            window.addEventListener('resize', function() {
                                a.children[0].style.width = getComputedStyle(a, '').width
                            }, false);
                        } else {
                            if ((b != null) && (newChild == null)) {
                                newChild = b.children;
                                a.appendChild(newChild[0]);
                                a.appendChild(newChild[0]);
                                a.removeChild(b);
                                b = null;
                            }
                            try {
                                a.style.top = '';
                                a.style.height = '';
                                a.style.border = '';
                                a.style.padding = '';
                                a.style.width = '';
                                a.firstChild.style.width = '';
                            } catch (e) {}
                        }
                    }
                });
            }
            ;
        },
        lazyLoad: function() {
            var loaded = false;
            $('img[data-src]').each(function(n) {
                var rect = $(this)[0].getBoundingClientRect();
                var isviewport = (rect.top >= 0 && rect.left >= 0 && (rect.top - 500) <= (window.innerHeight || document.documentElement.clientHeight));
                if (isviewport) {
                    if ($(this).hasClass('lazy-bg')) {
                        $(this).css({
                            "background-image": 'url(' + $(this).attr("data-src") + ')'
                        });
                    } else {
                        $(this).attr("src", $(this).attr("data-src")).load(function() {
                            imageResize()
                        });
                    }
                    $(this).removeAttr("data-src");
                    setTimeout(function() {
                        imageResize();
                    }, 500);
                    loaded = true;
                }
            });
            if (loaded) {
                imageResize();
            }
        },
        lazyLoadInit: function() {
            if ($('body').hasClass('lazyloaded')) {
                return false;
            }
            $(window).scroll(function(e) {
                theme.lazyLoad();
            });
            $('body').addClass('lazyloaded');
        },
    };
    $(document).ready(function() {
        theme.init();
    });
    setTimeout(function() {
        theme.lazyLoadInit();
    }, 3000);
})(jQuery);
$.fn.extend({
    toggleText: function(a, b) {
        return this.text(this.text() == b ? a : b);
    }
});
