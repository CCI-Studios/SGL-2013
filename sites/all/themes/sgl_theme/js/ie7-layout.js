(function ($) {
	$(function(){
		$(window).resize(fixIE7Layout);
		fixIE7Layout();
	});
})(jQuery);

function fixIE7Layout()
{
	(function ($) {
		var windowHeight = window.innerHeight;
		if (!windowHeight)
			windowHeight = document.documentElement.offsetHeight;

		var headerHeight = $(".region-header").height();

		if ($(".page-body").height() < windowHeight - headerHeight)
		{
			IE7BottomUp();
		}
		else
		{
			IE7TopDown();
		}
	})(jQuery);
}

function IE7BottomUp()
{
	jQuery(".page-body").addClass("bottom-up");
}

function IE7TopDown()
{
	jQuery(".page-body").removeClass("bottom-up");
}