(function($) {
	$(function () {
		$("#block-system-main-menu li.expanded").bind("touchstart", function(e){
			$(this).toggleClass("open");
			e.stopPropagation();

		});
		$("body").bind("touchstart", function(){
			$("#block-system-main-menu li.expanded").removeClass("open");
		});
	});
}(jQuery));