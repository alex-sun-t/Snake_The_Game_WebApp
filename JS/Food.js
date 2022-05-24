var ctx = document.getElementById('place-game').getContext('2d');

var food_position_X;
var food_position_Y;

function spawnFood(){
    var tail_NotDetected = false;
    while(tail_NotDetected == false)  {
        food_position_X = getRandomInt(0,680);
        food_position_Y = getRandomInt(0,680);
        if (tail_detected(food_position_X,food_position_Y,15) == false) {
            tail_NotDetected = true;
        }
    }
    ctx.beginPath();
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(food_position_X,food_position_Y,7,7);
}

function foodDetected(){
    if(food_position_X + 17 >= positionX && food_position_X - 7 <= positionX && food_position_Y + 17 >= positionY && food_position_Y - 7 <= positionY ){
        ctx.clearRect(food_position_X,food_position_Y,7,7);
        spawnFood();
        tailSpeed = 0;
        setTimeout(() => {
            tailSpeed = speed;
        },500);
        interval--;
        score+= 100;
        score_element.innerHTML = `Score: ${score}`;
    }
}