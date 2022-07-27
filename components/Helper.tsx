import $ from 'jquery';

export function toggleId(className:string, id:string)
{
	$(`[class='${className}']`).children("div").toggle();
	var tags = document.getElementsByClassName(className)
	var tag
	for (var i = 0; i < tags.length; i++) {
		tag = tags[i]
		if (tag != null)
			tag.id = tag.getAttribute("id") ? '' : id
	}
}