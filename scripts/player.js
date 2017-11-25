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
    sources.push(new song("B.Y.O.B", "System Of a Down", "Mezmerize", "4:15", new Date(2017,10,10), "B_Y_O_B_SYSTEMOFADOWN.mp3"))
    sources.push(new song("In the End", "Linkin Park", "Hybrid Theory", "3:37", new Date(2017,10,11), "InTheEnd_LINKINPARK.mp3"))
    sources.push(new song("Hey you", "Pink Floyd", "The Wall (Remastered)", "4:38", new Date(2017,10,11), "HeyYou_PINKFLOYD.mp3"))
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
