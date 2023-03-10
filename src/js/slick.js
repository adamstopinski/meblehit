$('.offert__center').slick({
	lazyLoad: 'ondemand',
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 4,
	arrows: true,
	prevArrow: '<button class="slick-slider slick-prev" aria-label="Przycisk przesuwający ofertę w lewo"></button>',
	nextArrow: '<button class="slick-slider slick-next" aria-label="Przycisk przesuwający ofertę w prawo"></button>',
	responsive: [
		{
			breakpoint: 1000,
			settings: {
				arrows: true,
				centerMode: true,
				slidesToShow: 3,
				mobileFirst: true,
			},
		},
		{
			breakpoint: 800,
			settings: {
				arrows: true,
				centerMode: true,
				slidesToShow: 2,
				mobileFirst: true,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: false,
				slidesToShow: 2,
				mobileFirst: true,
				dots: true,
			},
		},
		{
			breakpoint: 360,
			settings: {
				speed: 500,
				fade: true,
				arrows: false,
				centerMode: false,
				centerPadding: '40px',
				slidesToShow: 1,
				mobileFirst: true,
				dots: true,
			},
		},
	],
})
