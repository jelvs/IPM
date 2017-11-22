$(document).ready(function(){
    function song(name, artist, album, duration, dateAdded, file) {
        this.name = name;
        this.artist = artist;
        this.album = album;
        this.duration = duration;
        this.dateAdded = dateAdded;
        this.file = file;
    }
    var sources = [];
    sources.push(new song("Californication", "Red Hot Chilli Peppers", "Californication", "5:20", new Date(2017,5,24), "Californication_RHCP.mp3"))
    sources.push(new song("Back in Black", "AC/DC", null, "4:15", new Date(2017,1,10), "BackInBlack_ACDC.mp3"))
    var audio = document.getElementById("player");
    //
    $("#play").click(function(e){
        $("#pause").removeClass("invisible");
        $("#play").addClass("invisible");
        audio.play();
    });

    $("#stop").click(function(e){
        $("#pause").addClass("invisible");
        $("#play").removeClass("invisible");
        audio.stop();
    });

    $("#pause").click(function(e){
        $("#play").removeClass("invisible");
        $("#pause").addClass("invisible");
        audio.pause();
    });
});