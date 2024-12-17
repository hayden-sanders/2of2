let moveEl = document.getElementById("move-el")
let goalEl = document.getElementById("goal-el")

let ansEl = document.getElementById("ans-el")
let levelEl = document.getElementById("level-el")

let historyEl = document.getElementById("history-el")
let currentEl = document.getElementById("current-el")

let goalNum = 2
let moveNum = 0 
let AnsNum = 0
let currentPress = " "
let levelNum = 1
let levelGoal = [2, 3, 5, 13, 25]
let params = new URLSearchParams(document.location.search)
let gameMode =  params.get("mode") //0 = campaign, 1 = endless
console.log(gameMode)
function clearCurrent() {
    currentPress = " "
    currentEl.textContent = currentPress
}

goalEl.textContent = goalNum
levelEl.textContent = levelNum

console.log("Level: " + levelGoal[(levelNum -1)])

function increment() {
    levelGoal.push(getRandomInt(101))
    console.log(levelGoal)
    moveNum += 1 
    moveEl.textContent = moveNum

}

function addSymbol(symbol){
    if (symbol != 2) {
    increment();
    }
    console.log(symbol);
    currentPress += symbol
    console.log(currentPress)
    currentEl.textContent = currentPress
}

function addAns() {
   console.log(ansNum);
 currentPress += ansNum
 currentEl.textContent = currentPress
    
}

function test() {
    console.log("TEST WORKS")
}

function enterPress(){
    console.log(eval(currentPress))
    ansNum = eval(currentPress)
    ansEl.textContent = ansNum
    
    historyEl.textContent += currentPress + " | "
    
    currentPress = " "
    currentEl.textContent = currentPress 

    if (ansNum == goalNum) {

        levelNum += 1
        goalNum = levelGoal[(levelNum -1)]

        console.log("Level: " + goalNum)
        

        levelEl.textContent = levelNum
        goalEl.textContent = goalNum 


        goalNum = levelGoal[(levelNum -1)]

        if (levelNum >= 6) {
            console.log("campaign complete")
            if (gameMode == 0){
                //redirect to victory screen
                window.location.href = "./endPage.html"
            }
            else {
                levelGoal.push(getRandomInt(101))
                console.log(levelGoal)
            }


        }
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
