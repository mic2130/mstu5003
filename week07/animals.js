// Big problem - Let's make a program that let's people choose an animal. Once an animal is chosen, then the computer will "make an appropriate animal sound to the console (pretend)"

// If I have an array like the following, what is the pseudocode logic to grab a random animal from the array? What does the random factor actually represent in the context of the array?
var animals = ["dog", "cat", "bird"];
var sounds = ["huau", "miau", "pio"];
var randomNumber = Math.floor(Math.random()*3);

function pickRandomAnimal(x){
  var myAnimal = animals[x];
  console.log(myAnimal);
}

console.log(randomNumber);


function emiteSound(x){
  var itSound = sounds[x];
  console.log(itSound);
}

pickRandomAnimal(randomNumber);
emiteSound(randomNumber);

// Make a function that returns a random animal.
// Make a function that will output to console, an appropriate sound for the animal that is passed into the function.

// Challenge - what if instead of outputting to a console, we wanted to actually make an MP3 sound output?
// Takes URL String -> returns Audio object
// Think Alpaca, object is just another "thing"
function makeAudio(url) {
	var audio = new Audio(url);
	return audio;
}
// Takes Audio object
function playAudio(audioObject) {
	audioObject.play();
}
// Takes Audio object
function stopAudio(audioObject) {
	audioObject.pause();
	audioObject.currentTime = 0;
}
