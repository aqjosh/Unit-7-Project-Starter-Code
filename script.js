$(".prediction").click(function() {
        $(".whole") .hide();          
    	$(".results") .show();
let item;
let device; 
let hrs;
item = $(".input1").val();
device = $(".input2").val();
hrs = $(".input3").val();
    
let x = hrs * 10220;
    
    $(".results").append("<p>"+ item + " , you would have used your " + device + " for " + x + " hours by 2050! " + "</p>");
});