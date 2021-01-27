// Detecting the characters.

var numberofButtons = document.querySelectorAll(".drum").length;
for (var count = 0; count < numberofButtons; count++){
  document.querySelectorAll("button")[count].addEventListener("click" , function () {
    var buttonInnerHtml = this.innerHTML;
    characterListener(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  })
}

// Detecting the Keydown
document.addEventListener("keydown", function(event){
  characterListener(event.key);
  buttonAnimation(event.key);
});

// Function that takes in a key and returns the corresping sound

function characterListener(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;
    case "l":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
    break;
    default:
      console.log(key);
  }
}

// Function to show animation.

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.toggle("pressed");

  setTimeout(function(){
    activeButton.classList.toggle("pressed")
  }, 100)
}
