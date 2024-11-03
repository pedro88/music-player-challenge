let trackNbr; // track number
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
  artistName: "odhisufhiodf",
};

const updateTrack = () => {
  document
    .querySelector("#cover")
    .setAttribute("src", playlist[trackNbr].visual);
  document.querySelector("#songName").innerText = playlist[trackNbr].songName;
  document.querySelector("#artistName").innerText =
    playlist[trackNbr].artistName;
  document.querySelector("#audio").setAttribute("src", playlist[trackNbr].src);
  document.querySelector("#songDuration").innerText = audio.duration;
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
  console.log(audio);
  if (audio.paused) {
    songCurrentDuration = setInterval(() => {
      setTime();
    }, 1000);

    audio.play();
  } else {
    audio.pause();
    clearInterval(songCurrentDuration);

  }
}

const setTime = () => {
  const time = Math.floor(audio.currentTime);
  console.log(document.querySelector("#songCurrentDuration"));
  document.querySelector("#songCurrentDuration").innerText= time;

};

