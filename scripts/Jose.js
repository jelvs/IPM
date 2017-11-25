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
    if (user == "José"){
        profileActive = true;
    }
    
    function fillPlaylist(){
        $("#playlists").html('<p>Rock <a href="#" class="notImplemented">Add To...</a></p> <p>My Fav Music <a href="#" class="notImplemented">Add To...</a></p><p>TOP <a href="#" class="notImplemented">Add To...</a></p>')
    }
    
    function fill(){
        if (profileActive){
            fillPlaylist();
        }
    }
    fill();



    function addPlaylist(name) {
        var oldContent = $("#playlists").get(0).outerHTML;
        var newContent = oldContent + '<div class="form-check"><label class="form-check-label">' +
            '<input class="form-check-input playlistCheckbox" type="checkbox" value="" playlistCheckbox>' + name + '</label></div>';
        $("#playlists").html(newContent);
    }
    $("#newPlaylist").click(function (e) {
        e.preventDefault();
        var name = swal({
            title: 'New Playlist',
            input: 'text',
            inputPlaceholder: 'Enter the name of the playlist',
            showCancelButton: true,
            inputValidator: function (value) {
                if (value != null && value != "")
                    addPlaylist(value);
                return !value && 'You need to write something!'
            }
        })
        if (name) {
            swal({ type: 'success', title: 'Playlist added successfully!' });
        }
    });

    $("[playlistCheckbox]").click(function (e) {
        //TODO Não funciona
        e.preventDefault();
        console.log($(this));
        if ($(this).val() == 1) {
            swal({ type: 'success', title: 'Playlist added!' });
        }
        else {
            swal({ type: 'success', title: 'Playlist removed!' });
        }
    })



});