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
    // initTeleport();
    // initLazyLoad();
    initPullSwitch();
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

    if ( $fixedSection.length > 0 && $scrollSection.length > 0 ){
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
      if ( flowSections.fixedHeight > flowSections.windowHeight ){
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
        var parallaxOffset = normalize(wScroll, parallaxElements.start, parallaxElements.end, 0, 100);
        var reverseOffset = ((parallaxOffset - 100) * -1)
        parallaxOpacity = (parallaxOffset * 1.3 / 100)

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

  //////////
  // LAZY LOAD
  //////////
  function initLazyLoad(){
    _document.find('[js-lazy]').Lazy({
      threshold: 500,
      enableThrottle: true,
      throttle: 100,
      scrollDirection: 'vertical',
      effect: 'fadeIn',
      effectTime: 350,
      // visibleOnly: true,
      // placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7...",
      onError: function(element) {
          console.log('error loading ' + element.data('src'));
      },
      beforeLoad: function(element){
        // element.attr('style', '')
      }
    });
  }

  // wait till image is loaded
  // could be useful for barba custom animations
  // var targetImage = $newContainer.find('.one-member__photo').find('[js-lazy]');
  // var targetImageLazyInstance = targetImage.Lazy({
  //   chainable: false,
  //   afterLoad: function(element) {
  //     var img = new Image();
  //     img.onload = function() {
  //       callbackFunction();
  //     };
  //     img.src = element.attr('src');
  //   }
  // })
  // targetImageLazyInstance.force(targetImage);



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


  ////////////
  // SCROLLMONITOR - WOW LIKE
  ////////////
  function initScrollMonitor(){
    $('[js-onscroll]').each(function(i, el){
      var $el = $(el);
      var elWatcher = scrollMonitor.create($el);

      var delay;
      if ( $(window).width() < 768 ){
        delay = 0
      } else {
        delay = $el.data('animation-delay');
      }

      elWatcher.enterViewport(throttle(function() {
        $el.attr('data-animated', '');
      }, 100, {
        'leading': true
      }));
    });

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
