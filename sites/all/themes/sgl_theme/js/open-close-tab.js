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

		$(".page-projects #block-locale-language a").each(function(){
			$(this).replaceWith("<span class='language-link locale-untranslated' style='text-decoration:line-through;'>"+$(this).text()+"</span>");
		});
	});
})(jQuery);

