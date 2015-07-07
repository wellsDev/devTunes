var playlist = new Playlist();

var takeMeToChurch = new Song("Take Me To Church", "Hozier", "3:59");
var pumpedUpKicks = new Song("Pumped Up Kicks", "Torches", "2:55");
var waves = new Song("Waves", "Mr. Probz", "3:50");
var anotherLove = new Song("Another Love", "Tom Odell", "6:33");
var blueStreak = new Movie("Blue Streak", "1999", "1:33:00")


playlist.add(takeMeToChurch);
playlist.add(pumpedUpKicks);
playlist.add(waves);
playlist.add(anotherLove);
playlist.add(blueStreak);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);


var playButton = document.getElementById("play");

  playButton.onclick = function(){
    playlist.play();
    playlist.renderInElement(playlistElement);
  }

var stopButton = document.getElementById("stop");

stopButton.onclick = function(){
  playlist.stop();
  playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");

nextButton.onclick = function(){
  playlist.next();
  playlist.renderInElement(playlistElement);
};
