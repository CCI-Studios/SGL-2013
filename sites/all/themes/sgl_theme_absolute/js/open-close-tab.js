(function ($) {
	$(function(){
		var $pageContent = $('.page-content > div'),
			$container = $('.region-content > div'),
			$close = $("#close-tab"),
			$open = $("#open-tab"),
			$body = $("#block-system-main");

		$pageContent.height($pageContent.height());



		/*$("#close-tab").click(function(){
			$("#block-system-main").animate({height:"0"}, 400, function(){
				$("#block-system-main").hide();
			});
			$(".region-content").animate({marginTop:"400px"}, 400, function(){
				$("#close-tab").hide();
				$("#open-tab").show();
			});
		});

		$("#open-tab").click(function(){
			$("#block-system-main").animate({height:"auto"}, 400, function(){
				$("#block-system-main").show();
			});
			$(".region-content").animate({marginTop:"0"}, 400, function(){
				$("#close-tab").show();
				$("#open-tab").hide();
			});
		});*/

		$close.click(function(){
			$body.slideUp();

			$("#close-tab").hide();
			$("#open-tab").show();
		});

		$open.click(function() {
			$body.slideDown();

			$("#close-tab").show();
			$("#open-tab").hide();
		});
	});
})(jQuery);

