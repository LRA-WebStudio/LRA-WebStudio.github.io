$(function() {

	/*For mmenu*/
	

	$('.hamburger').click(function() {
		$('#my-menu').slideToggle('slow');
		if($('.hamburger').hasClass('is-active')) {
			$('.hamburger').removeClass('is-active');
		}else{
			$('.hamburger').addClass('is-active');
		};
	$(document).click(function(event){
		if ($(window).width() > 1182) return;
		if ($(event.target).closest('#my-menu').length || $(event.target).closest('.hamburger').length) return;
		  $('#my-menu').fadeOut(500);
			event.stopPropagation();
		if($('.hamburger').hasClass('is-active')) {
			$('.hamburger').removeClass('is-active');
		}
		});

	});

	$(window).resize(function() {
			if ($(window).width() > 1182) {
				$('#my-menu').show();
			} else {
				$('#my-menu').hide();
			}
		});	


	

	/*For OwlCarousel*/

	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function() {
			carouselService();	
		}, 100);
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	/*For Items Carousel*/

	function carouselService() {
		$('.carousel-services-item').each(function(){
			var ths = $(this),
					thsh = ths.find('.carousel-services-content').outerHeight();
					ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselService();

	/*For Items text in Carousel item*/

	$('.carousel-services-composition .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	$('select').selectize({ });


	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		autoHeight: true

	});
	$('.partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}	
		}
	});


	$(window).scroll(function(){
		if ($(this).scrollTop() > $(this).height()){
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});


	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	function onResize(){
		$('.carousel-services-content').equalHeights();
	}onResize();
	window.onResize = function() {onResize()}; 

});

	function initMap() {
        var coordinates = {lat: 49.4370034, lng: 32.0667383};
        		markerImg = 'img/mapmarker.png',

        		map = new google.maps.Map(document.getElementById('map'), {
          		center: coordinates,
          		zoom: 16,
          		disableDefaultUI: true,
          		scrollwheel: false,
          	});


        var marker = new google.maps.Marker({
          position: coordinates,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: markerImg,

        });
	};

	google.maps.event.addDomListener(window, 'load', initMap);


$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
})