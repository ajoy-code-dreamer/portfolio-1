// ===== javaScript operation =====
// === aos js ===
// === aos js ===

// ===== javaScript operation =====

$(function () {
	// ===== type js operation =====
	$(".typed").typed({
		strings: ["Ajoy saha", "a web Designer", "a freelancer", "a blogger"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 1000,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: "html",
		// call when done callback function
		callback: function () {},
		// starting callback function before each string
		preStringTyped: function () {},
		//callback for every typed string
		onStringTyped: function () {},
		// callback for reset
		resetCallback: function () {},
	});
	// ===== type js operation =====

	// ===== preloader animation =====

	// var pageTransitionAnimationDuration = 500;
	// var preloader = $(".preloader");
	// pageTransition({
	// 	target: document.querySelector(".page"),
	// 	delay: 0,
	// 	duration: pageTransitionAnimationDuration,
	// 	classActive: "animated",
	// 	conditions: function (event, link) {
	// 		return;
	// 		!/(\#|callto:|tel:|mailto:|:\/\/)/.test(link) &&
	// 		!event.currentTarget.hasAttribute("data-lightgallery") &&
	// 		event.currentTarget.getAttribute("href") !==
	// 		"javascript:void(0);";
	// 	},
	// 	onTransitionStart: function (options) {
	// 		setTimeout(function () {
	// 			preloader.removeClass("loaded");
	// 		}, options.duration * 0.75);
	// 	},
	// 	onReady: function () {
	// 		preloader.addClass("loaded");
	// 	},
	// });

	$(window).load(function () {
		$(".preloader").delay(500).fadeOut(500);
	});

	// ===== preloader animation =====
});
