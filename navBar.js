$(document).ready(() => {
	$(".menu").click(() => {
		$(".navContainer").css("height", "60vh");
		$(".navContainer").css("flex-direction", "column");
		$(".home").css("display", "flex");
		$(".home").css("justify-content", "space-between");
		$(".home").css("width", "90%");
		$(".pageTitle").css("width", "90%");
		
	});
});