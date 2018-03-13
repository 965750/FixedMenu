$(document).ready(function(){
    
    $(".barContRight").hide();
    //hover
    $(".barContLeft").on("mouseenter", function(){
        $(this).next().fadeToggle(200);
    });
    $(".barContLeft").on("mouseleave", function(){
        $(this).next().fadeToggle(150);
    });
    var panel = 0;
    //click
    $(".barContLeft").on("click", function(){
        
        $(this).prev().toggleClass("leftPanelActive");
        $(".barContAll").toggleClass("barContAllActive");
        $(".barContLeft").not(this).fadeToggle(300);
        
        if(panel == 0){
            $(this).append("<i class='fas fa-times iconFA ys'></i>");
            $(this).find(".nc").fadeOut(0);
            
            panel = 1;
            
        } else {
            $(this).find(".ys").hide(0);
            $(this).find(".nc").fadeIn(0);
            
            panel = 0;

        }
    });
});