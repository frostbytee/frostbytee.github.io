$( "document").ready(function () {
	$( ".mobileBtn" ).click(function() {
		var thisButton = "." + this.id;
		console.log(thisButton);
		if ( $( thisButton ).is( ":hidden" )) {
			$( thisButton ).slideDown();
		} else {
			$( thisButton ).slideUp();
		}
  	});


	if ($(window).width() < 700) {
		$('.owl-carousel').append('<div class="item"><img src="images/one1.jpg"></div>');
		$('.owl-carousel').append('<div class="item"><img src="images/two1.jpg"></div>');
		$('.owl-carousel').append('<div class="item"><img src="images/three1.jpg"></div>');
	} else {
		$('.owl-carousel').append('<div class="item"><img src="images/onehalf.jpg"></div>');
		$('.owl-carousel').append('<div class="item"><img src="images/twohalf.jpg"></div>');
		$('.owl-carousel').append('<div class="item"><img src="images/threehalf.jpg"></div>');
	}

//var logoSpin = 0;

/*
$( "#logo" ).click(function() {

	$("#logo").addClass("imageRotateHorizontal").delay(1000).queue(function(next){

    	$(this).removeClass("imageRotateHorizontal");
    	next();

		});
	});*/

$(".owl-carousel").owlCarousel({

 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });


});
