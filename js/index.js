
$(document).ready(function(){
	$('.title').fadeIn(500);
	$('.title').css('display','table-cell')
});

$('.next').on('click', function (event){
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $( $( this ).attr('href') ).offset().top
	}, 500);
});

$('form#publish').on('submit', function (event){
	event.preventDefault();
	$('form').slideUp(500, function() {
		$('#seal').fadeIn(500);
		$('.complete').slideDown(500)
	});
});

$('#seal').on('click', function (){
	$('.complete').toggle();
	$('#seal').fadeOut(300, function() {
		$('form#publish').slideDown(500);
	});
});

$(document).ready(function(){
	$('.faq li').fadeIn(500);
});


$('.faq li').on('click', function (){
	$( this ).next().slideToggle();
});

// NUMBER GENERATOR

var solueaId = getId();

function getId() {
	$( document ).ready(function() {

		soleauId = "";
	    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV0123456789";

	    for( var i=0; i < 10; i++ )
	        soleauId += charset.charAt(Math.floor(Math.random() * charset.length));

<<<<<<< HEAD
		console.log(soleauId);

	});
};
=======
// 	console.log(soleauId);
>>>>>>> origin/master
