'use strict';

(function () {

	var dropMenu = document.querySelectorAll('.drop-menu'),
		menuSelect = document.querySelector('.menu-select'),
		menuToggle = document.querySelector('.menu-list__button');

	var toggleDropMenu = function () {
		dropMenu[menuSelect.value].classList.toggle('drop-menu--show');
	};

	var closeDropMenu = function () {
		if (dropMenu[menuSelect.value].classList.contains('drop-menu--show')) {
			dropMenu[menuSelect.value].classList.remove('drop-menu--show');
		}
	};

	menuToggle.addEventListener('click', function(evt) {
		evt.preventDefault();
		toggleDropMenu();
	});

	window.onresize = function () {
		if (document.documentElement.clientWidth > 999) {
			closeDropMenu();
		}
	};

})();