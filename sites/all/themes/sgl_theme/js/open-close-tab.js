(function ($) {
	$(function(){
		var $close = $("#close-tab"),
			$open = $("#open-tab"),
			$body = $(".region-content-container > div");

		$close.click(function(){
			$body.slideUp(function(){
				$("#close-tab").hide();
				$("#open-tab").show();
			});
			fillHeight();
			if (!layoutNeedsFillHeight())
			{
				$(".page-footer").hide();
				$(".page-footer").fadeIn(400);
			}
		});

		$open.click(function() {
			$body.slideDown(function(){
				$("#close-tab").show();
				$("#open-tab").hide();
				adjustLayout();
				$(".page-footer").fadeIn();
			});

			if (!layoutNeedsFillHeight())
				$(".page-footer").fadeOut();
		});
	});
})(jQuery);

