let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

function increment(){
currentNumber = currentNumber + 1;
currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
currentNumber = currentNumber - 1;
currentNumberWrapper.innerHTML = currentNumber;
}


currentNumberWrapper.addEventListener("mouseover",function(){
if(currentNumber<0){
currentNumberWrapper.style.color = "red";
}else {currentNumberWrapper.style.color = "blue";}

})

function zerar(){
currentNumber = 0;
currentNumberWrapper.innerHTML = currentNumber;
}