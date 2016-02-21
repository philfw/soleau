
$('.next').on('click', function (){
	$('html, body').animate({
		scrollTop: $( $( this ).attr('href') ).offset().top
	}, 500);
});

 $('.back').on('click', function (){
	$('html, body').animate({
		scrollTop: $( $( this ).attr('href') ).offset().bottom
	}, 500);
});



