var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Come Downstairs and Say Hello > by Guster on the album Guster on Ice"
songs[songs.length] = "So What > by Miles Davis on the album Kind of Blue"

for (var i = 0; i < songs.length; i++) {
	var songName = songs[i];
	var newSongName = songName.replace(/[\*|\!|\@|\()]/g, "");
	songs[i] = newSongName;
}
for (var i = 0; i < songs.length; i++) {
	var songName = songs[i];
	var newSongName = songName.replace(/>/g, "-");
	songs[i] = newSongName;
}

for (var i = 0; i < songs.length; i++) {
	document.getElementById("library").innerHTML += "<p class='songItem'>" + songs[i] + "</p>";
}