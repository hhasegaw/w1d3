var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
   Object.keys(library.playlists).forEach(function(key, index){
   console.log(library.playlists[key].id +": " + library.playlists[key].name + 
   " - " +library.playlists[key].tracks.length + " tracks")
   })
/*var firstLine = "";()
var secondLine = "";
firstLine = "p01: Coding Music - " + library.playlists.p01.tracks.length + " tracks"
secondLine = "p02: Other Playlist - " + library.playlists.p02.tracks.length + " tracks"
*/
}
//printPlaylists();
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
 Object.keys(library.tracks).forEach(function (key, index){
 console.log(library.tracks[key].id + ": " + library.tracks[key].name + " by "  + library.tracks[key].artist + " (" + library.tracks[key].album + ")")
 })
}

//printTracks();
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
 //Object.keys(library.playlists).forEach(function(key, index){
   
  console.log(library.playlists[playlistId].id +": " + library.playlists[playlistId].name + 
  " - " +library.playlists[playlistId].tracks.length + " tracks")
 for (let trackId of library.playlists[playlistId].tracks){
  console.log(library.tracks[trackId].id + ": " + library.tracks[trackId].name + " by "  + library.tracks[trackId].artist + " (" + library.tracks[trackId].album + ")")
 }
 //})
}

//printPlaylist("p01");
// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
console.log(library.playlists[playlistId].tracks.push(trackId))
console.log(library.playlists[playlistId])
}

//addTrackToPlaylist("t03","p01");
// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
// adds a track to the library
/* 
var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
} */
var addTrack = function (name, artist, album) {
var uuid = uid();
library.tracks[uuid] = {
  id: uuid, 
  name: name,
  artist: artist,
  album: album 
}

console.log(library.tracks)
}
//addTrack ("test", "test" ,"test");

// adds a playlist to the library

var addPlaylist = function (name) {
var uuid = uid();
library.playlists[uuid] = {
  name:name
}
console.log(library.playlists);
}

addPlaylist("test");
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}