// Document ready function 
$(document).ready(function() {

	$(".dropdown-head").click(function() {

		$(this).closest('.in-page-nav-test .holder .dropdown-head').toggleClass('toggle');
		$(this).next('.dropdown').slideToggle(400);

	});

	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 300);
					return false;
				}
			}
		});
	});


	$(".mobile-nav").click(function() {
		$('.holder').slideToggle(400);
		$(".dropdown li a").click(function(){
			$('.mobile-nav').click();
			$(this).closest('.dropdown-head').click();
		});
	});



});