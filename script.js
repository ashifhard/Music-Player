const songs = [
    {
      name: "Kudmayi",
      link: "https://paglasongs.com/files/download/id/14933",
      artists: "Shahid Mallya",
      image: "https://github.com/ashifhard/Music-Player/blob/19ef746b9bf11278b4cfac6360f40b3a8d0887fd/image%20musuic.jpg?raw=true"
    },
    {
      name: "Tum Se",
      link: "https://pagalsongs.com.in/siteuploads/files/sfd3/1494/Tum%20Se-(PagalSongs.Com.IN).mp3",
      artists: "Sachin-Jigar",
      image: "https://github.com/ashifhard/Music-Player/blob/19ef746b9bf11278b4cfac6360f40b3a8d0887fd/image%20musuic.jpg?raw=true"
    },
     {
    name: "Big Dawg",
    link: "https://raag.fm/files/mp3/128/Hindi-Singles/27482/Big%20Dawgs%20-%20(Raag.Fm).mp3",
    artists: "Hanumanbkind",
    image: "https://raag.fm/image/250/27482/Big_Dawgs_Hanumankind.jpg"
  },
     {
    name: "Do You KNow",
    link: "https://raag.fm/files/mp3/128/Hindi-Singles/27449/Do%20U%20Know%20(From%20Khel%20Khel%20Mein)%20-%20(Raag.Fm).mp3",
    artists: "Diljit Dosanjh",
    image: "https://raag.fm/image/250/27449/Do_U_Know_(From_Khel_Khel_Mein)_Diljit_Dosanjh.jpg"
  },
     {
    name: "Fuck What They Say",
    link: "https://pagal-world.com.in/files/download/id/1635",
    artists: "MC Stan & King",
    image: "https://pagal-world.com.in/siteuploads/thumb/sft4/1635_4.jpg"
  },
     {
    name: "G.O.A.T.",
    link: "https://cdnsongs.com/music/data/Single_Track/202007/G_O_A_T/128/G_O_A_T_1.mp3",
    artists: " Diljit Dosanjh",
    image: "https://cover.mr-jatt.im/thumb/489786/G-O-A-T-1.jpg"
  },
  ];
  
  var progress = document.querySelector("#progress");
  var song = document.querySelector("#song");
  var playBtn = document.querySelector("#play i");
  var index = 0;
  var img = document.querySelector(".img img");
  
  var title = document.querySelector("#title");
  var thumb = document.querySelector("#thumb");
  var artist = document.querySelector("#musician");
  
  var start = document.querySelector("#start");
  var end = document.querySelector("#end");
  
  song.src = songs[index].link;
  
  title.innerHTML = songs[index].name;
  artist.innerHTML = songs[index].artists;
  thumb.src = songs[index].image;
  
  song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
  
    setInterval(() => {
      var min = Math.floor(song.duration / 60);
      var sec = Math.floor(song.duration % 60);
  
      var curMin = Math.floor(song.currentTime / 60);
      var curSec = Math.floor(song.currentTime % 60);
  
      if (sec < 10) {
        sec = "0" + sec;
      }
      if (curSec < 10) {
        curSec = "0" + curSec;
      }
      if (min < 10) {
        min = "0" + min;
      }
      if (curMin < 10) {
        curMin = "0" + curMin;
      }
  
      end.innerHTML = min + ":" + sec;
      start.innerHTML = curMin + ":" + curSec;
    }, 1000);
  };
  
  function playPause() {
    if (playBtn.classList.contains("bx-pause")) {
      song.pause();
      playBtn.classList.remove("bx-pause");
      playBtn.classList.add("bx-play");
      img.classList.remove("play");
    } else {
      song.play();
      playBtn.classList.remove("bx-play");
      playBtn.classList.add("bx-pause");
      img.classList.add("play");
    }
  }
  
  if (song.play()) {
    setInterval(() => {
      progress.value = song.currentTime;
      if (song.currentTime == song.duration) {
        nextPlay();
      }
    }, 1000);
  }
  
  progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    playBtn.classList.remove("bx-play");
    playBtn.classList.add("bx-pause");
    img.classList.add("play");
  };
  
  function nextPlay() {
    index = index + 1;
    if (index > songs.length) {
      index = 0;
      song.src = songs[index].link;
      title.innerHTML = songs[index].name;
      artist.innerHTML = songs[index].artists;
      thumb.src = songs[index].image;
      song.play();
    } else {
      song.src = songs[index].link;
      title.innerHTML = songs[index].name;
      artist.innerHTML = songs[index].artists;
      thumb.src = songs[index].image;
      song.play();
    }
  }
  
  function prevPlay() {
    index = index - 1;
    if (index < 0) {
      index = songs.length;
      song.src = songs[index].link;
      title.innerHTML = songs[index].name;
      artist.innerHTML = songs[index].artists;
      thumb.src = songs[index].image;
      song.play();
    } else {
      song.src = songs[index].link;
      title.innerHTML = songs[index].name;
      artist.innerHTML = songs[index].artists;
      thumb.src = songs[index].image;
      song.play();
    }
  }
  
