const btn= document.getElementById("button");

const randomColor = () =>{
    let val="0123456789ABCDEF";
    let constant="#";

    for(let i=0;i<6;i++)
    {
        constant=constant+val[Math.floor(Math.random()*16)];
    }
    return constant;
};
function randomColorChanger(){
    document.body.style.backgroundColor=randomColor();
}
btn.addEventListener("click", randomColorChanger);