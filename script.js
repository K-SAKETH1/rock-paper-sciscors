let buttons = document.querySelectorAll("button")
let playerDiv = document.getElementById("player")
let computerDiv = document.getElementById("computer")
let scoreDiv = document.getElementById("score")
let gameStart = document.getElementById("start")
let btn = document.querySelector("button")
let resultDiv = document.getElementById("result")
let playerChoice = () => {
    buttons.forEach(button=>{
        button.onclick = () =>{playerGame(button.value) 
    } 
    })
}
playerChoice()

let computer;
let computerChoice = () =>{
    let opt = ["Rock","Paper","Sciscors"]
    let random = Math.floor(Math.random()*3)
    console.log(random)
    computer = opt[random]
    return computer
}
// computerChoice()
let score = 0;
let game = (playerChoice,computerChoice) =>{
   
    if (playerChoice==computerChoice) {
        score = score + 0;
    }
    else if (playerChoice=="Rock" && computerChoice =="Sciscors") {
      score = score + 1;
    }
    else if (playerChoice=="Paper" && computerChoice =="Rock") {
        score = score + 1;
    }
    else if (playerChoice=="Sciscors" && computerChoice =="Paper") {
        score = score + 1;
    }
    else{
        score = score - 1;    
    } 
   return score 
}
let playerGame = (playerChoice) =>{
    playerDiv.innerText = `Player Choice (👨) : ${playerChoice}`
    let computerFunction = computerChoice()
   let gameFunction = game(playerChoice,computer)
   computerDiv.innerText = `Computer Choice (🖥) :${computerFunction}`
   scoreDiv.innerText =`Score : ${gameFunction}`
   let winning = win(playerChoice,computer)
   resultDiv.innerText = `${winning}`
}

document.getElementById("sbutton").onclick = () =>{
    playerDiv.innerText = " "
    scoreDiv.innerText = " "
    computerDiv.innerText = " "
    resultDiv.innerText = ` `
}
 gameStart.onclick = () =>{
   document.getElementById("rbutton").classList.add("see")
   document.getElementById("pbutton").classList.add("see")
   document.getElementById("scbutton").classList.add("see")
   document.getElementById("sbutton").classList.add("see")
   gameStart.classList.add("button")
 }
let result;
let win = (playerChoice,computerChoice) =>{
    if (playerChoice==computerChoice) {
       result = "Draw...!"
    }
    else if (playerChoice=="Rock" && computerChoice =="Sciscors") {
      result = "You Won 😺"
    }
    else if (playerChoice=="Paper" && computerChoice =="Rock") {
        result = "You Won 😺"
    }
    else if (playerChoice=="Sciscors" && computerChoice =="Paper") {
        result = "You Won 😺"
    }
    else{
        result = "You Loose 😲"    
    } 
   return result 
}