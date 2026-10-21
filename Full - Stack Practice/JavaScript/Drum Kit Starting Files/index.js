
const numberOfDrums = document.querySelectorAll(".drum").length;

// Play sound when a drum button is clicked
for (let i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const buttonText = this.innerHTML;
    playSound(buttonText);
    buttonAnimation(buttonText);
  });
}

// Play sound when keyboard keys are pressed
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

// Play the corresponding drum sound
function playSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;

    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;

    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;

    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;

    case "j":
      new Audio("sounds/snare.mp3").play();
      break;

    case "k":
      new Audio("sounds/crash.mp3").play();
      break;

    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;

    default:
      console.log("No sound assigned to:", key);
  }
}

// Add a visual animation when a drum is pressed
function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);

  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
