let hr=document.getElementById('hour');
let mn=document.getElementById('min');
let sc=document.getElementById('sec');

function displayTime(){

    // we can get all the details from Date()
    let date=new Date();
    
    // But we have to extrct hours,min,sec from Date()
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    let hRotation=30*h + m/2;
    let mRotation=6*m;
    let sRotation=6*s;

    hr.style.transform=`rotate(${hRotation}deg)`;
    mn.style.transform=`rotate(${mRotation}deg)`;
    sc.style.transform=`rotate(${sRotation}deg)`;

}
setInterval(displayTime,1000);
