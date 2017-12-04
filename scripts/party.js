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
    function song(name, artist, album, duration, dateAdded, file) {
        this.name = name;
        this.artist = artist;
        this.album = album;
        this.duration = duration;
        this.dateAdded = dateAdded;
        this.file = file;
    }

    var currentPlayingID = 0;
    var localArtists = 0;
    var localAlbums = 0;

    function getRow4Table(data) {
        var btn = "<button class='btn btn-link btn-sm material_btn material_btn-link notImplemented' id=" + data.name + " style='padding:7px;'><i class='fa fa-fw fa-lg fa-bars text-info'</i></button>";
        $row = $('<tr><td id="btn_' + data.name + '">' + btn + '</td><td>' +
            data.name + '</td><td>' + (data.artist != null ? data.artist : "") +
            '</td><td>' + (data.album != null ? data.album : "") +
            '</td><td>' + (data.duration != null ? data.duration : "") +
            '</td><td>' + moment(data.dateAdded).format("DD/MM/YYYY") + '</td></tr>');
        return $row;
    }

    var sources = [];
    sources.push(new song("Californication", "Red Hot Chilli Peppers", "Californication", "5:20", new Date(2017, 5, 24), "Californication_RHCP.mp3"));
    sources.push(new song("Back in Black", "AC/DC", "Back in Black", "4:15", new Date(2017, 1, 10), "BackInBlack_ACDC.mp3"));




    function fillTable() {
        $('#TablePlaylistSongs').html("");
        for (i in sources) {
            $('#TablePlaylistSongs').append(getRow4Table(sources[i]));
            if (sources[i].artist != null)
                localArtists++;
            if (sources[i].album != null)
                localAlbums++;
        }
        $("#localSongs").html("<b>Songs:</b> " + sources.length);
        $("#localArtists").html("<b>Artists:</b> " + localArtists);
        $("#localAlbums").html("<b>Albums:</b> " + localAlbums);
    }
    fillTable();

    $('.notImplemented').on('click', function () {
        swal(
            'Under Construction!',
            'This feature is not available yet.',
            'warning'
        )
    });

    $('.notSignInS').on('click', function () {
        swal(

            'You have not Linked Your SoundCloud Account Yet!!',
            'Please... Go to the "+" button first.',
            'error'
        )
    });

    $('.notSignInD').on('click', function () {
        swal(

            'You have not Linked Your Deezer Account Yet!!',
            'Please... Go to the "+" button first.',
            'error'
        )
    });

    $('.notSignInA').on('click', function () {
        swal(

            'You have not Linked Your Apple Music Account Yet!!',
            'Please... Go to the "+" button first.',
            'error'
        )
    });

    $('.addedMP').on('click', function(){
        swal(

          'Music was added!!',
          'Music was added to the Specific Party.',
          'success'
        )
    });

    $('.addedM').on('click', function(){
        swal(

          'Music was added!!',
          'Music was added to the Specific Local Playlist.',
          'success'
        )
    });

    $('.addedL').on('click', function(){
        swal(

          'Playlist was added!!',
          'Playlist was added to the Specific Local Playlist.',
          'success'
        )
    });

    $('.addedP').on('click', function(){
        swal(

          'Playlist was added!!',
          'Playlist was added to the Specific Party.',
          'success'
        )
    });



    //SPEAKERS

    function addSpeaker(name) {
        var oldContent = $("#speakers").get(0).outerHTML;
        var newContent = oldContent + '<div class="form-check"><label class="form-check-label">' +
            '<input class="form-check-input speakerCheckbox" type="checkbox" value="" speakerCheckbox>' + name + '</label></div>';
        $("#speakers").html(newContent);
    }
    $("#newSpeaker").click(function (e) {
        e.preventDefault();
        var name = swal({
            title: 'New Speaker',
            input: 'text',
            inputPlaceholder: 'Enter the name of the speaker',
            showCancelButton: true,
            inputValidator: function (value) {
                if (value != null && value != "")
                    addSpeaker(value);
                return !value && 'You need to write something!'
            }
        }).then((result) => {
            if (result.value) {
                swal({ type: 'success', title: 'Speaker added successfully!' });
              }
            });  
    });

    $("#saveSpeaker").click(function (e) {
        e.preventDefault();
        swal({ type: 'success', title: 'Speaker connected!' });
    })

    $("#partyCheckSuggest").click(function(e){
        $("#partyCheckSuggAuto").removeAttr("disabled");
    });

    $("#newParty").click(function (e) {
        var input = swal({
            title: 'New Party',
            input: 'text',
            type: 'question',
            inputPlaceholder: 'Enter the name of party',
            showCancelButton: true,
            html: "<h6>Options</h6><input type='checkbox' name='adm' value=''>Admin controls playlist</input><br>" +
                "<input type='checkbox' id='partyCheckSuggest' value=''>User can suggest songs</input><br>" +
                "<input type='checkbox' value=''>Anyone can join Party</input><br>" +
                "<input type='checkbox' id='partyCheckSuggAuto'value=''>Suggested songs automatically queue up</input>",
            inputValidator: function (value) {
                window.location.href = "party.html?name=" + value;
                return !value && 'You need to write the name of party!'
            }
        })
    });

    $("#homeButton").click(function(e){
        window.location.href = "dashboard.html?username=" + user;
    });
    
    
    function fillSuggestions(){
        $("#suggestions").html(
            "<div id='byob'><input type='checkbox' name='suggMusic' value='byob'>B.Y.O.B : System of a Down</input><br></div>" +
            "<div id='intheend'><input type='checkbox' name='suggMusic' value='intheend'>In the End : Linkin Park</input><br></div>" +
            "<div id='heyyou'><input type='checkbox' name='suggMusic' value='heyyou'>Hey you : Pink Floyd</input><br></div>" +
            "<div id='mariam'><input type='checkbox' name='suggMusic' value='mariam'>Maria : Xutos e Pontapés</input><br></div>" +
            "<div id='lithium'><input type='checkbox' name='suggMusic' value='lithium'>Lithium : Nirvana</input><br></div>")
        addRecentAct(2,"Amilcar","B.Y.O.B","System of a Down");
        addRecentAct(2,"Amilcar","In the End","Linkin Park");
        addRecentAct(2,"Amilcar","Hey you","Pink Floyd");
        addRecentAct(2,"Amilcar","Maria","Xutos e Pontapés");
        addRecentAct(2,"Amilcar","Lithium","Nirvana");
    }
    
    $("#addSuggestedMusic").click(function(e){
        e.preventDefault();
        var $boxes = $('input[name=suggMusic]:checked');
        $boxes.each(function(){
            if ($(this).val() == "byob"){
                sources.push(new song("B.Y.O.B", "System Of a Down", "Mezmerize", "4:15", new Date(2017, 10, 10), "B_Y_O_B_SYSTEMOFADOWN.mp3"));
                $("#byob").remove();
            }
            else if($(this).val() == "intheend"){
                sources.push(new song("In the End", "Linkin Park", "Hybrid Theory", "3:37", new Date(2017, 4, 29), "InTheEnd_LINKINPARK.mp3"));
                $("#intheend").remove();
            }
            else if($(this).val() == "heyyou"){
                sources.push(new song("Hey you", "Pink Floyd", "The Wall (Remastered)", "4:38", new Date(2017, 10, 11), "HeyYou_PINKFLOYD.mp3"));
                $("#heyyou").remove();
            }
            else if($(this).val() == "mariam"){
                sources.push(new song("Maria", "Xutos e Pontapés", null, "4:55", new Date(2017, 6, 4), "Maria.mp3"));
                $("#mariam").remove();
            }
            else if($(this).val() == "lithium"){
                sources.push(new song("Lithium", "Nirvana", "Nevermind", "4:15", new Date(2017, 11, 25), "HeyYou_PINKFLOYD.mp3"));
                $("#lithium").remove();
            }
            fillTable();
            swal('Success',"Music's added successfully!",'success');
        });
    });
    
    $("#removeSuggestedMusic").click(function(e){
        e.preventDefault();
        var $boxes = $('input[name=suggMusic]:checked');
        $boxes.each(function(){
            if ($(this).val() == "byob"){
                $("#byob").remove();
            }
            else if($(this).val() == "intheend"){
                $("#intheend").remove();
            }
            else if($(this).val() == "heyyou"){
                $("#heyyou").remove();
            }
            else if($(this).val() == "mariam"){
                $("#mariam").remove();
            }
            else if($(this).val() == "lithium"){
                $("#lithium").remove();
            }
            fillTable();
            swal('Success',"Music's removed successfully!",'success');
        });
    });
    
    function addRecentAct(option, name, music, artist){
        var oldContent = $("#recentActivity").get(0).outerHTML;
        var newContent = "";
        if (option == 1){ //User join
            newContent = "<hr><p><b><font color='blue'>"+name+"</font></b> has joined the party! (" + moment.utc().format('HH:mm')+")</p>"
        }
        if (option == 2){ // Song suggested
            newContent = "<hr><p>A new song has been suggested by <b><font color='blue'>"+name+"</font></b> : <font color='green'><b>"+ music + "</b> by "+ artist +"</font> (" + moment.utc().format('HH:mm')+")</p>"
        }
        $("#recentActivity").html(newContent + oldContent);
    }
    
    function friendsAdded(){
        $("#friendsList").html('<p>Pedro (Online) <i class="fa fa-circle"></i></p> <p>Amilcar (Online) <i class="fa fa-circle"></i></p>')
        addRecentAct(1,"Pedro",null,null);
        addRecentAct(1,"Amilcar",null,null);
        fillSuggestions();
    }
    
    
    function addFriends(){
        swal({
                title: 'Add Friends',
                type: 'question',
                showCancelButton: true,
                html: "<input type='checkbox' value=''>Pedro</input><br>" +
                    "<input type='checkbox' value=''>João</input><br>" +
                    "<input type='checkbox' value=''>Sofia</input><br>" +
                    "<input type='checkbox' value=''>Amilcar</input><br>" + 
                    "<input type='checkbox' value='' disabled>Rodrigo</input>"
            }).then((result) => {
            if (result.value) {
                friendsAdded();
                swal("Success","Users added successfully", "success");
              }
            });   
    }
    
    $("#addFriends").click(function(e){
        e.preventDefault();
        addFriends(); 
    });

    
    $("#management").change(function(e){
        var value = 0;
        $( "select option:selected" ).each(function() {
            value = $( this ).val();
        });
        switch (value){
            case "0":
                break;
            case "1":
                addFriends();
                break;
            case "2":
            case "3":
                swal('Under Construction!','This feature is not available yet.','warning');
                break;
            case "4":
                swal({
                    title: 'Options',
                    type: 'question',
                    showCancelButton: true,
                    html: "<input type='checkbox' name='adm' value=''>Admin controls playlist</input><br>" +
                        "<input type='checkbox' id='partyCheckSuggest' value=''>User can suggest songs</input><br>" +
                        "<input type='checkbox' value=''>Anyone can join Party</input><br>" +
                        "<input type='checkbox' id='partyCheckSuggAuto'value=''>Suggested songs automatically queue up</input>"
                })
                break;
            case "5":
                window.location.href = "dashboard.html?username=" + user;
                break;
            default:
                swal("Error!","Something bad happened", 'error');
                break;
        }
    });
    
    $("#logo").click(function(e){
        window.location.href = "dashboard.html?username=" + user;
    })

});
