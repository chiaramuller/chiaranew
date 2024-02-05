//Intro Background Image
$('.slider-container').slick({
	dots: false,
	infinite: true,
	arrows: false,
	fade: true,
	autoplay: true, 
	autoplaySpeed: 500
});


//Typed JS
var typed = new Typed('#typed', {

	stringsElement: '#typed-strings',
	typeSpeed: 20,
	backSpeed: 5,
	loop: true,
	loopCount: Infinity,
	showCursor: true,
});

//Typed JS
var typed = new Typed('#typed-2', {
	stringsElement: '#typed-strings-2',
	typeSpeed: 100,
	backSpeed: 5,
	loop: true,
	backDelay: 10000,
	showCursor: false
});


//Animate on scroll;
AOS.init();