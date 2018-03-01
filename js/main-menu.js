'use strict';

(function () {

	var dropMenu = document.querySelectorAll('.drop-menu'),
		menuSelect = document.querySelector('.menu-select'),
		menuToggle = document.querySelector('.menu-list__button');

	var toggleDropMenu = function () {
		dropMenu[menuSelect.value].classList.toggle('drop-menu--show');
	};

	menuToggle.addEventListener('click', function(evt) {
		evt.preventDefault();
		toggleDropMenu();
	});

})();