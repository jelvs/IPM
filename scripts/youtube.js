$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
    var user = getUrlParameter('username');
    $("#loggedUser").html(user);

    $(".homeButton").click(function(e){
        window.location.href = "dashboard.html?username=" + user;
    })
    
    $("#logo").click(function(e){
        window.location.href = "dashboard.html?username=" + user;
    })

});