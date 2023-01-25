let secondHand=document.getElementsByClassName('sec-hand')[0];
let minHand=document.getElementsByClassName('min-hand')[0];
let hourHand=document.getElementsByClassName('hour-hand')[0];
function setSecondHand(){
    let now= new Date();
    let seconds=now.getSeconds();
    if(seconds==0){
        seconds=60;
    }
    let minutes=now.getMinutes();
    let hours=now.getHours();
    let secondDegree= ((seconds/60)*360)+90;
    let minutesDegree= ((minutes/60)*360)+90;
    let hoursDegree= ((hours/12)*360)+90;
    secondHand.style.transform=`rotate(${secondDegree}deg)`;
    minHand.style.transform=`rotate(${minutesDegree}deg)`;
    hourHand.style.transform=`rotate(${hoursDegree}deg)`;
    console.log(seconds);
    console.log(minutes);
    console.log(minutesDegree);
}
setInterval(setSecondHand,1000);