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
    sources.push(new song("B.Y.O.B", "System Of a Down", "Mezmerize", "4:15", new Date(2017, 10, 10), "B_Y_O_B_SYSTEMOFADOWN.mp3"));
    sources.push(new song("In the End", "Linkin Park", "Hybrid Theory", "3:37", new Date(2017, 10, 11), "InTheEnd_LINKINPARK.mp3"));
    sources.push(new song("Hey you", "Pink Floyd", "The Wall (Remastered)", "4:38", new Date(2017, 10, 11), "HeyYou_PINKFLOYD.mp3"));



    function fillTable() {
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
        })
        //TODO NAO FUNCIONA
        if (name) {
            swal({ type: 'success', title: 'Speaker added successfully!' });
        }
    });

    $("[speakerCheckbox]").click(function (e) {
        //TODO Não funciona
        e.preventDefault();
        console.log($(this));
        if ($(this).val() == 1) {
            swal({ type: 'success', title: 'Speaker connected!' });
        }
        else {
            swal({ type: 'success', title: 'Speaker disconnected!' });
        }
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
                window.location.replace("party.html?name=" + value);
                return !value && 'You need to write the name of party!'
            }
        })
    });


});
