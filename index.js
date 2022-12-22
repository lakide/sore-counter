let countEl1 = document.getElementById("count-el1")
let countEl2 = document.getElementById("count-el2")
let clearEl = document.getElementById("clr")
let count1 = 0


clearEl.addEventListener('dblclick', function () {
    clear()
})

function add1() {
    count1 += 1
    updateScoreBoard();
}
function add2() {
    count1 += 2
    updateScoreBoard();
}
function add3() {
    count1 += 3
    updateScoreBoard();
}
function sub1(){
    count1 -= 1
    updateScoreBoard();
}
function sub2(){
    count1 -= 2
    updateScoreBoard();
}
function sub3(){
    count1 -= 3
    updateScoreBoard();
}

let count2 = 0


function add1g() {
    count2 += 1
    updateScoreBoard();
}
function add2g() {
    count2 += 2
    updateScoreBoard()
}
function add3g() {
    count2 += 3
    updateScoreBoard()
}
function sub1g(){
    count2 -= 1
    updateScoreBoard();
}
function sub2g(){
    count2 -= 2
    updateScoreBoard();
}
function sub3g(){
    count2 -= 3
    updateScoreBoard();
}

function updateScoreBoard() {
    countEl1.textContent = count1
    countEl2.textContent = count2
}
function clear() {
    count1 = 0;
    count2 = 0;
    count3 = 0;
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    countEl3.textContent = count3
    updateScoreBoard()
}


// ==========timer==============

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    // document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        // document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}

// =============period===============

let countEl3 = document.getElementById("count-el3")
count3 = 0

function addp() {
    count3 += 1
    countEl3.textContent = count3
}
function subp() {
    count3 -= 1
    countEl3.textContent = count3
}