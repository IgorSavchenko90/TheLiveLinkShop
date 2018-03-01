(function() {

  'use strict';

  var tabs = function(options) {

    var activeIndex = 0;
    var initCalled = false;
    var width = 225;
    var count = 1;
    var position = 0;// текущий сдвиг влево
    var el = document.querySelector(options.el);
    var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
    var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
    var carousel = el.querySelector(options.carousel);
    var prevBtn = el.querySelector(options.arrowLeft);
    var nextBtn = el.querySelector(options.arrowRight);
    var currentList = tabContentContainers[activeIndex];
    var listElems = currentList.querySelectorAll('.special-offers__item');
    var toggleBtn = el.querySelector(options.toggleBtn);
    
    var init = function() {
      if (!initCalled) {
        initCalled = true;
        
        for (var i = 0; i < tabNavigationLinks.length; i++) {
          var link = tabNavigationLinks[i];
          handleClick(link, i);
        }
        prevBtnClick();
        nextBtnClick();
        toggleBtnClick();
      }
    };

    var handleClick = function(link, index) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        goToTab(index);
      }) 
    };

    var goToTab = function(index) {
      if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
        tabNavigationLinks[activeIndex].classList.remove('toggle__item--active');
        tabNavigationLinks[index].classList.add('toggle__item--active');
        tabContentContainers[activeIndex].classList.remove('open');
        tabContentContainers[index].classList.add('open');
        activeIndex = index;
        position = 0;        
      }
    };

    var toggleBtnClick = function () {
      toggleBtn.addEventListener('click', function (e) {
        e.preventDefault();
        toggleTab();      
      });
    };

    var toggleTab = function () {
      var nextIndex;
      if (activeIndex === tabNavigationLinks.length - 1) {
        nextIndex = 0;
      } else {
        nextIndex = activeIndex + 1;
      };
        tabNavigationLinks[activeIndex].classList.remove('toggle__item--active');
        tabNavigationLinks[nextIndex].classList.add('toggle__item--active');
        tabContentContainers[activeIndex].classList.remove('open');
        tabContentContainers[nextIndex].classList.add('open');
        activeIndex = nextIndex;
        position = 0;
    }


    var prevBtnClick = function () {
      prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        currentListChoice();
        mooveLeft();
        });
    };

    var nextBtnClick = function () {
      nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        currentListChoice();
        mooveRight();
        });
    };

    var currentListChoice = function () {
      for (var i = 0; i < tabContentContainers.length; i++) {
        if (tabContentContainers[i].classList.contains('open')) {
          currentList = tabContentContainers[i];
          listElems = currentList.querySelectorAll('.special-offers__item');      
        }
      }
    };

    var mooveLeft = function () {
      position = Math.min(position + width * count, 0)
        currentList.style.marginLeft = position + 'px';
    };

    var  mooveRight = function () {
      var maxPosition = listElems.length * width / 2;
      if (position > maxPosition * (-1)) {
        position = Math.max(position - width * count, -width * (listElems.length - count));
        currentList.style.marginLeft = position + 'px';
      };
    };

    return {
      init: init,
      goToTab: goToTab
    };

  };

  window.tabs = tabs;

  var myTabs = tabs({
      el: '.special-offers',
      tabNavigationLinks: '.toggle__item',
      tabContentContainers: '.special-offers__slide',
      carousel: '.special-offers__slider',
      arrowLeft: '.arrow-left',
      arrowRight: '.arrow-right',
      toggleBtn: '.toggle__button'
    });

    myTabs.init();

})();