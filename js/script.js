$(document).ready(function(){


    // $(".nav-list").hover(function(){
    //  $(this).children(".dropdown-list").toggle();
    // });

    // $(".nav-list li").hover(function(){
    //      $(".dropdown-list", this).stop(true, true).slideToggle();
    //      //$(".dropdown-list", this).stop(true, true).slideUp();
    // });


    $('.nav-list li').hover(
		function () {
			//mostra sottomenu
			$('.dropdown-list', this).stop(true, true).delay(50).slideDown(100);

		}, 
		function () {
			//nascondi sottomenu
			$('.dropdown-list', this).stop(true, true).slideUp(200);		
		}
	);
});