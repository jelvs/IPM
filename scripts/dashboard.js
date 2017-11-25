$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
    var user = "";
    
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
    
    function getRow4Table(data){
        var btn = "<button class='btn btn-link btn-sm material_btn material_btn-link notImplemented' id="+data.name+ " style='padding:7px;'><i class='fa fa-fw fa-lg fa-bars text-info'</i></button>";
        $row = $('<tr><td id="btn_'+data.name+'">'+btn+'</td><td>'+
                 data.name+'</td><td>'+ (data.artist != null ? data.artist : "")+
                 '</td><td>'+ (data.album != null ? data.album : "")+
                 '</td><td>'+ (data.duration != null ? data.duration : "") +
                 '</td><td>'+ moment(data.dateAdded).format("DD/MM/YYYY")+'</td></tr>');
        return $row;
    }
    
    var sources = [];
    sources.push(new song("Californication", "Red Hot Chilli Peppers", "Californication", "5:20", new Date(2017,5,24), "Californication_RHCP.mp3"));
    sources.push(new song("Back in Black", "AC/DC", null, "4:15", new Date(2017,1,10), "BackInBlack_ACDC.mp3"));
    
    function fillTable(){
        for (i in sources){
            $('#TablePlaylistSongs').append(getRow4Table(sources[i]));
            if(sources[i].artist != null)
                localArtists++;
            if(sources[i].album != null)
                localAlbums++;
        }
        $("#localSongs").html("<b>Songs:</b> " + sources.length);
        $("#localArtists").html("<b>Artists:</b> " + localArtists);
        $("#localAlbums").html("<b>Albums:</b> " + localAlbums);
    }
    fillTable();
    
    $('.notImplemented').on('click', function(){
        swal(
          'Under Construction!',
          'This feature is not available yet.',
          'warning'
        )
    });
    
    
    
    //SPEAKERS
    
    function addSpeaker(name){
        var oldContent = $("#speakers").get(0).outerHTML;
        var newContent = oldContent + '<div class="form-check"><label class="form-check-label">' + 
        '<input class="form-check-input speakerCheckbox" type="checkbox" value="" speakerCheckbox>'+ name +'</label></div>';
        $("#speakers").html(newContent);
    }
    $("#newSpeaker").click(function(e){
        e.preventDefault();
        const {value: name} = swal({
          title: 'New Speaker',
          input: 'text',
          inputPlaceholder: 'Enter the name of speaker',
          showCancelButton: true,
          inputValidator: function (value) {
            if (value != null && value != "")
                addSpeaker(value);
            return !value && 'You need to write something!'
          }
        })
        //TODO NAO FUNCIONA
        if (name){
            swal({type: 'success', title: 'Speaker added successfully!'});
        }
    });
    
    $("[speakerCheckbox]").click(function(e){
        //TODO Não funciona
        e.preventDefault();
        console.log($(this));
        if ($(this).val() == 1){
            swal({type: 'success', title: 'Speaker connected!'});
        }
        else{
            swal({type: 'success', title: 'Speaker disconnected!'});
        }
    })
    
    
    

});