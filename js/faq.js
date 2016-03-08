// FAQ

$(document).ready(function(){
	$('.faq li').fadeIn(500);
});


$('.faq li').on('click', function (){
	$( this ).next().slideToggle();
});