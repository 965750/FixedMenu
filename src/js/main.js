$(document).ready(function () {

    $(".barContRight").hide();
    //hover
    $(".barContLeft").on("mouseenter", function () {
        $(this).next().fadeToggle(200);
    });
    $(".barContLeft").on("mouseleave", function () {
        $(this).next().fadeToggle(150);
    });
    var panel = 0;
    //click
    $(".barContLeft").on("click", function () {

        $(this).prev().toggleClass("leftPanelActive");
        $(".barContAll").toggleClass("barContAllActive");
        $(".barContLeft").not(this).fadeToggle(100);

        //panel ON
        if (panel == 0) {
            $(this).append("<i class='fas fa-times iconFA ys'></i>");
            $(this).find(".nc").fadeOut(0);
            $(".barContRight").css({
                width: "0px"
            });
            $(this).css({
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px"
            });

            var filterVal = 'blur(1px)';
            $("body > *:not('.barContAll')")
                .css('filter', filterVal)
                .css('webkitFilter', filterVal)
                .css('mozFilter', filterVal)
                .css('oFilter', filterVal)
                .css('msFilter', filterVal);

            panel = 1;

            //panel OFF    
        } else {
            $(this).find(".ys").hide(0);
            $(this).find(".nc").fadeIn(0);
            $(".barContRight").css({
                width: "100px"
            });
            $(this).css({
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px"
            });
            
            var filterValClear = 'blur(0px)';
            $("body > *:not('.barContAll')")
                .css('filter', filterValClear)
                .css('webkitFilter', filterValClear)
                .css('mozFilter', filterValClear)
                .css('oFilter', filterValClear)
                .css('msFilter', filterValClear);

            panel = 0;
        }
    });

});
