const hamburgerBtn = document.querySelector('.toggle-btn');
const mobileHeader = document.querySelector('.mobile-header');

hamburgerBtn.addEventListener('click', function () {
	hamburgerBtn.classList.toggle('open');
	mobileHeader.classList.toggle('open');
});
// const scroll = new SmoothScroll('.nav-wrapper[href*="#"]', {
// 	speed: 300,
// });
