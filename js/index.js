
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

// SUBMIT FORM

$('form#publish').on('submit', function (event) {
	event.preventDefault();
	submitForm();
});

function submitForm () {
	window.open("https://twitter.com/share?text=I just registered a work with %23Soleau ID %23"+soleauId+"");
};

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

	});
};
