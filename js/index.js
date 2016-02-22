
$('.next').on('click', function (){
	$('html, body').animate({
		scrollTop: $( $( this ).attr('href') ).offset().top
	}, 500);
});

$('form#publish').on('submit', function (event){
	event.preventDefault();
	$('form').slideUp(500, function() {
		$('.complete').slideDown(500)
	});
});



