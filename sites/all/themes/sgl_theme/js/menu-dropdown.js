(function($) {
	$(function () {
		$("#block-system-main-menu li.expanded").bind("click touchstart", function(){
			$(this).toggleClass("open");
		});
		$("body").bind("click touchstart", function(){
			$("#block-system-main-menu li.expanded").removeClass("open");
		});
	});
}(jQuery));