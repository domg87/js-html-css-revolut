$(document).ready(function(){


    // $(".nav-list").hover(function(){
    //  $(this).children(".dropdown-list").toggle();
    // });

    $(".nav-list li").hover(function(){
         $(".dropdown-list", this).stop(true, true).slideToggle();
         //$(".dropdown-list", this).stop(true, true).slideUp();
    });

});