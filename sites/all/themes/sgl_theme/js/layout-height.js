(function ($) {
	$(function(){
		adjustLayout();
	});
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