
const costInput = document.querySelector(".cost");
const serviceInput = document.querySelector(".service");
const peopleInput = document.querySelector(".people");

const tipBtn = document.querySelector("#tip-btn");
var displayTip = document.querySelector(".tip");
var refresh = document.querySelector(".refresh");
var totalTip = document.querySelector(".allTip")

tipBtn.addEventListener("click", calcTip);

function calcTip(){
	if(costInput.value === ""){
		displayTip.textContent = "Error";
	}
	else{
	var cost = Number(costInput.value);
	var service = Number(serviceInput.value)/100;
	var people = Number(peopleInput.value);
	var sum = Math.round((cost * service) /people);
	var total = cost * service;

	if(people > 1){
		displayTip.textContent = sum + " Ksh Each";
		totalTip.textContent = total;
	}

	if(people < 1){
		displayTip.textContent = " Input Number of people";
	}

	if(people === 1){
		displayTip.textContent = sum + " ksh";
		totalTip.textContent = total;
	}
}
};
