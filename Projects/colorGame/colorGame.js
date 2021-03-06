var colors = ["rgb(255, 0, 0)",
			  "rgb(255, 255, 0)",
			  "rgb(0, 255, 0)",
			  "rgb(0, 255, 255)",
			  "rgb(0, 0, 255)",
			  "rgb(255, 0, 255)"	
			 ];


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i= 0; i < squares.length; i++ )
{
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;

		//compare color to pickedColor
		if( clickedColor === pickedColor )
			{
				alert("Correct!");
				changeColors(clickedColor);
			}
		else
			{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}	
	});
}

function changeColors(color){
	//loop thru all squares and change color to match given color
	for(var i = 0; i < colors.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	
	return colors[Math.floor(Math.random() * colors.length )];
}