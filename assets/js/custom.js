$(document).ready(function(){
    // setTimeout(function(){$(".common-table").wrap("<div class='table-overflow' ></div>")}, 500);;
	

	$(".menu-toggle, .navigation-overlay").click(function(){
		$("body").toggleClass("sidebar-open");
	});
	$(".navigation-toggle").click(function(){
		$("body").toggleClass("sidebar-open");
		$(".navbar ul li").removeClass("show-submenu");
	});
	$(".search-btn .btn").click(function(){
		$(".search-btn").toggleClass("show-search");
	});
	$(".submenu-arrow").click(function(){
		var thisparent = $(this).parents("li");
		if($(thisparent).hasClass("show-submenu")){
			$(".navbar ul li").removeClass("show-submenu");
		}else{
			$(".navbar ul li").removeClass("show-submenu");
			$(thisparent).addClass("show-submenu");
		}
	});
	$(".next-btn").click(function(){
		thisparent = $(this).attr("aria-controls");
		prevparent = $(this).attr("prev-tab");
		$('.wizard-left li a').removeClass("active");
		$('.wizard-left li a[href="#' + thisparent + '"]').trigger('click');
		$('.wizard-left li a[href="#' + prevparent + '"]').addClass("updated");
		$(".updated").parents("li").removeClass("disabled");
	});
	$(document).on('click', '.stophide.dropdown-menu', function (e) {
		e.stopPropagation();
	});

	$('#chooseFile').bind('change', function () {
		var filename = $("#chooseFile").val();
		if (/^\s*$/.test(filename)) {
		  $(".file-upload").removeClass('active');
		  $("#noFile").text("No file chosen..."); 
		}
		else {
		  $(".file-upload").addClass('active');
		  $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
		}
	  });

	/* Button ripple effect */
});

$(".content-block").on('scroll', function () {
	if ($(this).scrollTop()) {
		$('#backtotop').fadeIn();
	} else {
		$('#backtotop').fadeOut();
	}
});
$("#backtotop").on('click', function () {
	$(".content-block").animate({ scrollTop: 0 });
});

/* Full screen */
function go_full_screen(){
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
}

if (!Element.prototype.requestFullscreen) {
	Element.prototype.requestFullscreen = Element.prototype.mozRequestFullscreen || Element.prototype.webkitRequestFullscreen || Element.prototype.msRequestFullscreen;
}

if (!document.exitFullscreen) {
	document.exitFullscreen = document.mozExitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
}

if (!document.fullscreenElement) {

	Object.defineProperty(document, 'fullscreenElement', {
		get: function() {
			return document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement;
		}
	});

	Object.defineProperty(document, 'fullscreenEnabled', {
		get: function() {
			return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled;
		}
	});
}

document.addEventListener('click', function (event) {
	//console.log("hello");
	if (!event.target.hasAttribute('data-toggle-fullscreen')) return;
	
	if (document.fullscreenElement) {
		document.exitFullscreen();
		$(event.target).removeClass("ex-active");
	} else {
		document.documentElement.requestFullscreen();
		$(event.target).addClass("ex-active");
	}
	
}, false);