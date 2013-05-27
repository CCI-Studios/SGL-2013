(function($) {
	$(function () {
		var current_background = 0,
			num_backgrounds = $(".background-images ul li").size();

		setHTMLBackground(getImageSrc(current_background));

		$(".background-changer-left img").click(function(){
			current_background = (current_background-1)%num_backgrounds;
			if (current_background < 0) current_background += num_backgrounds;
			setHTMLBackground(getImageSrc(current_background));
		});

		$(".background-changer-right img").click(function(){
			current_background = (current_background+1)%num_backgrounds;
			setHTMLBackground(getImageSrc(current_background));
		});

		function getImageSrc(num)
		{
			num++;
			return $(".background-images .views-row-"+num+" img").attr("data-src");
		}

		function setHTMLBackground(url)
		{
			$("html").css({"background-image":"url("+url+")"});
		}
	});
}(jQuery));