// ===== jQuery operation ======

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
		$(".preloader").delay(1000).fadeOut(1000);
	});

	// ===== preloader animation =====

	// ===== fixed nav ======
	// $(window).scroll(function () {
	// 	let fixedNav = $(this).scrollTop();
	// 	if (fixedNav > 1000) {
	// 		$("#nav_main").addClass("fixed_nav");
	// 	} else {
	// 		$("#nav_main").removeClass("fixed_nav");
	// 	}
	// });
	// ===== fixed nav ======
	// // ===== active nav ====
	// $('.nav_item').on('click',function(){
	// 	$(this).addClass('active').siblings().removeClass('active')
	// })
	// // ===== active nav ====


});
// ===== jQuery operation ======

// ===== javaScript operation =====
// ===== scrolling nav =====

var lastScrollTop = 0;
window.addEventListener(
	"scroll",
	function () {
		var scrolling = window.scrollY;
		let fixedNav = document.querySelector("#nav_main")
		
		if (scrolling > lastScrollTop) {
			// console.log("scroll down");
			fixedNav.classList.remove("fixed_nav");
		} else if (scrolling < lastScrollTop) {
			// console.log("scroll up");
			fixedNav.classList.add("fixed_nav");

		}
		
		lastScrollTop = scrolling <= 0 ? 0 : scrolling;
	},
	false
	);
	// ===== scrolling nav =====
// === aos js ===
// === aos js ===

// ===== javaScript operation ===== 
