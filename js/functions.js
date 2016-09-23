$(function() {

	//Window Shuffles
	var marquee = $('.marquee').outerHeight();
		if ($(this).scrollTop() > marquee ) {
			$('.marquee, .header-wrap').addClass('scrollup');
		} else {
			$('.marquee, .header-wrap').removeClass('scrollup');
		}
	$(window).scroll(function() {
		if ($(this).scrollTop() > marquee ) {
			$('.marquee, .header-wrap').addClass('scrollup');
		} else {
			$('.marquee, .header-wrap').removeClass('scrollup');
		}
	});
	$('a').smoothScroll();
});