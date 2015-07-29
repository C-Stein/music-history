// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// songs[songs.length] = "Come Downstairs and Say Hello > by Guster on the album Guster on Ice"
// songs.unshift("So What > by Miles Davis on the album Kind of Blue");

// for (var i = 0; i < songs.length; i++) {
// 	var songName = songs[i];
// 	var newSongName = songName.replace(/[\*|\!|\@|\()]/g, "");
// 	songs[i] = newSongName;
// }
// for (var i = 0; i < songs.length; i++) {
// 	var songName = songs[i];
// 	var newSongName = songName.replace(/>/g, "-");
// 	songs[i] = newSongName;
// }

var $library = $("#library");
var $more = $("#more");
var $byebye = $(".delete");
var musicContent = [];
var moreMusicContent = [];
function addSongsToDom(list) {
  for (var i = 0; i < list.length; i++) {
	var songContent = "<p class='songItem'>";
  songContent += list[i].title;
  songContent +=  " by ";
  songContent += list[i].artist;
  songContent += " on ";
  songContent += list[i].album;
  songContent += "     <input type='button' value='delete' class='delete' id='delete" + i + "'>"
  songContent += "</p><br>";

  $library.prepend(songContent);
	}
}

function loadMusic() {
	  $.ajax({
  	  url:"songs.json"
      }).done(function(data){
        musicContent = data;
        console.log(data);
        addSongsToDom(musicContent.songs);
  });
}

function moreMusic() {
   $.ajax({
  	  url:"moreSongs.json"
  }).done(function(data){
    moreMusicContent = data;
    addSongsToDom(moreMusicContent.songs);
    $more.hide();
  });
}

function hideSong() {
  var songToDelete = $(this).parent();
  songToDelete.hide().html();
  console.log("hideSong called" + "songtoDelete = " + songToDelete);
}

$(document).ready(function() {
  loadMusic();
  $more.click(moreMusic);
	$(document).on('click', '.delete', (hideSong));
});

