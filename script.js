let moveEl = document.getElementById("move-el")
let goalEl = document.getElementById("goal-el")
let historyEl = document.getElementById("history-el")
let currentEl = document.getElementById("current-el")
let goalNum = 2
let moveNum = 0 
let currentPress = ""

goalEl.textContent = goalNum

function increment() {

    moveNum += 1 
    moveEl.textContent = moveNum

}

function addSymbol(symbol){
    increment();
    console.log(symbol);
    currentPress += symbol
    console.log(currentPress)
    currentEl.textContent = currentPress
}

function test() {
    console.log("TEST WORKS")
}

function enterPress(){
    historyEl.textContent += currentPress + "|"
    currentPress = " "
    currentEl.textContent = currentPress
}
