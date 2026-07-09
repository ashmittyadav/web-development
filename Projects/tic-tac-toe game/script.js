console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn ="X"

// function to change turn
const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

// function to check for a win
const checkWin = ()=>{

}

// game logic
// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).foreach(element =>{
//     let e = document.querySelector('.boxtext');
//     boxtext.addEventListener('click', ()=>{
//         if(e.innerText === ''){
//             e.innerText = turn;
//             changeTurn();
//             audioTurn.play();
//             checkWin();
//             document.getElementsByClassName(turn)[0].innerText = "turn for " +turn;
//         }
//     })

// })