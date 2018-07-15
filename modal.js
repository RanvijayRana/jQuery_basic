$(document).ready(() => {
	$(".btnArea").click(() => {
		$(".screenSize").fadeTo(10, 0.6);
		$(".overlay").css("display", "block");
	});
	$(".close").click(() => {
		$(".screenSize").fadeTo(10, 1);
		$(".overlay").css("display", "none");
	});
});