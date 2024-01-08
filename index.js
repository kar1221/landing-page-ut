let navBarMenu = $(".link-container li");

navBarMenu.mouseenter(() => {
  let audio = new Audio("res/snd_select.wav");
  audio.volume = 0.2;
  audio.play();
});

navBarMenu.mousedown(() => {
  let audio = new Audio("res/snd_save.wav");
  audio.volume = 0.2;
  audio.play();
});

/* The Credit Panel */
let creditPanel = $(".credit-panel");
let creditButton = $(".link-container .credit a");
let closeButton = $(".close-button");
creditButton.mousedown(() => {
  creditPanel.addClass("active");
});

closeButton.mousedown(() => {
  let audio = new Audio("res/snd_save.wav");
  audio.volume = 0.2;
  audio.play();
  creditPanel.removeClass("active");
});

/* Toby Bark */
let tobyFox = $(".toby-fox img");
tobyFox.mousedown(() => {
  let audio = new Audio("res/doge.mp3");
  audio.volume = 0.2;
  audio.play();
});

/* Background music */
$(document).ready(() => {
  let backgroundMusic = new Audio("res/quiet-water.mp3");
  backgroundMusic.volume = 0.1;
  backgroundMusic.loop = true;
  backgroundMusic.play();
});
