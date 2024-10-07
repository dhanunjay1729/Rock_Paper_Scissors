let options = ["rock", "paper", "scissor"];
let computerpic = document.querySelector('.question');
let line = document.getElementById('line');

document.querySelector('.rock').addEventListener('click', () => {
    let i = Math.floor(Math.random() * 3);
    let computerOption = options[i];

    computerpic.classList.remove('qrock', 'qpaper', 'qscissor'); // Remove previous classes
    if(computerOption === "rock"){
        computerpic.classList.add('qrock');
        line.textContent = "DRAW";
    }
    else if(computerOption === "paper"){
        computerpic.classList.add('qpaper');
        line.textContent = "YOU LOST";
    }
    else{
        computerpic.classList.add('qscissor');
        line.textContent = "YOU WON";
    }
});

document.querySelector('.paper').addEventListener('click', () => {
    let i = Math.floor(Math.random() * 3);
    let computerOption = options[i];
    let line = document.getElementById('line');

    computerpic.classList.remove('qrock', 'qpaper', 'qscissor'); // Remove previous classes
    if(computerOption === "paper"){
        computerpic.classList.add('qpaper');
        line.textContent = "DRAW";
    }
    else if(computerOption === "scissor"){
        computerpic.classList.add('qscissor');
        line.textContent = "YOU LOST";
    }
    else{
        computerpic.classList.add('qrock');
        line.textContent = "YOU WON";
    }
});

document.querySelector('.scissor').addEventListener('click', () => {
    let i = Math.floor(Math.random() * 3);
    let computerOption = options[i];
    let line = document.getElementById('line');

    computerpic.classList.remove('qrock', 'qpaper', 'qscissor'); // Remove previous classes
    if(computerOption === "scissor"){
        computerpic.classList.add('qscissor');
        line.textContent = "DRAW";
    }
    else if(computerOption === "rock"){
        computerpic.classList.add('qrock');
        line.textContent = "YOU LOST";
    }
    else{
        computerpic.classList.add('qpaper');
        line.textContent = "YOU WON";
    }
});

document.querySelector('button').addEventListener('click', () =>{
    computerpic.classList.remove('qrock', 'qpaper', 'qscissor'); // Remove previous classes
    line.textContent = "ROCK PAPER SCISSOR";
});