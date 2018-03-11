$(document).ready();{
$(".readmore").click(dropText);
function dropText(){
	event.preventDefault()
	$("#show-this-on-click").slideToggle();
}

$(".readless hide").click(hideText);
function hideText(){
	event.preventDefault()
	$("#show-this-on-click").slideToggle();
}
$(".learnmore").click(showText);
function showText(){
	event.preventDefault()
	$("#learnmoretext").slideToggle();
	$(".learnmore").hide();
}
}
