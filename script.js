console.log("Welcome to Tic-Tac-Toe");
let music = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3');
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let boxes = document.getElementsByClassName('box'); // Get box elements
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";

            // Add winning line styling
            boxes[e[0]].style.backgroundColor = "darkpink";
            boxes[e[1]].style.backgroundColor = "darkpink";
            boxes[e[2]].style.backgroundColor = "darkpink";
        }
    });
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

// Reset functionality
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

    
    Array.from(boxes).forEach(element => {
        element.style.backgroundColor = "";
    });
});


document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
});