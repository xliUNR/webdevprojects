

/*Create sec number*/

var secNumber = 4;
var GuessedCorrect = false;

var guess;


while( GuessedCorrect === false )
{
	guess = prompt("Guess a number: ");
	alert("Guess: " + guess);

	//Check if guess is right
	if( Number(guess) === secNumber )
	{
		GuessedCorrect = true;
		alert("You got it right!");
	}

	else if( Number(guess) > secNumber )
	{
		alert("Sorry, your guess was too high.");
	}

	else{
		alert("Sorry, your guess was too low.");
	}
}