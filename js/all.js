$(document).ready(function() {

	$(".menu-icon").click(function() { 
	  $(this).toggleClass("animated");
	  $(".inside-menu").slideToggle(500);
	});

	$('.food-ani').click(function(){
        $('html,body').animate({scrollTop:$('.content').offset().top},800);
	});

	$('.chef-ani').click(function(){
        $('html,body').animate({scrollTop:$('.chef').offset().top},800);
	});

	$('.openmap-ani').click(function(){
        $('html,body').animate({scrollTop:$('.openmap').offset().top},800);
	});
	
	$("#gotop").click(function(){
		jQuery("html,body").animate({
			scrollTop:0
		},1000);
	});
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 500){
			$('#gotop').fadeIn("fast");
		} else {
			$('#gotop').stop().fadeOut("fast");
		}
	});
	$(".like").click(function(){
		$(this).toggleClass("sellike");
	})

  });