$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

//menufixed
 $(window).scroll(function(){
	            if($(this).scrollTop()>100){
	                $('.mnu-line').addClass('fixed');
	            }
	            else if ($(this).scrollTop()<100){
	                $('.mnu-line').removeClass('fixed');
	            }
	        });





//Magnific-Popup
$("a[href=#callback]").magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});


//inputmask
$(".popup-form-phone").inputmask({"mask": "+7 (999) 999-9999"});

$("form").on("submit", function() {
	var phone = $(".popup-form-phone").val();
	var regex = /\+7 \(d{3}\) \d{3}\-\d{4}/;
	if (phone.search(regex)  == -1) {
		alert("Укажите правильный номер телефона!");
		return false;
	}
	return true;
});


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
		$(".zayvka-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				}, 2000);
		});
		return false;
	});
	$(".callback-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass(".visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass(".visible");
				$.magnificPopup.close();
			}, 2000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("a[href=#callback]").click(function(){
		$("#callback .formname").val($(this).data("form"));
		$(".callback-form h3").text($(this).data("form"));
		$(".callback-form .button").text($(this).data("button"))
		});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

//FlipClock
var clock = $('.your-clock').FlipClock({
				clockFace: 'DailyCounter',
				autoStart: false,
				language: 'ru-ru'﻿,
				callbacks: {
					stop: function() {
						$('.message').html('The clock has stopped!')
					}
				}
			});
			
			var dt = "March 20 2017 20:21:14";
			var first = new Date (dt);
			var last = Date.now();
			var remaining = first - last;
			remaining /= 1000;

			clock.setTime(remaining);
			clock.setCountdown(true);
			clock.start();

//OwlCarousel
$('.owl-carousel').owlCarousel({
	loop: true,
	nav: false,
	autoplay: true,
	autoplayHoverPause: true,
	responsive : {
		  0 : {
       items: 1, 
    },
    // breakpoint from 480 up
   1000 : {
        items: 2,
    },
	}
	});


//TopBotton
$('.next').click(function(){
	$(".owl-carousel").trigger('next.owl.carousel')
})
$('.prev').click(function(){
	$(".owl-carousel").trigger('prev.owl.carousel')
});

$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(this).parent().next().next().find(".main-mnu").slideToggle();
		return false;
	});

//scrollUP
$("body").append('<div id="scrollUp" class="top"><i class="fa fa-angle-double-up">');

$("body").on("click", ".top", function(){
	$("html, body").animate({scrollTop: 0}, "slow");
});

window.onscroll = function () { 
if ( window.pageYOffset > 0 ) {
scrollUp.style.display = 'block';
} else {
scrollUp.style.display = 'none';
}};

//ScrollAnchor
$('.anchor').bind("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 1000);
e.preventDefault();
});
return false;



//Works


});
