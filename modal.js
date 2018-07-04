$(document).ready(() => {
	$(".btnArea").click(() => {
		$(".screenSize").fadeTo(10, 0.5);
		$(".overlay").css("display", "block");
		//$(".screenSize").fadeTo(10, 1);
		//alert("hello World");
	});
	$(".close").click(() => {
		$(".screenSize").fadeTo(10, 1);
		$(".overlay").css("display", "none");
		//$(".screenSize").fadeTo(10, 1);
		//alert("hello World");
	});
});