
$('.next').on('click', function (event){
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $( $( this ).attr('href') ).offset().top
	}, 500);
});

$('form#publish').on('submit', function (event){
	event.preventDefault();
	$('input#email').attr('value','');
	$('form').slideUp(500, function() {
		$('#seal').fadeIn(800);
		$('.complete').slideDown(500)
	});
	window.open('https://twitter.com/share?text=I just registered a work with %23Soleau IDno000000');
});

$('#seal').on('click', function (){
	$('.complete').toggle();
	$('#seal').fadeOut(300, function() {
		$('form#publish').slideDown(500);
	});
});


