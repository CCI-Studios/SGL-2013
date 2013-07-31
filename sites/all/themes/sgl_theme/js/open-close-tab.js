(function ($) {
	$(function(){
		var $close = $("#close-tab"),
			$open = $("#open-tab"),
			$body = $(".page-content > div");

		$close.click(function(){
			$("#close-tab").fadeOut(50);
			$body.slideUp(function(){
				$("#open-tab").fadeIn();
			});
			fillHeight();
			if (!layoutNeedsFillHeight())
			{
				$(".page-footer").hide();
				$(".page-footer").fadeIn(400);
			}
		});

		$open.click(function() {
			$("#open-tab").fadeOut(50);
			$body.slideDown(function(){
				$("#close-tab").fadeIn();
				adjustLayout();
				$(".page-footer").fadeIn();
			});

			if (!layoutNeedsFillHeight())
				$(".page-footer").fadeOut();
		});
	});
})(jQuery);

