var statearray = ["AK","AL","AR","AZ","CA","CO","CT","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","RI",'SC',"SD","TN","TX","UT","VA","VT","WA","WI","WV","WY"];

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    myVar=setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        if(minutes=="00" && seconds == "00"){
            display.textContent = "Game Over!";
            clearInterval(myVar);
            gameOver();
        }
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function gameOver(){
	document.getElementById("enter").disabled = true;
	for (var element = statearray.length - 1; element >= 0; element--) {
	var statename = document.getElementById(statearray[element]+"")
	statename.style.fill="#800"
	}
display.textContent = "Game Over!";

}
function startGame() {
var numCorrect = 0;
display = document.querySelector('#time');
startTimer(150, display);
document.getElementById("enter").disabled = false;
for (var reset = statearray.length - 1; reset >= 0; reset--) {
	var statename = document.getElementById(statearray[reset]+"")
	statename.style.fill="#D3D3D3"
	}
}
function restartGame() {
	clearInterval(myVar);
var numCorrect = 0;
display = document.querySelector('#time');
startTimer(150, display);
document.getElementById("enter").disabled = false;
for (var reset = statearray.length - 1; reset >= 0; reset--) {
	var statename = document.getElementById(statearray[reset]+"")
	statename.style.fill="#D3D3D3"
	}

}

function winningCase(num){
	if(num == 50){
	for (var reset = statearray.length - 1; reset >= 0; reset--) {
	var statename = document.getElementById(statearray[reset]+"")
	statename.style.fill="#008000"
	}
		document.getElementById("enter").disabled = true;
		clearInterval(myVar);
		var numCorrect = 0;
	}
}

var numCorrect = 0;
function determine(e){
			var code = (e.keyCode ? e.keyCode : e.which);
if(code == 13) { 
	var temp = document.getElementById("enter")
	var count =0
	console.log(temp.value.toUpperCase()+"")
	if(statearray.includes(temp.value.toUpperCase()+""))
		{
			for( count; count<statearray.length;count++){
				if(statearray[count]===temp.value.toUpperCase())
				{
					break;
				}
			}

			var statename = document.getElementById(statearray[count]+"")
			statename.style.fill="#000"
			numCorrect++;
			temp.value = ""
			winningCase(numCorrect);
		}
		}
		}
