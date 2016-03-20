
// TITLE FADEIN

$(document).ready(function(){
	$('.title').fadeIn(500);
	$('.title').css('display','table-cell')
});

// AUTO SCROLLING

$('.next').on('click', function (event){
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $( $( this ).attr('href') ).offset().top
	}, 500);
});

//WHEN SCROLL TO BOTTOM, POPULATE HIDDEN VALUES

var workVal;
var emailVal;

$( window ).scroll(function() {
	if(($( window ).scrollTop() + $( window ).height()) > ($( document ).height() - 100)) {
		emailVal = $('#fullEmail').val();
		$('#toLine').val(emailVal);
		console.log($('#toLine').val());
	};
});

// NUMBER GENERATOR

var solueaId = getId();

function getId() {
	$( document ).ready(function() {

		soleauId = "";
	    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV0123456789";

	    for( var i=0; i < 10; i++ ){
	        soleauId += charset.charAt(Math.floor(Math.random() * charset.length));
	    }

		console.log(soleauId);

		//assign soleauID to publish form
		$('#soleauID').val(soleauId);
	});
};

//ON CLICK COMPOSE TWEET

$('#pooTeeWeet').on('click', function(event) {
	event.preventDefault();
});


