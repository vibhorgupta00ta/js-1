const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let IntervalID
const startChangingColor=function(){
    if(!IntervalID){
        IntervalID=setInterval(changeBgColor,1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
}
const stopChangingColor=function(){
    clearInterval(IntervalID);
    IntervalID=null;
}

let clickButton=0
const start=document.querySelector('#start').addEventListener('click',startChangingColor);
const stop=document.querySelector('#stop').addEventListener('click',stopChangingColor);