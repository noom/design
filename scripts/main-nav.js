// Document ready function 
$(document).ready(function() {

	$(".dropdown-head").click(function() {

		$(this).closest('.in-page-nav-test .holder .dropdown-head').toggleClass('toggle');
		$(this).next('.dropdown').slideToggle(400);

	});


	$(".mobile-nav").click(function() {
		$('.holder').slideToggle(400);
	});

	$(".dropdown li a").click(function(){
		$('.mobile-nav').click();
		//$(this).closest('.dropdown-head').click();
	});

});