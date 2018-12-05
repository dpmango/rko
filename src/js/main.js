window.onbeforeunload = function(){
  window.scrollTo(0,0)
}

// READY function
$(document).ready(function(){

  //////////
  // Global variables
  //////////

  var _window = $(window);
  var _document = $(document);
  var html = document.documentElement;
  var body = document.body;
  var scrollEnabled = false;
  var lastScroll = 0;
  var loadCounter = 0;
  var wScroll = 0;

  // flow sections
  var flowSections = {
    'fixed': undefined,
    'scroll': undefined,
    'fixedHeight': undefined,
    'windowHeight': undefined
  }

  var parallaxElements = {
    container: undefined,
    start: 0,
    end: 0
  }

  // scroll X section
  var scrollX = {
    container: undefined, // jquery $ obj
    containerWidth: undefined, // how much should be scrolled
    parent: undefined, // jquery $ obj
    startPoint: undefined, // when scrollX should start
    endPoint: undefined, // when scrollX should end
    containerOffset: 0, // stored var on animation
    parentOffset: 0, // stored var on animation
    parallaxEffect: 300, // in px
    scrollRequest: 0, // used for requestAnimationFrame()
    requestId: null // used for requestAnimationFrame()
  }

  ////////////
  // LIST OF FUNCTIONS
  ////////////

  // some functions should be called once only
  legacySupport();

  // triggered when PJAX DONE
  // The new container has been loaded and injected in the wrapper.
  function pageReady(fromPjax){
    setTooltipPositions();
    initPerfectScrollbar();
    initTeleport();
    initPullSwitch();
    initHeaderAnimations();
    initHeaderClicks();
  }

  // The transition has just finished and the old Container has been removed from the DOM.
  function pageCompleated(fromPjax){
    getFlowSections();
    runAnimations();
    initScrollMonitor();
    if(fromPjax){
      getParallaxSections();
      getScrollX();
    }
  }

  // TODO - not always triggered
  window.addEventListener("load", onLoad)

  function onLoad(){
    getParallaxSections();
    getScrollX();
    transformScrollX();
    window.focus();
    _window.on('resize', debounce(getScrollX, 100));
    _window.on('scroll', scrollScrollX);
  }


  // scroll/resize listener
  _window.on('scroll', setWindowScroll);
  _window.on('scroll', scrollFlowSections);
  _window.on('scroll', throttle(hideFixedSection, 50));
  _window.on('scroll', scrollParallax);
  // _window.on('scroll', scrollScrollX);
  _window.on('resize', debounce(setTooltipPositions, 100))
  _window.on('resize', debounce(getFlowSections, 100));
  _window.on('resize', debounce(getParallaxSections, 100));
  // _window.on('resize', debounce(getScrollX, 100));
  _window.on('resize', debounce(setBreakpoint, 200))


  // this is a master function which should have all functionality
  pageReady();
  pageCompleated();


  //////////
  // COMMON
  //////////

  function legacySupport(){
    // svg support for laggy browsers
    svg4everybody();

    // Viewport units buggyfill
    window.viewportUnitsBuggyfill.init({
      force: false,
      refreshDebounceWait: 150,
      appendToBody: true
    });
  }


  // Prevent # behavior
	_document
    .on('click', '[href="#"]', function(e) {
      e.preventDefault();
    })

  // just store global variable with scroll distance
  function setWindowScroll(){
    wScroll = _window.scrollTop();
  }

  ////////////
  // detectors
  ///////////
  function isMobile(){
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    return (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) )
  }

  // viewport width
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
  };

  function isMoreThanMd(){
    return _window.width() > 768
  }
  function isLessThanMd(){
    return _window.width() <= 768
  }

  if ( msieversion() ){
    $('body').addClass('is-ie');
  }

  if ( isMobile() ){
    $('body').addClass('is-mobile').addClass('ios');
  } else {
    $('body').addClass('web');
  }


  // disable / enable scroll by setting negative margin to page-content eq. to prev. scroll
  // this methods helps to prevent page-jumping on setting body height to 100%
  function disableScroll() {
    lastScroll = _window.scrollTop();
    $('.page').css({
      'margin-top': '-' + lastScroll + 'px'
    });
    scrollEnabled = false
    $('body').addClass('body-lock');
  }

  function enableScroll() {
    $('.page').css({
      'margin-top': '-' + 0 + 'px'
    });
    $('body').removeClass('body-lock');
    _window.scrollTop(lastScroll)
    scrollEnabled = true
    lastScroll = 0;
  }

  //////////////
  // animations on initial load
  /////////////
  function runAnimations(){
    if ( loadCounter === 0 ){
      setTimeout(function(){
        animatePageIn(enablePageInteractions)
      }, window.preloaderTime) // first load - reserve time for preloader
    } else {
      animatePageIn(enablePageInteractions)
    }
  }

  function animatePageIn(cb){
    var animations = $('.page').find('[data-animation]:not([js-onscroll])')
    animations.attr('data-animated', '');
    disablePageInteractions();

    if (cb !== undefined) {
      var timeout = longestAnimation(animations)
      setTimeout(cb, timeout)
    }
  }

  function animatePageOut(cb){
    var animations = $('.page').find('[data-animation]:not([js-onscroll])')
    animations.attr('data-animated-out', '')
    disablePageInteractions();

    if (cb !== undefined) {
      var timeout = longestAnimation(animations)
      setTimeout(cb, timeout)
    }
  }

  function longestAnimation(arr){
    var longest = 0
    arr.each(function(i, el){
      var $el = $(el);

      // duration either in or out
      var duration = $el.data('duration') || 300 // default
      if ( $el.data('duration-out') !== undefined ){
        duration = $el.data('duration-out')
      }

      // delay either in or out
      var delay = $el.data('delay') || 0
      if ( $el.data('animated-out') !== undefined ){
        delay = 0
      }

      var sum = duration + delay
      if ( sum > longest ){
        longest = sum
      }
    })
    return longest
  }

  function disablePageInteractions(){
    $('body').addClass('page-is-changing');
    disableScroll();
  }

  function enablePageInteractions(){
    $('body').removeClass('page-is-changing');
    enableScroll();
  }


  // hold button to go next page
  var timeout_id = 0,
      hold_time = 1000;

  _document
    .on('mousedown touchstart', '[js-hold-to-next]', function(){
      var dataHref = $(this).data('next-page');
      // start animating
      $(this).addClass('is-transitioning')
      timeout_id = setTimeout(function(){
        Barba.Pjax.goTo(dataHref);
      }, hold_time);
    }).bind('mouseup mouseleave touchend', function() {
      $('[js-hold-to-next]').removeClass('is-transitioning')
      clearTimeout(timeout_id);
    });

  // click button animation with 300s delay
  _document
    .on('click', '[js-click-to-next]', function(){
      var $btn = $(this);
      var dataHref = $btn.data('next-page');
      $btn.addClass('is-transitioning')
      setTimeout(function(){
        Barba.Pjax.goTo(dataHref);
        $btn.removeClass('is-transitioning'); // reset button state
      }, 300);
    })


  /***************
  * PARALLAX ANIMATIONS *
  ***************/
  function getFlowSections(){
    var $fixedSection = $('[js-set-section-height]');
    var $scrollSection = $('[js-set-scroll-padding]');

    if ( ($fixedSection.length > 0 && $scrollSection.length > 0) && isMoreThanMd() ){
      flowSections = {
        'fixed': $fixedSection,
        'scroll': $scrollSection,
        'fixedHeight': Math.round($fixedSection.outerHeight()),
        'windowHeight': _window.height()
      }

      flowSections.scroll.css({'margin-top': flowSections.fixedHeight})
    } else {
      flowSections = {
        'fixed': undefined,
        'scroll': undefined,
        'fixedHeight': undefined,
        'windowHeight': undefined
      }
    }
  }


  function scrollFlowSections(e){
    if ( flowSections.fixed !== undefined ){
      if ( (flowSections.fixedHeight > flowSections.windowHeight) && isMoreThanMd()){
        var fixedBottomBrekpoint = flowSections.fixedHeight - flowSections.windowHeight
        // when scrolled past end of the page - do nothing
        if ( wScroll > fixedBottomBrekpoint ){
          return
        }

        // should scroll overflowing contents first
        flowSections.fixed.css({
          'transform': 'translate3d(0,-'+wScroll+'px,0)'
        })
      } else {
        // reset to defaults
        flowSections.fixed.css({
          'transform': 'translate3d(0,-'+0+'px,0)'
        })
      }
    }
  }

  // hide fixed section to prevent end of the page visible past page end scroll
  function hideFixedSection(){
    if ( flowSections.fixed !== undefined ){
      if ( (wScroll > flowSections.fixedHeight + 100) && isMoreThanMd()){ // 100px just in case
        flowSections.fixed.css({ 'opacity': 0 })
      } else {
        resetOpacity();
      }
    }

    function resetOpacity(){
      flowSections.fixed.css({ 'opacity': 1 })
    }
  }


  //////////////////
  // CUSTOM PARALLAX
  //////////////////
  function getParallaxSections(){
    var $parallax = $('[js-parallax]');

    if ( $parallax.length > 0 ){
      var containerHeight = Math.round($parallax.outerHeight())
      var containerTop = Math.round($parallax.offset().top)
      var containerStart = containerTop - _window.height()

      parallaxElements = {
        container: $parallax,
        start: containerStart,
        end: containerStart + containerHeight
      }
    } else {
      parallaxElements = {
        container: undefined,
        start: 0,
        end: 0
      }
    }
  }

  function scrollParallax(e){
    if ( !scrollEnabled ) return

    // smooth scaleing up on scrolling past fixed section
    var $fixedBg = $('[js-parallax-fixed-bg]');

    if ( $fixedBg.length > 0 ){
      var fixedBottomBrekpoint = flowSections.fixedHeight
      // when scrolled past end of the page - do nothing
      if ( wScroll > fixedBottomBrekpoint ){
        // return
      } else {
        var normalizedScale = normalize(wScroll, fixedBottomBrekpoint, 0, 1, 1.1);
        var reverseScale = 1 + ((normalizedScale - 1.1) * -1)

        $fixedBg.css({
          'transition': 'transform .1s linear',
          'transform': 'scale('+reverseScale+')'
        })
      }
    }


    if ( parallaxElements.container !== undefined){
      if ( (wScroll > parallaxElements.start) && (wScroll < parallaxElements.end) ){
        var responsiveFactor = isMoreThanMd() ? 100 : 50
        var parallaxOffset = normalize(wScroll, parallaxElements.start, parallaxElements.end, 0, responsiveFactor);
        var reverseOffset = ((parallaxOffset - responsiveFactor) * -1)
        parallaxOpacity = (parallaxOffset * 1.3 / responsiveFactor)

        parallaxElements.container.css({
          'opacity': parallaxOpacity,
          'transform': 'translate3d(0,'+reverseOffset+'px,0)'
        })
      }
    }
  }


  //////////////
  // SCROLLMAGIC
  //////////////
  function getScrollX(){
    var $magicX = $('[js-scrollmagic-x]');

    if ( $magicX.length > 0 ){
      var $parent = $magicX.closest('[js-scrollmagic-container]');
      // TODO - test on width (container 1400 diff with _window.width() )
      var containerWidth = _window.outerWidth() * -1 // all contents minus window width
      $magicX.find('.col-6').each(function(i, col){
        containerWidth += $(col).outerWidth(true);
      })
      var startPoint = Math.round($magicX.offset().top + $magicX.outerHeight() - _window.height()) - scrollX.parentOffset
      var endPoint =  Math.round(startPoint + containerWidth)

      // console.log(startPoint, $magicX.offset().top, $magicX.outerHeight())
      scrollX = {
        container: $magicX,
        containerWidth: containerWidth,
        parent: $parent,
        startPoint: startPoint,
        endPoint: endPoint,
        containerOffset: scrollX.containerOffset,
        parentOffset: scrollX.parentOffset,
        parallaxEffect: 300,
        scrollRequest: 0,
        requestId: null
      }

      TweenLite.set(scrollX.container, {
        rotation: 0.01, force3D: true
      });

      TweenLite.set(scrollX.parent, {
        rotation: 0.01, force3D: true
      });

      // set parrent height to have the scape for scrolling the page
      // required to have calc on childs as repeating resize will trigger bigger values
      var sectionsHeights = 0
      $parent.children().each(function(i, section){
        sectionsHeights += $(section).outerHeight()
      })

      // create space for native scrolling
      $parent.closest('.page').css({
        'height': sectionsHeights + containerWidth - scrollX.parallaxEffect
      })

    } else {
      scrollX = {
        container: undefined,
        containerWidth: undefined,
        parent: undefined,
        startPoint: undefined,
        endPoint: undefined,
        containerOffset: 0,
        parentOffset: 0,
        parallaxEffect: 300,
        scrollRequest: 0,
        requestId: null
      }

    }
  }

  // scroller function
  function scrollScrollX(){
    if ( scrollX.container !== undefined ){
      scrollX.scrollRequest++;
      if (!scrollX.requestId) {
        scrollX.requestId = requestAnimationFrame(transformScrollX);
      }
    }
  }

  function transformScrollX(){
    if ( scrollX.container === undefined ) return
    var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0
    // var scrollY = wScroll

    if ( scrollY > scrollX.startPoint ){

      // when scrolled past end of the container
      if ( scrollY > scrollX.endPoint ){
        scrollX.scrollRequest = 0;
        // return
      } else {
        var containerOffset = scrollY - scrollX.startPoint
        var normalizedParallaxOffset = normalize(scrollY, scrollX.startPoint, scrollX.endPoint, 0, scrollX.parallaxEffect)
        var parentOffset = containerOffset - normalizedParallaxOffset // parallax effect

        // store globally to adjust resizes
        scrollX.containerOffset = containerOffset
        scrollX.parentOffset = parentOffset

        TweenLite.set(scrollX.container, {
          x: -containerOffset
        });

        TweenLite.set(scrollX.parent, {
          y: parentOffset
        });

        // scrollX.container.css({
        //   'transform': 'translate3d(-'+moveOffset+'px,0,0)'
        // })
        // scrollX.parent.css({
        //   'transform': 'translate3d(0, '+moveOffset+'px,0)'
        // })
      }

    } else {
      // reset to defaults
      scrollX.container.css({'transform': 'translate3d(0,0,0)'})
      scrollX.parent.css({'transform': 'translate3d(0,0,0)'})

      scrollX.scrollRequest = 0;
      // scrollX.requestId = null
    }

    scrollX.requestId = scrollX.scrollRequest > 0 ? requestAnimationFrame(transformScrollX) : null;

  }

  ////////////
  // TOOLTIP POSITIONS
  ////////////
  function setTooltipPositions(){
    var $tooltips = $('[js-tooltip-position]');

    if ( $tooltips.length > 0 ){
      $tooltips.each(function(i, tooltip){
        var $tooltip = $(tooltip);

        var $container = $tooltip.closest('div');
        var containerLeft = $container.offset().left
        var tooltipLeft = $tooltip.offset().left
        var calcLeftBox = containerLeft - tooltipLeft // align elements to the left of container
        var calcLeftArrow = $tooltip.position().left + ($(tooltip).width() / 2) - 5

        $tooltip.find('.tooltip__box').css({
          'left': calcLeftBox
        })
        $tooltip.find('.tooltip__arrow').css({
          'left': calcLeftArrow
        })
      })
    }
  }

  /**********
  * PLUGINS *
  **********/


  ////////////
  // SCROLLBAR
  ////////////
  function initPerfectScrollbar(){
    if ( $('[js-scrollbar]').length > 0 ){
      $('[js-scrollbar]').each(function(i, scrollbar){
        var ps;

        function initPS(){
          ps = new PerfectScrollbar(scrollbar, {
            // wheelSpeed: 2,
            wheelPropagation: false,
            minScrollbarLength: 20
          });
        }

        initPS();

        // toggle init destroy
        function checkMedia(){
          if ( $(scrollbar).data('disable-on') ){

            if ( mediaCondition($(scrollbar).data('disable-on')) ){
              if ( $(scrollbar).is('.ps') ){
                ps.destroy();
                ps = null;
              }
            } else {
              if ( $(scrollbar).not('.ps') ){
                initPS();
              }
            }
          }
        }

        checkMedia();
        _window.on('resize', debounce(checkMedia, 250));

      })
    }
  }

  ////////////
  // TELEPORT PLUGIN
  ////////////
  function initTeleport(){
    $('[js-teleport]').each(function (i, val) {
      var self = $(val)
      var objHtml = $(val).html();
      var target = $('[data-teleport-target=' + $(val).data('teleport-to') + ']');
      var conditionMedia = $(val).data('teleport-condition').substring(1);
      var conditionPosition = $(val).data('teleport-condition').substring(0, 1);

      if (target && objHtml && conditionPosition) {

        function teleport() {
          var condition;

          if (conditionPosition === "<") {
            condition = _window.width() < conditionMedia;
          } else if (conditionPosition === ">") {
            condition = _window.width() > conditionMedia;
          }

          if (condition) {
            target.html(objHtml)
            self.html('')
          } else {
            self.html(objHtml)
            target.html("")
          }
        }

        teleport();
        _window.on('resize', debounce(teleport, 100));

      }
    })
  }



  ////////////
  // DRAGGABLE
  ////////////

  // initialization function
  function initPullSwitch(){

    var isToggled = false;
    var initialMousePosition, containerRect, dragRect, dragThreshold

    var toggleClass = 'is-on';
    var containers = document.querySelectorAll('[js-draggable]');

    if (containers.length === 0) {
      return false;
    }

    var draggable = new Draggable.Draggable(containers, {
      draggable: '.pillswitch__control',
      delay: 0
    });

    // --- Draggable events --- //
    draggable.on('drag:start', function (evt) {
      initialMousePosition = {
        x: evt.sensorEvent.clientX,
        y: evt.sensorEvent.clientY
      };
    });

    draggable.on('mirror:created', function (evt) {
      containerRect = evt.sourceContainer.getBoundingClientRect();
      dragRect = evt.source.getBoundingClientRect();

      var containerRectQuarter = containerRect.width / 2; // should move at least half of the way
      dragThreshold = isToggled ? containerRectQuarter * -1 : containerRectQuarter;
    });

    draggable.on('mirror:move', function (evt) {
      evt.cancel();

      // offset is an move diff
      var offsetX = calcOffset(evt.sensorEvent.clientX - initialMousePosition.x);
      var offsetY = calcOffset(initialMousePosition.y - evt.sensorEvent.clientY);
      // var offsetValue = offsetX > offsetY ? offsetX : offsetY;
      var offsetValue = offsetX
      var mirrorCoords = {
        top: dragRect.top - offsetValue,
        left: dragRect.left + offsetValue
      };

      translateMirrorX(evt.mirror, mirrorCoords, containerRect);

      if (isToggled && offsetValue < dragThreshold) {
        evt.sourceContainer.classList.remove(toggleClass);
        isToggled = false;
      } else if (!isToggled && offsetValue > dragThreshold) {
        evt.sourceContainer.classList.add(toggleClass);
        isToggled = true;
      }
    });

    draggable.on('drag:stop', function (evt) {
      if ( isToggled ){
        $('[js-draggable-control]').addClass('start-transition-next-page');
        var dataHref = $(evt.sourceContainer).data('next-page');
        setTimeout(function(){
          Barba.Pjax.goTo(dataHref);
          // start fade
        }, 1000)
      }
    });
  }

  /////////////
  // HEADER ANIMATIONS (transfered)
  ////////////
  function initHeaderAnimations(){
    setTimeout(function () {
      $('.block-eye').addClass('eye-anim');
    }, 250);
    setTimeout(function () {
      var showDiv = function () {
        $('.eye_close').removeClass('eye_open');
      };
      var timeOut = setTimeout(showDiv, 3000);

      $('body').mousemove(function () {
        clearTimeout(timeOut);
        $('.eye_close').removeClass('eye_open');
        timeOut = setTimeout(showDiv, 3000);
      });

      function showHidenBlock() {
        this.timeout = null;
        this.showBlock = function () {
          $('.block-eye').addClass('eye-anim');
        };
        this.resetTimeout = function () {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(this.showBlock, 3000);
        }
      }
      var showHidenBlock = new showHidenBlock();
      $(window).on({
        mousemove: function () {
          showHidenBlock.resetTimeout();
          $('.block-eye').removeClass('eye-anim');
        }
      });
      $('document').on({
        click: function () {
          showHidenBlock.resetTimeout();
          $('.block-eye').removeClass('eye-anim');
        }
      });
      $('body').removeClass('loaded');
    }, 500);


    /* viewport width */
    $(function () {
      var height_header = $('header').height();
      _window.on('scroll', function () {
        if ($(window).scrollTop() > height_header) {
          $('.header-fixed').addClass("fixed");
        } else {
          $('.header-fixed').removeClass("fixed")
        }
      });

      if ($('.header-fixed').length) {
        $(function () {
          var mouseX2 = 7,
            mouseY2 = 5,
            limitX2 = 11,
            limitY2 = 11;
          $(window).mousemove(function (e) {
            var offset2 = $('.header-fixed .main-logo .eye_1 .eye').offset();
            mouseX2 = Math.min(e.pageX - offset2.left, limitX2);
            mouseY2 = Math.min(e.pageY - offset2.top, limitY2);
            if (mouseX2 < 0) mouseX2 = 0;
            if (mouseY2 < 0) mouseY2 = 0;
          });
          var follower2 = $(".header-fixed .eye_1 .eye");
          var xp2 = 5,
            yp2 = 0;
          var loop2 = setInterval(function () {
            xp2 += (mouseX2 - xp2) / 10;
            yp2 += (mouseY2 - yp2) / 10;
            follower2.css({
              left: xp2,
              top: yp2
            });
          }, 1);

        });
        $(function () {
          var mouseX2 = 6,
            mouseY2 = 5,
            limitX2 = 11,
            limitY2 = 11;
          $(window).mousemove(function (e) {
            var offset2 = $('.header-fixed .main-logo .eye_2 .eye').offset();
            mouseX2 = Math.min(e.pageX - offset2.left, limitX2);
            mouseY2 = Math.min(e.pageY - offset2.top, limitY2);
            if (mouseX2 < 0) mouseX2 = 0;
            if (mouseY2 < 0) mouseY2 = 0;
          });
          var follower2 = $(".header-fixed .eye_2 .eye");
          var xp2 = 5,
            yp2 = 0;
          var loop2 = setInterval(function () {
            xp2 += (mouseX2 - xp2) / 10;
            yp2 += (mouseY2 - yp2) / 10;
            follower2.css({
              left: xp2,
              top: yp2
            });
          }, 1);
        });
      };

    });
  }

  // header click handlers

  function initHeaderClicks(){

    $('input, textarea').each(function () {
      var placeholder = $(this).attr('placeholder');
      $(this).focus(function () {
        $(this).attr('placeholder', '');
      });
      $(this).focusout(function () {
        $(this).attr('placeholder', placeholder);
      });
    });
    $('a.button-nav').click(function () {
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
      };
      $('.header-fixed').addClass("fixed-nav");
      $('.box-search').fadeOut();
      $('.mask-search').fadeOut();
      $('html').removeClass("fixed_search");
      return false;
    });
    $('.header-button__link-nav > span.button-nav').click(function () {
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
    $('.header-button__link-nav').click(function () {
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
    $('a.close-subnav, span.close-subnav, .mask-subnav').click(function () {
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
      // var headerScroll = $('.content').offset().top;
      // if ($(window).scrollTop() > headerScroll) {
      if ($(window).scrollTop() > wScroll) {
        $('html').removeClass("fixed_search");
      } else {
        $('html').addClass('fixed_search');
      };
      return false;
    });

    // $('.js-anchor').click(function () {
    //   var target = $(this).attr('href');
    //   $('html, body').animate({
    //     scrollTop: $(target).offset().top - 50
    //   }, 1000);
    //   $('.close-subnav').click();
    //   return false;
    // });

    $('.header-fixed .js-search').click(function () {
      $('.header-fixed').addClass('fixed-nav');
    });
    $('.js-search').click(function () {
      $('.box-search').fadeToggle();
      $('.mask-search').fadeToggle();
      if ($(document).height() > $(window).height()) {
        var scrollTop = $(window).scrollTop();
        $('html').toggleClass('opened-nav');
        $('.main-wrapper').css({
          'top': -scrollTop
        });
      };
      $('a.button-nav').removeClass('active');
      $('a.header-button__link-nav > span.button-nav').removeClass('active');
      $('.close-subnav').fadeOut(0);
      $('.box-subnav').removeClass('open');
      $('.mask-subnav').fadeOut();
      // var headerScroll = $('.content').offset().top;
      // if ($(window).scrollTop() > headerScroll) {
      if ($(window).scrollTop() > wScroll) {
        $('html').removeClass("fixed_search");
      } else {
        $('html').addClass('fixed_search');
      };
      return false;
    });
    $('.js-close-search, .mask-search').click(function () {
      $('.box-search').fadeOut();
      $('.mask-search').fadeOut();
      var scrollTop = parseInt($('.main-wrapper').css('top'));
      $('.main-wrapper').css({
        'top': 0
      });
      $('html').removeClass('opened-nav');
      $('html,body').scrollTop(-scrollTop);
      $('.header-fixed').removeClass('fixed-nav');
      // var headerScroll = $('.content').offset().top;
      // if ($(window).scrollTop() > headerScroll) {
      if ($(window).scrollTop() > wScroll) {
        $('html').removeClass("fixed_search");
      } else {
        $('html').addClass('fixed_search');
      };
      return false;
    });

  }

  ////////////
  // SCROLLMONITOR
  ////////////
  function initScrollMonitor(){
    // those sections are animated onscroll after first screen is loaded
    // but on mobile - wait till animation is compleated

    // router
    if ( isMoreThanMd() ){
      initListeners();
    } else {
      var animations = $('.page').find('[data-animation]:not([js-onscroll])')
      var timeout = longestAnimation(animations)
      setTimeout(initListeners, timeout)
    }

    // function with listener
    function initListeners(){
      $('[js-onscroll]').each(function(i, el){
        var $el = $(el);
        var elWatcher = scrollMonitor.create($el);

        elWatcher.enterViewport(throttle(function() {
          $el.attr('data-animated', '');
        }, 100, {
          'leading': true
        }));
      });
    }

  }

  //////////
  // BARBA PJAX
  //////////
  Barba.Pjax.Dom.containerClass = "page";

  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      var deferred = Barba.Utils.deferred();

      // to be controled with css animations
      animatePageOut(function(){
        enablePageInteractions();
        deferred.resolve();
      });

      return deferred.promise
    },

    fadeIn: function() {
      var _this = this;
      var $el = $(this.newContainer);

      $(this.oldContainer).hide();

      _window.scrollTop(0);
      _this.done();

    }
  });

  // set barba transition
  Barba.Pjax.getTransition = function() {
    return FadeTransition;
  };

  Barba.Prefetch.init();
  Barba.Pjax.start();

  // The new container has been loaded and injected in the wrapper.
  Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container, newPageRawHTML) {
    pageReady(true);
  });

  // The transition has just finished and the old Container has been removed from the DOM.
  Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus) {
    loadCounter++
    pageCompleated(true);
  });

  //////////
  // DEVELOPMENT HELPER
  //////////
  function setBreakpoint(){
    var wHost = window.location.host.toLowerCase()
    var displayCondition = wHost.indexOf("localhost") >= 0 || wHost.indexOf("surge") >= 0
    if (displayCondition){
      var wWidth = _window.width();
      var wHeight = _window.height();

      var content = "<div class='dev-bp-debug'>"+wWidth+" x "+ wHeight +"</div>";

      $('.page').append(content);
      setTimeout(function(){
        $('.dev-bp-debug').fadeOut();
      },1000);
      setTimeout(function(){
        $('.dev-bp-debug').remove();
      },1500)
    }
  }

});


// HELPERS and PROTOTYPE FUNCTIONS

// draggable helper functions
function translateMirrorX(mirror, mirrorCoords, containerRect) {
  // if (mirrorCoords.top < containerRect.top || mirrorCoords.left < containerRect.left) {
  //   return;
  // }
  if (mirrorCoords.left < containerRect.left || mirrorCoords.left > containerRect.left + 170 - 40) {
    return;
  }

  requestAnimationFrame(function () {
    // for the Y - only containerRect is used as it's single directional
    mirror.style.transform = "translate3d(" + mirrorCoords.left + "px, " + containerRect.top + "px, 0)";
  });
}

function calcOffset(offset) {
  // console.log('offset', offset, offset * 2 * 0.5)
  // what this func is doing multuipliing by one?
  return offset * 2 * 0.5;
}

// LINEAR NORMALIZATION
function normalize(value, fromMin, fromMax, toMin, toMax) {
  var pct = (value - fromMin) / (fromMax - fromMin);
  var normalized = pct * (toMax - toMin) + toMin;

  //Cap output to min/max
  if (normalized > toMax) return toMax;
  if (normalized < toMin) return toMin;
  return normalized;
}
