const decrementBtn=document.getElementById("decrementButton");
const incrementBtn=document.getElementById("incrementButton");
const displayValue=document.getElementById("displayValue");
const resetBtn=document.getElementById("resetButton");

// for decrement
decrementBtn.addEventListener("click", () =>{
    const value=Number(displayValue.innerText);
    if(value > 0){
        displayValue.innerText = value - 1 ;
    }else{
        alert("Negative value not allowed");
    }
});

// for increment
incrementBtn.addEventListener("click", () =>{
    const value=Number(displayValue.innerText);
    if(value >= 10){
        alert("10+ value are not allowed");
    }else{
        displayValue.innerText = value + 1 ;
    }
});

// for reset
resetBtn.addEventListener("click" , () =>{
    displayValue.innerText = 0 ;
});