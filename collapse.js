$(document).ready(() => {
	$(".group1").click(() => {
		
		$(".collSubGroup1").css("display", "flex");
		$(".collSubGroup2").css("display", "none");
		$(".collSubGroup3").css("display", "none");
	});
	$(".group2").click(() => {
		$(".collSubGroup1").css("display", "none");
		$(".collSubGroup2").css("display", "flex");
		$(".collSubGroup3").css("display", "none");
	});
	$(".group3").click(() => {
		$(".collSubGroup1").css("display", "none");
		$(".collSubGroup2").css("display", "none");
		$(".collSubGroup3").css("display", "flex");
	});
});


	//	$(".navContainer").css("flex-direction", "column");
	//	$(".home").css("display", "flex");
	//	$(".home").css("justify-content", "space-between");
		//$(".home").css("width", "90%");
		//$(".pageTitle").css("width", "90%");
		