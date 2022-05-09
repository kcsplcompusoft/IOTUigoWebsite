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
// $(".scroll-top").on('click', function() {
// 	var scrollHeight = $(".content-block").height();
// 	var scrollPosition = $(".content-block").height() + $(".content-block").scrollTop();
// 	console.log(scrollHeight, scrollPosition);
// 	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
// 	    // when scroll to bottom of the page
// 		$(".content-block").animate({ scrollTop: 0 }, "slow");
// 	}
	
//   });

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