(function ($) {
	$(function(){
		var $close = $("#close-tab"),
			$open = $("#open-tab"),
			$body = $("#block-system-main");

		$close.click(function(){
			$body.slideUp();
			fillHeight();
			if (!layoutNeedsFillHeight())
			{
				$(".page-footer").hide();
				$(".page-footer").fadeIn(400);
			}

			$("#close-tab").hide();
			$("#open-tab").show();
		});

		$open.click(function() {
			$body.slideDown(function(){
				adjustLayout();
				$(".page-footer").fadeIn();
			});

			if (!layoutNeedsFillHeight())
				$(".page-footer").fadeOut();

			$("#close-tab").show();
			$("#open-tab").hide();
		});
	});
})(jQuery);

