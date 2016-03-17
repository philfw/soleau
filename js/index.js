
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
	var emailVal = $('#emailSubmit').val();
	if (emailVal.indexOf('@') >=0) {
		window.open("https://twitter.com/share?text=I just registered a work with %23Soleau ID %23"+soleauId+"");
	}
	else {$('#emailSubmit').css('color','red');} 
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
