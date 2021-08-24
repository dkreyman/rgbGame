var numSquares = 6;
var colors = [];
var colorPicked;
var grid = document.querySelectorAll(".grid");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1Background = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
		
			if(this.textContent === "Easy"){
				numSquares = 3;
			} else{
			numSquares = 6;
			}
		
			reset();
		});
	}	

}

function setupSquares(){
	for(var i = 0; i < grid.length; i++){
		grid[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === colorPicked){
				messageDisplay.textContent = "Correct!"
				winningColor();
				resetButton.textContent = "Play Again"
				h1Background.style.backgroundColor = colorPicked
			} else {
				this.style.backgroundColor = "black";
				messageDisplay.textContent = "Try Again!"
			}
		});
	}
}

function reset(){
	colors = randomColorPicker(numSquares);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "Guess the Color!";
	for(var i = 0; i < grid.length; i++){
		if(colors[i]){
			grid[i].style.display = "block";
			grid[i].style.backgroundColor = colors[i];
		} else{
			grid[i].style.display = "none";
		}
	}
	h1Background.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
	reset();
});

function winningColor(){
	for(var i = 0; i < grid.length; i++){
		grid[i].style.backgroundColor = colorPicked;
	}
}

function pickColor(){
	var randomNum = Math.floor(Math.random() * colors.length);
	return colors[randomNum];
}

function randomColorPicker(num){
	var arr = [];
	for(var i = 0; i<num; i++){
		arr.push(randomColor())
	}
	return arr
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g +", " + b + ")";
}
