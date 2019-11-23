// Global Variables

let correct = 0;
let incorrect = 0;
let guessesLeft = 10;
let guessesSoFar = [];
let pyschicChoice = "";
let userGuess = "";

//  this is an array---denoted by the brackets [], I am just putting lowercase letters in this array
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

// this is a for loop going through an array [] of the alphabet. 
// for (let i = 0; i < alphabet.length; i++) {
// 		// console.log(alphabet[i]);
// 	};

// Now the psychic (the computer) will make a choice.

let pyschic = () =>  {
	pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

	// console.log(pyschicChoice);

}

// this fuction is now going to reset the game
let resetGame = () => {
	guessesLeft = 10;
	guessesSoFar = [];
	pyschic();
};

// this event is a keystoke, and its what starts the game. I am also going to make it so the user will always guess a lower case letter. 
document.onkeyup = (event) => {

	userGuess = event.key.toLowerCase();

	pyschic();

	console.log(userGuess);


	if (userGuess == pyschicChoice) {
		correct++;
		alertWin();
	} 
	if (userGuess != pyschicChoice) {
		guessesLeft--;
		guessesSoFar.push(userGuess);
	



	// this is the output 
	let html = 
		"<p>Guesses Left </p>" +
		"<p>"+ guessesLeft + "</p>" +
		"<p>Letters Guessed</p>" + 
		"<p>"+ guessesSoFar + "</p>" +
		"<br>" +
		"<p>Correct </p>" + 
		"<p>"+ correct + "</p>" +
		"<p>Incorrect </p>" + 
		"<p>"+ incorrect + "</p>";

	//  now setting html string
    document.querySelector("#game_output").innerHTML = html;

    if ( guessesLeft === 0 ) {
		incorrect++;
		alertLoss();
		}
	}

};

let alertWin = () => {
	alert("you guessed the right letter, you may go free! The letter was " + pyschicChoice + ".");
	resetGame();
};

let alertLoss = () => {
	alert("you guessed the wrong letter, now I am going to eat you! The letter was " + pyschicChoice + ". " + "You Guessed " + userGuess + ".");
	resetGame();
};