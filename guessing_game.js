var beans = Math.floor(Math.random()*100);
var guess = parseInt(prompt("Pick a number, 1-100"));
var Player = {
	tries: 0
};

if (guess == beans) {
	alert("Congratulations! YOU WON in 1 guess!!");
} else {
	while(guess!==beans){
		if (guess<beans){
			guess=parseInt(prompt("Too low!"));
			Player.tries++;
		} else if (guess>beans){
			guess=parseInt(prompt("Too high!"));
			Player.tries++;
		} 
	}
	alert("Congratulations! YOU WON in " + Player.tries + " guesses!!");
};
