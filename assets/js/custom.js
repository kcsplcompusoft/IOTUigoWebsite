$(document).ready(function(){
    
	$(".navigation-toggle").click(function(){
		$("body").toggleClass("sidebar-open");
	});
	$(".search-btn .btn").click(function(){
		$(".search-btn").toggleClass("show-search");
	});
	$(".next-btn").click(function(){
		thisparent = $(this).attr("aria-controls");
		prevparent = $(this).attr("prev-tab");
		$('.wizard-left li a').removeClass("active");
		$('.wizard-left li a[href="#' + thisparent + '"]').trigger('click');
		$('.wizard-left li a[href="#' + prevparent + '"]').addClass("updated");
	});
	$(document).on('click', '.stophide.dropdown-menu', function (e) {
		e.stopPropagation();
	});
});
