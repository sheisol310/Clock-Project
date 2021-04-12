const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//move the arm 
function runTheClock() {

    //Date object
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour: " + hr + " Mintue: " + min + " Second: ");

    //convert the currect time to actul degree that shows on Clock

    let hrPosition = (hr*360/12) + (min*(360/60)/12);
    let minPostion = (min*360/60) + (sec*(360/60)/60); 
    let secPosition = sec*360/60;
    //(sec*(360/60)/60) 
    //say 55m:40s, for this time
    //minute arm won't point to the position of 11 on the clock
    //instead, it will pass 11 a little bit. 
    //so we need to add some degree to show that. 


    //move hr,min, sec arms to correct deg respect to the current time
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPostion + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

//https://www.w3schools.com/jsref/met_win_setinterval.asp
//calls a function or evaluates an expression at specified intervals (in milliseconds).
//1000 ms = 1 second
var interval = setInterval(runTheClock, 1000);