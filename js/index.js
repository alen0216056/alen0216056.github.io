$(document).ready(function(){
	
	//link scroll
	$(".navbar-brand").click(function(){
		event.preventDefault();
		
		if( $("#menu").hasClass("show") ){
			$("#menu").collapse("hide");
		}
		
		//console.log($("#navbar").outerHeight(), $($(this).attr("href")).offset().top);
		$('html, body').animate({
			scrollTop: $($(this).attr("href")).offset().top - parseInt($("#navbar").outerHeight())
			}, 1000
		);
	});
	
	$(".nav-link").click(function(){
		event.preventDefault();
		
		if( $("#menu").hasClass("show") ){
			$("#menu").collapse("hide");
		}
		
		$('html, body').animate({
			scrollTop: $($(this).attr("href")).offset().top - parseInt($("#navbar").outerHeight())
			}, 1000
		);
	});
	
	$("#learnmore").click(function(){
		event.preventDefault();
		
		if( $("#menu").hasClass("show") ){
			$("#menu").collapse("hide");
		}
		
		$('html, body').animate({
			scrollTop: $("#about").offset().top - parseInt($("#navbar").outerHeight())
			}, 1000
		);
	});
	
	//scroll event
	$(".card").css("opacity", 0);
	$(".card").each(function(){
		this.isTrigger = false;
	});
	$(".progress-bar").css("width", "0%");
	$(".progress-bar").each(function(){
		this.isTrigger = false;
	});
	
	$(window).scroll(function(){
		$(".card").each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+parseFloat($("#navbar").outerHeight())+$(window).height()/2 ){
				if( this.isTrigger==false ){
					$(this).animate({
						opacity: 1.0
					}, 1000);
					this.isTrigger = true;
				}			
			}
		});
		
		$(".progress-bar").each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+parseFloat($("#navbar").outerHeight())+$(window).height()/2 ){
				if( this.isTrigger==false ){
					$(this).animate({
						width: $(this).attr("aria-valuenow")+"%"
					}, 1000);
					this.isTrigger = true;
				}
			}
		});
	});
});