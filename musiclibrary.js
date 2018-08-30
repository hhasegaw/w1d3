var library = {
    tracks: {
      t01: {
        id: "t01"
        , name: "Code Monkey"
        , artist: "Jonathan Coulton"
        , album: "Thing a Week Three"
      }
      , t02: {
        id: "t02"
        , name: "Model View Controller"
        , artist: "James Dempsey"
        , album: "WWDC 2003"
      }
      , t03: {
        id: "t03"
        , name: "Four Thirty-Three"
        , artist: "John Cage"
        , album: "Woodstock 1952"
      }
    }
    , playlists: {
      p01: {
        id: "p01"
        , name: "Coding Music"
        , tracks: ["t01", "t02"]
      }
      , p02: {
        id: "p02"
        , name: "Other Playlist"
        , tracks: ["t03"]
      }
    }
    , printPlaylists: function () {
      var that = this;
      Object.keys(that.playlists)
        .forEach(function (key, index) {
          console.log(that.playlists[key].id + ": " + that.playlists[key].name +
            " - " + that.playlists[key].tracks.length + " tracks")
        })
    }
    , printTracks: function () {
      var that = this;
      Object.keys(this.tracks)
        .forEach(function (key, index) {
          console.log(that.tracks[key].id + ": " + that.tracks[key].name + " by " +
            that.tracks[key].artist + " (" + that.tracks[key].album + ")")
        })
    }
    , printPlaylist: function (playlistId) {
      var that = this;
      console.log(this.playlists[playlistId].id + ": " + this.playlists[playlistId].name +
        " - " + this.playlists[playlistId].tracks.length + " tracks")
      for (let trackId of this.playlists[playlistId].tracks) {
        console.log(that.tracks[trackId].id + ": " + that.tracks[trackId].name +
          " by " + that.tracks[trackId].artist + " (" + library.tracks[trackId].album + ")")
      }
    }
    , addTrackToPlaylist: function (trackId, playlistId) {
      console.log(this.playlists[playlistId].tracks.push(trackId))
      console.log(this.playlists[playlistId])
    }
    , uid: function () {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    , addTrack: function (name, artist, album) {
      var uuid = this.uid();
      this.tracks[uuid] = {
        id: uuid
        , name: name
        , artist: artist
        , album: album
      }
    }
    , addPlaylist: function (name) {
      var uuid = this.uid();
      this.playlists[uuid] = {
        id: uuid
        , name: name
        , tracks: []
      }
    }
  
  
  }
  
  
  library.addPlaylist("baby");
  library.printPlaylists();
 
  /* 
  



  
  var addPlaylist = function (name) {
  var uuid = uid();
  library.playlists[uuid] = {
    name:name
  }
  }
  */