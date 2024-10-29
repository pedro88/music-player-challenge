window.onload = function () {
    document.querySelector("#play").addEventListener("click", () => {
        playStopAudio();
      });

        }


const audio = document.getElementById('audio-player');

function playStopAudio(){
        audio.play();
}