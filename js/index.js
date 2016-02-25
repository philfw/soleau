
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
		$('#seal').show();
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

// $( document ).ready(function() {

// 	var digits = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0']

// 	var soleauId = idGenerator();

// 	function idGenerator () {
// 		for (var i=0; i<7; i++) 
// 			var randNum = Math.floor(Math.random() * digits.length);
			
// 	};

// 	console.log(soleauId);
