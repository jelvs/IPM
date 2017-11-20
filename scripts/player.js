$(document).ready(function(){
    //
    $("#play").click(function(e){
        $("#pause").removeClass("invisible");
        $("#play").addClass("invisible");
    });

    $("#stop").click(function(e){
        $("#pause").addClass("invisible");
        $("#play").removeClass("invisible");
    });

    $("#pause").click(function(e){
        $("#play").removeClass("invisible");
        $("#pause").addClass("invisible");
    });
});