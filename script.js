window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

var audio = document.getElementById("myAudio");
audio.volume = 0.3;
var isAudioPlaying = false;

function playAudio() {
  if (!isAudioPlaying) {
    audio.play();
    isAudioPlaying = true;
  }
}

document.addEventListener("click", playAudio);
new TypeIt("#text", {
  strings: [
    "Hi Ce I See Your Chat",
    "This Is Flower For You",
    "Hope You Like It",
  ],
  speed: 50,
  waitUntilVisible: true,
}).go();
