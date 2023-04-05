// const swiper = new Swiper(".swiper", {
// 	// Optional parameters
// 	// direction: 'vertical',


const swiper = new Swiper(".swiper", {

	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
	},

	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},



	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},


	// breakpoints: {
	// 	0: { slidesPerView: 1 },
	// 	768: { slidesPerView: 2, spaceBetween: 20 },
	// },


});
