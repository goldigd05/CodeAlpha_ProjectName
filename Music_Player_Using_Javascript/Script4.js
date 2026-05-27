const songs = [
  {
    title: "Love Tune",
    artist: "Arijit Style",
    src: "https://cdn.pixabay.com/download/audio/2022/11/29/audio_5762a5f2b3.mp3?filename=soft-romantic-126689.mp3"
  },

  {
    title: "Soft Romantic",
    artist: "Arijit Style",
    src: "https://cdn.pixabay.com/download/audio/2023/01/19/audio_39b3e2b9b1.mp3?filename=dreamy-night-132821.mp3"
  },

  {
    title: "Dreamy Night",
    artist: "Arijit Style",
    src: "https://cdn.pixabay.com/download/audio/2023/01/05/audio_57e3d3f1b5.mp3?filename=sad-romantic-song-130523.mp3"
  },

  {
    title: "Sad Melody",
    artist: "Arijit Style",
    src: "https://cdn.pixabay.com/download/audio/2023/05/04/audio_38df924ad5.mp3?filename=emotional-piano-146612.mp3"
  },

  {
    title: "Emotional Piano",
    artist: "Arijit Style",
    src: "https://cdn.pixabay.com/download/audio/2023/02/06/audio_4e6aee0a8f.mp3?filename=calm-piano-134315.mp3"
  },

  {
    title: "Calm Heart",
    artist: "Arijit Style",
    src: "https://cdn.pixabay.com/download/audio/2023/04/15/audio_3f89ec55a0.mp3?filename=rain-piano-145703.mp3"
  }
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isLoop = false;

const songList = document.getElementById("songList");
const audioPlayer = document.getElementById("audioPlayer");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");

const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const shuffleBtn = document.getElementById("shuffleBtn");
const loopBtn = document.getElementById("loopBtn");
const themeToggle = document.getElementById("themeToggle");

songs.forEach((song, index) => {

  const li = document.createElement("li");

  li.textContent = `${song.title} - ${song.artist}`;

  li.addEventListener("click", () => {
    loadSong(index);
  });

  songList.appendChild(li);

});

function updateActiveSong() {

  const allSongs = document.querySelectorAll("#songList li");

  allSongs.forEach((song, index) => {

    if (index === currentSongIndex) {

      song.style.background = "rgba(255,255,255,0.6)";

    } else {

      song.style.background = "rgba(255,255,255,0.2)";
    }

  });

}

function loadSong(index) {

  currentSongIndex = index;

  songTitle.textContent = songs[index].title;
  songArtist.textContent = songs[index].artist;

  audioPlayer.src = songs[index].src;

  updateActiveSong();

  playSong();
}

function playSong() {

  audioPlayer.play();

  isPlaying = true;

  playPauseBtn.textContent = "⏸";
}

function pauseSong() {

  audioPlayer.pause();

  isPlaying = false;

  playPauseBtn.textContent = "▶️";
}

playPauseBtn.addEventListener("click", () => {

  if (isPlaying) {

    pauseSong();

  } else {

    playSong();
  }

});

prevBtn.addEventListener("click", () => {

  currentSongIndex =
    (currentSongIndex - 1 + songs.length) % songs.length;

  loadSong(currentSongIndex);

});

nextBtn.addEventListener("click", () => {

  if (isShuffle) {

    currentSongIndex =
      Math.floor(Math.random() * songs.length);

  } else {

    currentSongIndex =
      (currentSongIndex + 1) % songs.length;
  }

  loadSong(currentSongIndex);

});

shuffleBtn.addEventListener("click", () => {

  isShuffle = !isShuffle;

  if (isShuffle) {

    shuffleBtn.style.background = "lightgreen";

  } else {

    shuffleBtn.style.background = "";
  }

});

loopBtn.addEventListener("click", () => {

  isLoop = !isLoop;

  audioPlayer.loop = isLoop;

  if (isLoop) {

    loopBtn.style.background = "lightgreen";

  } else {

    loopBtn.style.background = "";
  }

});

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

});

audioPlayer.addEventListener("ended", () => {

  if (!isLoop) {

    nextBtn.click();
  }

});

songTitle.textContent = songs[0].title;
songArtist.textContent = songs[0].artist;

audioPlayer.src = songs[0].src;

updateActiveSong();
