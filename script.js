let trackNbr;
window.onload = function () {
  let audio = document.getElementById("audio");
  trackNbr = 0;
  let time = document.getElementById("time");
};

const track1 = {
  src: "lost-in-city-lights-145038.mp3",
  visual: "cover-1.png",
  songName: "Lost in the City Lights",
  artistName: "Cosmo Sheldrake",
};
const track2 = {
  src: "forest-lullaby-110624.mp3",
  visual: "cover-2.png",
  songName: "forest lullaby",
  artistName: "Lesfm",
};

const updateTrack = () => {
  document
    .querySelector("#cover")
    .setAttribute("src", playlist[trackNbr].visual);
  document.querySelector("#songName").innerText = playlist[trackNbr].songName;
  document.querySelector("#artistName").innerText =
    playlist[trackNbr].artistName;
  document.querySelector("#audio").setAttribute("src", playlist[trackNbr].src);
};

let playlist = [track1, track2];

let nextAudio = () => {
  if (trackNbr < playlist.length - 1) {
    trackNbr++;
    console.log(trackNbr);
  } else {
    trackNbr = 0;
    console.log(trackNbr);
  }
  updateTrack();
};
let previousAudio = () => {
  if (trackNbr < 0) {
    trackNbr--;
    console.log(trackNbr);
  } else {
    trackNbr = playlist.length - 1;
    console.log(trackNbr);
  }
};

function playStopAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    clearInterval(songCurrentDuration);
  }
}

const progressBar = document.querySelector("#progressBar");
const currentTimeDisplay = document.getElementById("songCurrentDuration");
const totalTimeDisplay = document.getElementById("songDuration");
/*
const setTime = () => {
  const time = audio.currentTime;
  var minutes = Math.floor(time / 60 / (1000 * 60))
    .toString()
    .padStart(1, "0");
  var secondes = Math.ceil(time % 60)
    .toString()
    .padStart(2, "0");
  document.querySelector("#songCurrentDuration").innerText =
    minutes + ":" + secondes;
};
*/

audio.addEventListener("loadedmetadata", () => {
  const totalMinutes = Math.floor(audio.duration / 60)
    .toString()
    .padStart(1, "0");
  const totalSeconds = Math.floor(audio.duration % 60)
    .toString()
    .padStart(2, "0");
  totalTimeDisplay.innerText = `${totalMinutes}:${totalSeconds}`;
  progressBar.max = audio.duration;
});

/*
const totalTime = () => {
  const time = audio.duration;
  var minutes = Math.floor(time / 60)
    .toString()
    .padStart(1, "0");
  var secondes = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  document.querySelector("#songDuration").innerText = minutes + ":" + secondes;
       // progressBar.max = time;
};
*/

audio.addEventListener("timeupdate", () => {
  progressBar.value = audio.currentTime;
  const currentMinutes = Math.floor(audio.currentTime / 60)
    .toString()
    .padStart(1, "0");
  const currentSeconds = Math.floor(audio.currentTime % 60)
    .toString()
    .padStart(2, "0");
  currentTimeDisplay.innerText = `${currentMinutes}:${currentSeconds}`;
});

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});
