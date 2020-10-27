
/*jQuery start */
$(document).ready(function(){
	/*-- uppper Button Start --*/
	$(window).scroll(function(){
		
		var x = $(window).scrollTop();
		
		if(x > 1200){
			
			$('.upper').fadeIn(1200);
		}else{
			
			$('.upper').fadeOut(1200);
		}
	});
    $('.upper').click(function(){
		$('html').animate({scrollTop:0},2000);
	});
	
});