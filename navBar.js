$(document).ready(() => {
	$(".menu").click(() => {
		let indicator = $(".home").css("display");
		if(indicator == "none"){
			$(".navContainer").css("height", "51vh");
			$(".navContainer").css("flex-direction", "column");
			$(".navContainer").css("justify-content","flex-start");
			$(".home").css("display", "flex");
			$(".home").css("justify-content", "space-between");
			$(".home").css("width", "90%");
			$(".pageTitle").css("width", "90%");
			$(".section2").css("display", "flex");
			$(".inputSearch").css("width", "70%");
			$(".search").css("width", "22%");
		}
		else{
			$(".home").css("display", "none");
			$(".section2").css("display", "none");
			$(".navContainer").css("height", "10vh");
		}
	});
	
	
});