let input=document.getElementById('inputBox');
// to select all button
let buttons=document.querySelectorAll('button');

// to store result take empty string
let string=" ";
// to get all button we create an array
let arr =Array.from(buttons);
arr.forEach(button =>{
    // add event listener for click
    button.addEventListener('click',(e) =>{
        // if it equal
        if(e.target.innerHTML =='='){
            string=eval(string);
            input.value=string;
        }
        // when we do all clear
        else if(e.target.innerHTML == 'AC'){
            // All will be empty
            string="";
            // store value to string
            input.value=string;
        }
        else if(e.target.innerHTML == 'DE'){
            // remove from last then we use substring fun
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            // any other operation then we add 
            string +=e.target.innerHTML;
            input.value=string;
        }
    })
})