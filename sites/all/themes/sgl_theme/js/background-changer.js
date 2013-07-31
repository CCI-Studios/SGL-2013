(function($) {
	$(function () {
		var current_background = 0,
			num_backgrounds = $(".background-images ul li").size();

		current_background = Math.floor(Math.random()*(num_backgrounds-1));

		setBackground(getImageSrc(current_background));

		$(window).resize(resizeBackground);

		$(".background-changer-left img").click(function(){
			current_background = (current_background-1)%num_backgrounds;
			if (current_background < 0) current_background += num_backgrounds;
			setBackground(getImageSrc(current_background));
		});

		$(".background-changer-right img").click(function(){
			current_background = (current_background+1)%num_backgrounds;
			setBackground(getImageSrc(current_background));
		});

		function getImageSrc(num)
		{
			return $(".background-images .views-row-"+(num+1)+" [data-src]").attr("data-src");
		}

		function setBackground(url)
		{
			$(".background-image").addClass("old");
			$("<img class='background-image new' />")
				.one("load", resizeBackground)
				.attr("src", url)
				.appendTo("#background");
		}

		function resizeBackground()
		{
			console.log("resizeBackground");

			if ($(window).width() <= 720) return;
			var img = $(".background-image");
			if (img.size() > 1)
				img = $(".background-image.new");


			img.css({"width":"100%", "height":"auto"});

			if (img.height() <= $(window).height())
			{
				img.addClass("landscape");
			}
			else
			{
				img.removeClass("landscape");
			}

			img.css({"width":"", "height":""});

			$(".background-image.new")
				.hide()
				.removeClass("new")
				.fadeIn(1000, function(){
					setTimeout(function(){
						$(".background-image.old").remove();
					}, 1500);
			});
		}
	});
}(jQuery));