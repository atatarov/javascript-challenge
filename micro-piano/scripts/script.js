function playAudioByKey(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function addTransition(key) {
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  keyElement.classList.add("playing");
  const spanElement = keyElement.querySelector("span");
  spanElement.classList.add("playing-span");
}

window.addEventListener("keydown", function (event) {
  playAudioByKey(event.code);
  addTransition(event.code);
});

window.addEventListener("click", function (event) {
  const dataKey = event.target.getAttribute("data-key");
  playAudioByKey(dataKey);
  addTransition(dataKey);
});

function removeTransition(event) {
  if (event.propertyName != "background-color") return;

  this.classList.remove("playing");
  const spanElement = this.querySelector("span");
  spanElement.classList.remove("playing-span");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
