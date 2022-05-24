var score_element = document.getElementById("score");

var menu = document.getElementsByClassName('menu-block')[0];
var zone = document.getElementsByClassName('game-zone')[0];

var back = document.getElementById('back');

var txtSnake = document.getElementById('txt-snake');

var start_btn = document.getElementById("startBtn");
var score;

var play = false;

function restartGame() {
    
    brain_Tail = [];
    keyBlocked = "right";
    interval = 20;

    positionX = 350;
    positionY = 350;
    tail_position_X = positionX + tail_width;
    tail_position_Y = positionY;
    clearInterval(tailRun);
    clearInterval(headRun);
    
    zone.classList.add("game-zone-play");
    menu.classList.add("menu-block-hide");
    
    ctx.clearRect(0,0,700,700);
    play = false;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function start_game(){
    score = 0;
    score_element.innerHTML = `Score ${score}`;
    headRun = setInterval(moveLeft,interval);
    setTimeout(() => {
        if (play) {
            tailRun = setInterval(moveTailLeft,interval);
        }
    },1200);
    spawnFood();
}

start_btn.addEventListener('click', () => {
    if (!play) {   
        zone.classList.remove("game-zone-play");
        menu.classList.remove("menu-block-hide");
        play = true;
        start_game();
    }
})