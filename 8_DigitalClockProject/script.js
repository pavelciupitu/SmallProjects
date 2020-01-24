
function showTime() {

    let date = new Date();
    let hours = date.getHours();//0-23
    let minutes = date.getMinutes()//0-59
    let seconds = date.getSeconds()//0-59

    let formatHours = convertFormat(hours)

    hours = checkTime(hours)

    hours = addZero(hours)
    minutes = addZero(minutes)
    seconds = addZero(seconds)
    document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`

}

function convertFormat(time) {
    let format = 'AM'
    if (time >= 12) {
        format = 'PM'
    }
    return format;
    }

function checkTime(time) {
    if (time > 12) {
        time = time - 12;
    }
    if (time === 0) {
        time = 12;
    }
    return time
}

function addZero(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time
}

showTime()
setInterval(showTime, 1000)


let n=10;
let string;
let a='"int[]{'
let b = ""
let c ='}"'
for (let i=1; i<n; i++) {
b=b+i+', '
}
string = a+b+n+c;
console.log(string);

// //To make a object like obiect
// let obiect = { 
//     1: 0,
//     2: 0,
//     3: 0,
//     4: 0,
//     5: 0,
//     6: 0,
// }

// let x={};
// let number = 30;
// for (let i = 1; i<=number; i++){
// x[i]=0;
// }
// console.log(x);

let st = "17:23:54";
let array = st.split(":");
console.log(array);
let ore = array[0]*3600;
let minute = array[1]*60;
let total = ore + minute + array[2];
console.log(total);


// new date = string;
//console.log(date.seconds);