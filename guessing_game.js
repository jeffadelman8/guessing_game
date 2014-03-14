var beans = Math.floor(Math.random()*100);
var guess = prompt("Pick a #, 1-100");
var Player = {
	tries: 0
};

if (guess == beans) {
	alert("Congratulations! YOU WON in 1 guess!!");
} else {
	while(guess!==beans){
		if (guess<beans){
			guess=prompt("Higher");
			Player.tries++;
		} else if (guess>beans){
			guess=prompt("Lower");
			Player.tries++;
		} else {
			alert("Congratulations! YOU WON in " + Player.tries + " guesses!!"
				);
		}
	}
};
