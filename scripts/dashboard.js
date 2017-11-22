$(document).ready(function(){
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
    
    function getRow4Table(data){
        var btn = "<button class='btn btn-link btn-sm material_btn material_btn-link' id="+data.name+ " style='padding:7px;'><i class='fa fa-fw fa-lg fa-bars text-info'</i></button>";
        $('.btn-link').on('click', function(){
            console.log("Deu botão", this);
            swal(
              'Error',
              'Not Implemented yet!',
              'error'
            )
        })
        $row = $('<tr><td id="btn_'+data.name+'">'+btn+'</td><td>'+ data.name+'</td><td>'+ data.artist+'</td><td>'+ data.album+'</td><td>'+ data.duration+'</td><td>'+ data.dateAdded+'</td></tr>');
        return $row;
    }
    
    var sources = [];
    sources.push(new song("Californication", "Red Hot Chilli Peppers", "Californication", "5:20", new Date(2017,5,24), "Californication_RHCP.mp3"));
    sources.push(new song("Back in Black", "AC/DC", null, "4:15", new Date(2017,1,10), "BackInBlack_ACDC.mp3"));
    
    
    function fillTable(){
        for (x in sources){
            $('#TablePlaylistSongs').append(getRow4Table(sources[x]));
        }
    }
    
    fillTable();
});