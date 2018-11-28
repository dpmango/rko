// TODO - move to index as "critical style"

// var preloaderTime = 7000
var preloaderTime = 500

// preloader function
var preloader = document.querySelector('.preloader')
preloader.classList.add('start-anim')
setTimeout(function(){
  // + page ready trigger ?
  preloader.classList.add('end-anim')
}, 5500)

setTimeout(function(){
  // + page ready trigger ?
  preloader.parentNode.removeChild(preloader);
}, preloaderTime)


$(document).ready(function(){

  //////////
  // Global variables
  //////////

  var _window = $(window);
  var _document = $(document);
  var lastScroll = 0;
  var loadCounter = 0;

  ////////////
  // LIST OF FUNCTIONS
  ////////////

  // some functions should be called once only
  legacySupport();
  initHeaderScroll();

  // triggered when PJAX DONE
  // The new container has been loaded and injected in the wrapper.
  function pageReady(fromPjax){
    updateHeaderActiveClass();
    closeMobileMenu();

    initPerfectScrollbar();
    initTeleport();
    initLazyLoad();

    initScrollMonitor();
  }

  // The transition has just finished and the old Container has been removed from the DOM.
  function pageCompleated(fromPjax){
    runAnimations();
  }

  // scroll/resize listener
  // _window.on('resize', throttle(revealFooter, 100));
  _window.on('resize', debounce(setBreakpoint, 200))


  // this is a master function which should have all functionality
  pageReady();
  pageCompleated();

  // some plugins work best with onload triggers
  _window.on('load', function(){
    // your functions
  })


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
    .on('click', '[js-link]', function(e){
      var dataHref = $(this).data('href');
      if (dataHref && dataHref !== "#"){
        e.preventDefault();
        e.stopPropagation();
        Barba.Pjax.goTo(dataHref);
      }
    })
    .on('click', 'a[href^="#section"]', function() { // section scroll
      var el = $(this).attr('href');
      $('body, html').animate({
          scrollTop: $(el).offset().top}, 1000);
      return false;
    })


  // HEADER SCROLL
  // add .header-static for .page or body
  // to disable sticky header
  function initHeaderScroll(){
    _window.on('scroll', throttle(function(e) {
      var vScroll = _window.scrollTop();
      var header = $('.header').not('.header--static');
      var headerHeight = header.height();
      var firstSection = _document.find('.page__content div:first-child()').height() - headerHeight;
      var visibleWhen = Math.round(_document.height() / _window.height()) >  2.5

      if (visibleWhen){
        if ( vScroll > headerHeight ){
          header.addClass('is-fixed');
        } else {
          header.removeClass('is-fixed');
        }
        if ( vScroll > firstSection ){
          header.addClass('is-fixed-visible');
        } else {
          header.removeClass('is-fixed-visible');
        }
      }
    }, 10));
  }

  ////////////////////
  // HAMBURGER TOGGLER
  ////////////////////
  // disable / enable scroll by setting negative margin to page-content eq. to prev. scroll
  // this methods helps to prevent page-jumping on setting body height to 100%
  function disableScroll() {
    lastScroll = _window.scrollTop();
    $('.page__content').css({
      'margin-top': '-' + lastScroll + 'px'
    });
    $('body').addClass('body-lock');
    $('.footer').addClass('is-hidden'); // if you use revealFooter()
  }

  function enableScroll() {
    $('.page__content').css({
      'margin-top': '-' + 0 + 'px'
    });
    $('body').removeClass('body-lock');
    $('.footer').removeClass('is-hidden'); // if you use revealFooter()
    _window.scrollTop(lastScroll)
    lastScroll = 0;
  }

  function blockScroll() {
    if ($('[js-hamburger]').is('.is-active')) {
      disableScroll();
    } else {
      enableScroll();
    }
  };

  _document.on('click', '[js-hamburger]', function(){
    $(this).toggleClass('is-active');
    $('.mobile-navi').toggleClass('is-active');

    blockScroll();
  });

  function closeMobileMenu(){
    $('[js-hamburger]').removeClass('is-active');
    $('.mobile-navi').removeClass('is-active');

    blockScroll();
  }

  // SET ACTIVE CLASS IN HEADER
  // * could be removed in production and server side rendering when header is inside barba-container
  function updateHeaderActiveClass(){
    $('.header__menu li').each(function(i,val){
      if ( $(val).find('a').attr('href') == window.location.pathname.split('/').pop() ){
        $(val).addClass('is-active');
      } else {
        $(val).removeClass('is-active')
      }
    });
  }



  /***************
  * PAGE SPECIFIC *
  ***************/

  function runAnimations(){
    if ( loadCounter === 0 ){
      setTimeout(animateHome, preloaderTime) // first load - reserve time for preloader
    } else {
      setTimeout(animateHome, 500)
    }

  }

  function animateHome(){
    $('.home').find('[data-animation]').attr('data-animated', '')
  }

  _document
    .on('click', '[js-inner-page-btn]', function(){

    })


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
            // wheelPropagation: true,
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
  // UI
  ////////////


  ////////////
  // SCROLLMONITOR - WOW LIKE
  ////////////
  function initScrollMonitor(){
    $('.wow').each(function(i, el){

      var elWatcher = scrollMonitor.create( $(el) );

      var delay;
      if ( $(window).width() < 768 ){
        delay = 0
      } else {
        delay = $(el).data('animation-delay');
      }

      var animationClass = $(el).data('animation-class') || "wowFadeUp"

      var animationName = $(el).data('animation-name') || "wowFade"

      elWatcher.enterViewport(throttle(function() {
        $(el).addClass(animationClass);
        $(el).css({
          'animation-name': animationName,
          'animation-delay': delay,
          'visibility': 'visible'
        });
      }, 100, {
        'leading': true
      }));
      // elWatcher.exitViewport(throttle(function() {
      //   $(el).removeClass(animationClass);
      //   $(el).css({
      //     'animation-name': 'none',
      //     'animation-delay': 0,
      //     'visibility': 'hidden'
      //   });
      // }, 100));
    });

  }

  //////////
  // BARBA PJAX
  //////////
  var easingSwing = [.02, .01, .47, 1]; // default jQuery easing for anime.js

  Barba.Pjax.Dom.containerClass = "page";

  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      var deferred = Barba.Utils.deferred();

      anime({
        targets: this.oldContainer,
        opacity : .5,
        easing: easingSwing, // swing
        duration: 300,
        complete: function(anim){
          deferred.resolve();
        }
      })

      return deferred.promise
    },

    fadeIn: function() {
      var _this = this;
      var $el = $(this.newContainer);

      $(this.oldContainer).hide();

      $el.css({
        visibility : 'visible',
        opacity : .5
      });

      anime({
        targets: "html, body",
        scrollTop: 1,
        easing: easingSwing, // swing
        duration: 150
      });

      anime({
        targets: this.newContainer,
        opacity: 1,
        easing: easingSwing, // swing
        duration: 300,
        complete: function(anim) {
          triggerBody()
          _this.done();
        }
      });
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

  loadCounter

  // some plugins get bindings onNewPage only that way
  function triggerBody(){
    _window.scrollTop(0);
    $(window).scroll();
    $(window).resize();
  }

  //////////
  // DEVELOPMENT HELPER
  //////////
  function setBreakpoint(){
    var wHost = window.location.host.toLowerCase()
    var displayCondition = wHost.indexOf("localhost") >= 0 || wHost.indexOf("surge") >= 0
    if (displayCondition){
      var wWidth = _window.width();

      var content = "<div class='dev-bp-debug'>"+wWidth+"</div>";

      $('.page').append(content);
      setTimeout(function(){
        $('.dev-bp-debug').fadeOut();
      },1000);
      setTimeout(function(){
        $('.dev-bp-debug').remove();
      },1500)
    }
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
  }

  initPullSwitch();

});


// HELPERS and PROTOTYPE FUNCTIONS

// draggable helper functions
function translateMirrorX(mirror, mirrorCoords, containerRect) {
  // if (mirrorCoords.top < containerRect.top || mirrorCoords.left < containerRect.left) {
  //   return;
  // }
  if (mirrorCoords.left < containerRect.left || mirrorCoords.left > (containerRect.left + 170 - 40)) {
    return;
  }

  requestAnimationFrame(function() {
    // for the Y - only containerRect is used as it's single directional
    mirror.style.transform = `translate3d(${mirrorCoords.left}px, ${containerRect.top}px, 0)`;
  });
}

function calcOffset(offset) {
  // console.log('offset', offset, offset * 2 * 0.5)
  // what this func is doing multuipliing by one?
  return offset * 2 * 0.5;
}
