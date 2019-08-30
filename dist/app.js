$( document ).ready(function() {  
   $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("#topbar").addClass("bg-black"); 
            $("#topbar-container").removeClass("border-b-2"); 
            $("#topbar-container").removeClass("py-6");
            $("#topbar-container").addClass("py-3");
        } else {
            $("#topbar").removeClass("bg-black"); 
            $("#topbar-container").addClass("border-b-2");
            $("#topbar-container").addClass("py-6");  
            $("#topbar-container").removeClass("py-3");
        }
    });
});