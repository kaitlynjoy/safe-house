$(document).ready(function(){

var nav = responsiveNav('#menu', {
      	closeOnNavClick: true,
      	customToggle: "#nav-toggle"
      });


var galleryImages = $('#thumbnails img');
var galleryMainImage = $('#gallery-main-image');

galleryImages.click(function(e){
	var index = parseInt(e.target.id.substr(e.target.id.length - 1));

	galleryMainImage.attr('src', 'img/listing' + index + '.jpg');

	/* Fade Option
	galleryMainImage.fadeToggle(200, function(){
		$(this).attr('src', 'img/listing' + index + '.jpg').fadeToggle(200);
	}); */


	galleryImages.removeClass('active');
	$(e.target).addClass('active');

});



});