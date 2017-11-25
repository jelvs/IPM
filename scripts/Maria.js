$(document).ready(function () {
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
    var profileActive = false;
    if (user == "Maria"){
        profileActive = true;
    }
    
    function fillPlaylist(){
        $("#playlists").html('<p>Rock <a href="#" class="notImplemented">Add To...</a></p> <p>My Fav Music <a href="#" class="notImplemented">Add To...</a></p><p>TOP <a href="#" class="notImplemented">Add To...</a></p>')
    }
    
    function fillOnline(){
        $("#friendsList").html('<p>Pedro (Online) <i class="fa fa-circle"></i></p> <p>João (Online) <i class="fa fa-circle"></i></p><p>Rodrigo (Offline) <i class="fa fa-circle-o"></i></p><p>Carlos (Offline) <i class="fa fa-circle-o"></i></p>')
    }
    
    function fillRecentActivity(){
        $("#recentActivity").html("");
    }
    
    function fill(){
        if (profileActive){
            fillPlaylist();
            fillOnline();
            fillRecentActivity();
        }
    }
    fill();
});