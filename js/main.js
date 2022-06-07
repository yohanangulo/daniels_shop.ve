(function ($) {
	"use strict";

	/*----------------------------
	 jQuery MeanMenu
	------------------------------ */
	jQuery('nav#dropdown').meanmenu();

	/*----------------------------
	 wow js active
	------------------------------ */
	new WOW().init();

	/* ---------------------------------------------
	 Nivo slider
	---------------------------------------------*/
	$('#ensign-nivoslider').nivoSlider({
		effect: 'random',
		slices: 15,
		boxCols: 8,
		boxRows: 4,
		animSpeed: 500,
		pauseTime: 5000,
		startSlide: 0,
		directionNav: true,
		controlNavThumbs: false,
		pauseOnHover: false,
	});

	/*----------------------------
	 Active-Product-Carousel
	------------------------------ */
	$(".active-product-carousel").owlCarousel({
		autoPlay: false,
		slideSpeed: 2000,
		pagination: false,
		navigation: true,
		items: 4,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText: ["<i class='pe-7s-preview'></i>", "<i class='pe-7s-play'></i>"],
		itemsDesktop: [1199, 4],
		itemsDesktopSmall: [991, 3],
		itemsTablet: [767, 1],
		itemsMobile: [479, 1],
	});


	/*----------------------------
	 Active-Arrival-Carousel
	------------------------------ */
	$(".active-arrival-carousel").owlCarousel({
		autoPlay: false,
		slideSpeed: 2000,
		pagination: false,
		navigation: true,
		items: 1,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText: ["<i class='pe-7s-preview'></i>", "<i class='pe-7s-play'></i>"],
		itemsDesktop: [1199, 1],
		itemsDesktopSmall: [980, 1],
		itemsTablet: [767, 1],
		itemsMobile: [479, 1],
	});

	/*----------------------------
	Active-Testimonial-Carousel
   ------------------------------ */
	$(".active-testimonial-carousel").owlCarousel({
		autoPlay: false,
		slideSpeed: 2000,
		pagination: false,
		navigation: true,
		transitionStyle: "backSlide", /* [This code for animation ] */
		items: 1,
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		itemsDesktop: [1199, 1],
		itemsDesktopSmall: [980, 1],
		itemsTablet: [768, 1],
		itemsMobile: [479, 1],
	});

	/*----------------------------
	Active-Blog-Post
   ------------------------------ */
	$(".active-blog-post").owlCarousel({
		autoPlay: false,
		slideSpeed: 2000,
		pagination: false,
		navigation: true,
		items: 2,
		navigationText: ["<i class='pe-7s-preview'></i>", "<i class='pe-7s-play'></i>"],
		itemsDesktop: [1199, 2],
		itemsDesktopSmall: [980, 2],
		itemsTablet: [767, 1],
		itemsMobile: [479, 1],
	});


	/*----------------------------
	 Active-Brands-Logo
	------------------------------ */
	$(".active-brands-logo").owlCarousel({
		autoPlay: false,
		slideSpeed: 2000,
		pagination: false,
		navigation: false,
		items: 6,
		itemsDesktop: [1199, 5],
		itemsDesktopSmall: [980, 4],
		itemsTablet: [768, 3],
		itemsMobile: [479, 1],
	});

	/*----------------------------
	 Single-product-carousel
	------------------------------ */
	$(document).ready(function () {
		var sync1 = $("#product-slider");
		var sync2 = $("#product-thumb");

		sync1.owlCarousel({
			singleItem: true,
			autoPlay: false,
			slideSpeed: 1000,
			navigation: false,
			pagination: false,
			afterAction: syncPosition,
			responsiveRefreshRate: 200,
		});

		sync2.owlCarousel({
			items: 4,
			itemsDesktop: [1199, 4],
			itemsDesktopSmall: [980, 4],
			itemsTablet: [768, 4],
			itemsMobile: [479, 2],
			pagination: false,
			responsiveRefreshRate: 100,
			navigation: true,
			navigationText: ["<i class='pe-7s-preview'></i>", "<i class='pe-7s-play'></i>"],
			afterInit: function (el) {
				el.find(".owl-item").eq(0).addClass("active");
			}
		});

		function syncPosition(el) {
			var current = this.currentItem;
			$("#product-thumb")
				.find(".owl-item")
				.removeClass("active")
				.eq(current)
				.addClass("active")
			if ($("#product-thumb").data("owlCarousel") !== undefined) {
				center(current)
			}
		}

		$("#product-thumb").on("click", ".owl-item", function (e) {
			e.preventDefault();
			var number = $(this).data("owlItem");
			sync1.trigger("owl.goTo", number);
		});

		function center(number) {
			var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for (var i in sync2visible) {
				if (num === sync2visible[i]) {
					var found = true;
				}
			}

			if (found === false) {
				if (num > sync2visible[sync2visible.length - 1]) {
					sync2.trigger("owl.goTo", num - sync2visible.length + 2)
				} else {
					if (num - 1 === -1) {
						num = 0;
					}
					sync2.trigger("owl.goTo", num);
				}
			} else if (num === sync2visible[sync2visible.length - 1]) {
				sync2.trigger("owl.goTo", sync2visible[1])
			} else if (num === sync2visible[0]) {
				sync2.trigger("owl.goTo", num - 1)
			}

		}

	});
	

	/*---------------------
	 countdown
	--------------------- */
	$('[data-countdown]').each(function () {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
		});
	});


	/*----------------------------
	 Cart Plus Minus Button
	------------------------------ */
	$(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
	$(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 1;
			}
		}
		$button.parent().find("input").val(newVal);
	});
	/*----------------------------
	 price-slider active
	------------------------------ */
	$("#slider-range").slider({
		range: true,
		min: 5,
		max: 120,
		values: [15, 85],
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	$("#amount").val("$" + $("#slider-range").slider("values", 0) +
		" - $" + $("#slider-range").slider("values", 1));

	/*--------------------------
	 scrollUp
	---------------------------- */
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});

	/*--------------------------
	  View Large Product Image
	---------------------------- */
	$('.simpleLens-lens-image').simpleLens({
		loading_image: 'img/loading.gif'
	});

	/*--------------------------------
		Ajax Contact Form
	-------------------------------- */
	$(function () {
		// Get the form.
		var form = $('#contact-form');
		// Get the messages div.
		var formMessages = $('.form-messege');
		// Set up an event listener for the contact form.
		$(form).submit(function (e) {
			// Stop the browser from submitting the form.
			e.preventDefault();
			// Serialize the form data.
			var formData = $(form).serialize();
			// Submit the form using AJAX.
			$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				data: formData,
			})
				.done(function (response) {
					// Make sure that the formMessages div has the 'success' class.
					$(formMessages).removeClass('error');
					$(formMessages).addClass('success');

					// Set the message text.
					$(formMessages).text(response);

					// Clear the form.
					$('#contact-form input,#contact-form textarea').val('');
				})
				.fail(function (data) {
					// Make sure that the formMessages div has the 'error' class.
					$(formMessages).removeClass('success');
					$(formMessages).addClass('error');

					// Set the message text.
					if (data.responseText !== '') {
						$(formMessages).text(data.responseText);
					} else {
						$(formMessages).text(
							'Oops! An error occured and your message could not be sent.'
						);
					}
				});
		});
	});

})(jQuery);