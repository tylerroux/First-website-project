var today = new Date();
document.getElementById("current_time").innerHTML = today;
//This gathers the current time.

function getAdditionOf_year(){
	year = new Date();
	var y = year.getFullYear();
	return (y + 5);
}//This is a function to calculate 5 plus the current year.
var result = getAdditionOf_year();
document.getElementById("addition").innerHTML = result;
//Gets the result which is then displayed on the home page.

var day = new Date();
var hours = day.getHours();
var minutes = day.getMinutes();
var cur = document.getElementById('math');
cur.textContent = hours + minutes;
//This is getting the hour and minutes from the time and adding the two togther
//to give you the result as math.

var current = (new Date()).getMinutes();

if(current > 20 && current < 45)
	document.getElementById("ifElse").style.color = "pink";

else
	document.getElementById("ifElse").style.color = "purple";
//This is an if/else function that will turn the sentence pink if the current
//minutes is between 21 and 44 otherwise the text will be purple.

var sum = (new Date()).getMinutes();
var i;
for (i = 1; i <= 5; i++){
	sum = sum + 1;
}
document.getElementById("forLoop").innerHTML = sum;
//The loop above is a for loop that gets the minutes and adds 1 five times
//giving the outcome of 5 plus the current minutes. 