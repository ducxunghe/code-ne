// hambuger
$(document).ready(function () {
	$('.toggle').click(function () {
		if (!$(this).hasClass('open')) {
			$(this).addClass('open');
		} else {
			$(this).removeClass('open');
		}
	});
});

// Close mobile menu when click outsidde it
$(document).on('click', function (e) {
	if ($(e.target).closest('#navbarText').length == 0 && $('#navbarText').hasClass('show') && $(e.target).closest('.toggle').length == 0) {
		$('#navbarText').toggleClass('show');
		$('.toggle').removeClass('open');
	}

	// Remove class open when click on nav link
	if ($(e.target).closest('.nav-link').length !== 0 && $('.toggle').hasClass('open')) {
		$('.toggle').removeClass('open');
	}
});

let nav = document.querySelector('.navigation-wrap');
window.addEventListener('scroll', function () {
	if (window.pageYOffset > 100) {
		nav.classList.add('shadow');
	} else {
		nav.classList.remove('shadow');
	}
});

// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
	a.addEventListener('click', function () {
		navCollapse.classList.remove('show');
	});
});

// =======================================
// TABS
// =======================================
const tabLinks = document.querySelectorAll('.tab__links');
const tabContent = document.querySelectorAll('.tab__content');

tabLinks.forEach(function (el) {
	el.addEventListener('click', openTabs);
});

function openTabs(el) {
	const btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
	const tab = btn.dataset.tab; // lấy giá trị trong data-tab

	tabContent.forEach(function (el) {
		el.classList.remove('active');
	});

	tabLinks.forEach(function (el) {
		el.classList.remove('active');
	});

	document.querySelector('#' + tab).classList.add('active');

	btn.classList.add('active');
}
