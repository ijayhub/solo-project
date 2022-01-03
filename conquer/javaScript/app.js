const hamburgerBtn = document.querySelector('.toggle-btn');
// const overLay=document.querySelector('.overlay');
const mobileHeader = document.querySelector('.mobile-header');

hamburgerBtn.addEventListener('click', function () {
	hamburgerBtn.classList.toggle('open');
	// overLay.classList.toggle('open')
	mobileHeader.classList.toggle('open');
});
