let navBarMenu = $(".link-container li");

navBarMenu.mouseenter(() => {
  let audio = new Audio("res/snd_select.wav");
  audio.play();
});

navBarMenu.mousedown(() => {
  let audio = new Audio("res/snd_save.wav");
  audio.play();
});
