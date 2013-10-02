(function ($) {
	$(function(){
		adjustLayout();
		//adjustTitle();

		$("#block-system-main img").load(function(){adjustLayout();});
	});

	function adjustTitle()
	{
		if ($("#page-title").height() > 40)
		{
			$(".region-content > div").css({
				"padding-top":"137px",
				"margin-top":"-137px"
			});

			$("#open-close-tab").css({
				"top":"-123px"
			});
		}
	}
})(jQuery);

function adjustLayout()
{
	if (layoutNeedsFillHeight())
	{
		fillHeight();
	}
	else
	{
		expandHeight();
	}
}

function layoutNeedsFillHeight()
{
	var windowHeight = window.innerHeight;
	if (!windowHeight)
		windowHeight = document.documentElement.offsetHeight;

	$body = jQuery(".page-wrapper");

	//alert("body="+$body.height()+"\nwindow="+windowHeight);

	return $body.height() <= windowHeight;
}

function fillHeight()
{
	jQuery("html").addClass("fill-height");
}

function expandHeight()
{
	jQuery("html").removeClass("fill-height");
}