$(document).ready(() => {
	$(".group1").click(() => {
		$(".group2").css("text-decoration","none");
		$(".group3").css("text-decoration","none");
		
		let displayType = $(".collSubGroup1").css("display");		
		if(displayType == "none"){
			$(".group1").css("text-decoration","underline");
			$(".collSubGroup1").css("display", "flex");
		}
		else if (displayType == "flex"){
			$(".group1").css("text-decoration","none");
			$(".collSubGroup1").css("display", "none");
		}	
		
		$(".collSubGroup2").css("display", "none");
		$(".collSubGroup3").css("display", "none");
	});
	$(".group2").click(() => {
		$(".group1").css("text-decoration","none");
		$(".group3").css("text-decoration","none");
		
		$(".collSubGroup1").css("display", "none");
		
		let displayType = $(".collSubGroup2").css("display");		
		if(displayType == "none"){
			$(".collSubGroup2").css("display", "flex");
			$(".group2").css("text-decoration","underline");
		}
		else if (displayType == "flex"){
			$(".group2").css("text-decoration","none");
			$(".collSubGroup2").css("display", "none");
		}
		
		$(".collSubGroup3").css("display", "none");
	});
	$(".group3").click(() => {
		$(".group1").css("text-decoration","none");
		$(".group2").css("text-decoration","none");
		
		$(".collSubGroup1").css("display", "none");
		$(".collSubGroup2").css("display", "none");
		
		let displayType = $(".collSubGroup3").css("display");
		if(displayType == "none"){
			$(".collSubGroup3").css("display", "flex");
			$(".group3").css("text-decoration","underline");
		}
		else if (displayType == "flex"){
			$(".collSubGroup3").css("display", "none");
			$(".group3").css("text-decoration","none");
		}
	});
});


	
		