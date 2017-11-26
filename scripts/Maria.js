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
    var party = getUrlParameter('name');
    var profileActive = false;
    if (user == "Maria"){
        profileActive = true;
    }
    var isParty = false;
    if (party.length >0){
        isParty=true;
    }
    
    function fillPlaylist(){
        $("#playlists").html('<p>Rock <a href="#" class="notImplemented">Add To...</a></p> <p>My Fav Music <a href="#" class="notImplemented">Add To...</a></p><p>TOP <a href="#" class="notImplemented">Add To...</a></p>')
    }
    
    function fillOnline(){
        $("#friendsList").html('<p>Pedro (Online) <i class="fa fa-circle"></i></p> <p>João (Online) <i class="fa fa-circle"></i></p><p>Rodrigo (Offline) <i class="fa fa-circle-o"></i></p><p>Carlos (Offline) <i class="fa fa-circle-o"></i></p>')
    }
    
    function addSpeaker(name) {
        var oldContent = $("#speakers").get(0).outerHTML;
        var newContent = oldContent + '<div class="form-check"><label class="form-check-label">' +
            '<input class="form-check-input speakerCheckbox" type="checkbox" value="" speakerCheckbox>' + name + '</label></div>';
        $("#speakers").html(newContent);
    }
    
    function fillSpeakers(){
        addSpeaker("Bedroom");
        addSpeaker("Living Room");
        addSpeaker("Kitchen");
        addSpeaker("Bathroom");
    }
    
    function fillRecentActivity(){
        $("#recentActivity").html("");
    }
    
    function fill(){
        if (profileActive){
            fillPlaylist();
            fillRecentActivity();
            if (isParty){
                fillSpeakers();
                $("#friendsList").html('');
            }
            else{
                fillOnline();
            }
        }
    }
    fill();
});