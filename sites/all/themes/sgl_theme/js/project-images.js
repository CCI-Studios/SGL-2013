(function($) {
	$(function () {

		if ($(".node-urban-design-project .field-name-field-photos img, .node-land-use-project .field-name-field-photos img").length > 1)
		{
			$(".node-urban-design-project .field-name-field-photos, .node-land-use-project .field-name-field-photos")
				.after("<ul class='image-numbers'><li>Photos:</li></ul>");

			$(".node-urban-design-project .field-name-field-photos img, .node-land-use-project .field-name-field-photos img")
				.each(function(index)
				{
					$("<li><a href='#' onclick='displayImage("+index+");return false;'>"+(index+1)+"</a></li>")
						.appendTo("ul.image-numbers");
				})
				.hide()
				.first()
				.show();
		}
	});
}(jQuery));


function displayImage(index)
{
	(function($) {
		$(".node-urban-design-project .field-name-field-photos img, .node-land-use-project .field-name-field-photos img")
			.hide()
			.eq(index)
			.show();
	}(jQuery));
}