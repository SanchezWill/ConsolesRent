$(document).ready(function () {
	$('.slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,

		responsive: [
			{
				breakpoint: 880,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.menu__btn').on('click', function () {
		$('.menu').toggleClass('menu--active');
	});
});