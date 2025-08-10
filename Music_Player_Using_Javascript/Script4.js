const songs = [
  { title: "Love Tune", artist: "Arijit Style", src: "songs/freepik-kool-stuff.mp3" },
  { title: "Soft Romantic", artist: "Arijit Style", src: "https://cdn.pixabay.com/download/audio/2022/11/29/audio_5762a5f2b3.mp3?filename=soft-romantic-126689.mp3" },
  { title: "Dreamy Night", artist: "Arijit Style", src: "https://cdn.pixabay.com/download/audio/2023/01/19/audio_39b3e2b9b1.mp3?filename=dreamy-night-132821.mp3" },
  { title: "Sad Melody", artist: "Arijit Style", src: "https://cdn.pixabay.com/download/audio/2023/01/05/audio_57e3d3f1b5.mp3?filename=sad-romantic-song-130523.mp3" },
  { title: "Emotional Piano", artist: "Arijit Style", src: "https://cdn.pixabay.com/download/audio/2023/05/04/audio_38df924ad5.mp3?filename=emotional-piano-146612.mp3" },
  { title: "Calm Heart", artist: "Arijit Style", src: "https://cdn.pixabay.com/download/audio/2023/02/06/audio_4e6aee0a8f.mp3?filename=calm-piano-134315.mp3" },
  { title: "Night Rain", artist: "Arijit Style", src: "https://cdn.pixabay.com/download/audio/2023/04/15/audio_3f89ec55a0.mp3?filename=rain-piano-145703.mp3" },
  { title: "Peaceful", artist: "Arijit Style", src: "https://cdn.pixabay.com/download/audio/2023/01/16/audio_a8b0e1fa7e.mp3?filename=peaceful-romantic-132650.mp3" },
  { title: "Happiness", artist: "Arijit Style", src: "https://cdn.pixabay.com/download/audio/2023/03/20/audio_0cdb8dd8e9.mp3?filename=happy-romantic-144328.mp3" },
  { title: "Sunset Love", artist: "Arijit Style", src: "https://cdn.pixabay.com/download/audio/2023/04/11/audio_1b5cc2f0a4.mp3?filename=sunset-piano-145315.mp3" },
  { title: "Ocean View", artist: "Arijit Style", src: "https://cdn.pixabay.com/download/audio/2023/05/15/audio_09fd8f3cc8.mp3?filename=ocean-piano-147172.mp3" },
  { title: "Light Breeze", artist: "Arijit Style", src: "https://cdn.pixabay.com/download/audio/2023/02/14/audio_1fcb7ac76a.mp3?filename=light-breeze-134943.mp3" },
  { title: "Lonely Road", artist: "Arijit Style", src: "https://cdn.pixabay.com/download/audio/2023/04/02/audio_6c63c4e5d5.mp3?filename=lonely-road-144713.mp3" },
  { title: "Golden Hour", artist: "Arijit Style", src: "https://cdn.pixabay.com/download/audio/2023/05/04/audio_f4cc0f5a46.mp3?filename=golden-hour-146611.mp3" },
  { title: "Pure Love", artist: "Arijit Style", src: "https://cdn.pixabay.com/download/audio/2023/01/11/audio_2f8a5bc67f.mp3?filename=pure-love-131717.mp3" }
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
  li.addEventListener("click", () => loadSong(index));
  songList.appendChild(li);
});

function loadSong(index) {
  currentSongIndex = index;
  songTitle.textContent = songs[index].title;
  songArtist.textContent = songs[index].artist;
  audioPlayer.src = songs[index].src;
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
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
});

nextBtn.addEventListener("click", () => {
  if (isShuffle) {
    currentSongIndex = Math.floor(Math.random() * songs.length);
  } else {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  }
  loadSong(currentSongIndex);
});

shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.style.background = isShuffle ? "lightgreen" : "";
});

loopBtn.addEventListener("click", () => {
  isLoop = !isLoop;
  audioPlayer.loop = isLoop;
  loopBtn.style.background = isLoop ? "lightgreen" : "";
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

audioPlayer.addEventListener("ended", () => {
  if (!isLoop) nextBtn.click();
});

loadSong(0);
