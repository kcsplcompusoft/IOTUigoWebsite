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
});
