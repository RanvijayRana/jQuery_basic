$(document).ready(() => {
	$(".group1").click(() => {
		let displayType = $(".collSubGroup1").attr("class").css("display");
		alert(displayType);
		$(".group1").css("text-decoration","underline");
		$(".group2").css("text-decoration","none");
		$(".group3").css("text-decoration","none");
		/*if(displayType == "flex"){
			$(".collSubGroup1").css("display", "none");
		}
		else (displayType == "none"){
			$(".collSubGroup1").css("display", "flex");
		}*/
		
		$(".collSubGroup2").css("display", "none");
		$(".collSubGroup3").css("display", "none");
	});
	$(".group2").click(() => {
		$(".group1").css("text-decoration","none");
		$(".group2").css("text-decoration","underline");
		$(".group3").css("text-decoration","none");
		$(".collSubGroup1").css("display", "none");
		$(".collSubGroup2").css("display", "flex");
		$(".collSubGroup3").css("display", "none");
	});
	$(".group3").click(() => {
		$(".group1").css("text-decoration","none");
		$(".group2").css("text-decoration","none");
		$(".group3").css("text-decoration","underline");
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
		