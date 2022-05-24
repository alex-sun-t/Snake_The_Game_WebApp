var tail_width = 0;

var tailSpeed = 1;

var tail_position_X = positionX + tail_width;
var tail_position_Y = positionY;

var tailRun = null;

var tailEndDirection = "left";

var brain_Tail = [];

function moveTail(){
    if (brain_Tail[0] != null) { 
        if(brain_Tail[0].getPositionX() == tail_position_X && brain_Tail[0].getPositionY() == tail_position_Y){           
            clearInterval(tailRun);
            if(brain_Tail[0].getDirection() == "left"){
                brain_Tail.shift();
                tailRun = setInterval(moveTailLeft,interval);
            }
            else if(brain_Tail[0].getDirection() == "right"){
                brain_Tail.shift();
                tailRun = setInterval(moveTailRight,interval);
            }
            else if(brain_Tail[0].getDirection() == "up"){
                brain_Tail.shift();
                tailRun = setInterval(moveTailUp,interval);
            }
            else if(brain_Tail[0].getDirection() == "down"){
                brain_Tail.shift();
                tailRun = setInterval(moveTailDown,interval);
            }
        }
    }
}

function tail_detected(posX,posY,size){
    if (brain_Tail.length > 0){
        for (let i = 0; i < brain_Tail.length -1; i++) {
            if (brain_Tail[i].getDirection() == "left") {
                if (brain_Tail[i].getPositionX() > posX && brain_Tail[i + 1].getPositionX() < posX && brain_Tail[i].getPositionY() - size <= posY && brain_Tail[i].getPositionY() + size >= posY) {
                    return true;
                }
            }
            else if (brain_Tail[i].getDirection() == "right") {
                if (brain_Tail[i].getPositionX() < posX && brain_Tail[i + 1].getPositionX() > posX && brain_Tail[i].getPositionY() - size <= posY && brain_Tail[i].getPositionY() + size >= posY) {
                    return true;
                }
            }
            else if (brain_Tail[i].getDirection() == "up") {
                if (brain_Tail[i].getPositionY() > posY && brain_Tail[i + 1].getPositionY() < posY && brain_Tail[i].getPositionX() - size <= posX && brain_Tail[i].getPositionX() + size >= posX) {
                    return true;
                }
            }
            else if (brain_Tail[i].getDirection() == "down") {
                if (brain_Tail[i].getPositionY() < posY && brain_Tail[i + 1].getPositionY() > posY && brain_Tail[i].getPositionX() - size <= posX && brain_Tail[i].getPositionX() + size >= posX) { 
                    return true;
                }
            }
        }
        
        if (brain_Tail[0] != null) {
            
            if (tailEndDirection == "left" && tail_position_X > posX && brain_Tail[0].getPositionX() < posX && positionY >=  tail_position_Y - size && posY <= tail_position_Y + size) {
                return true;
            }
            if (tailEndDirection == "right" && tail_position_X < posX && brain_Tail[0].getPositionX() > posX && positionY >= tail_position_Y - size && posY <= tail_position_Y + size ){
                return true;
            }
            else if(tailEndDirection == "down" && tail_position_Y < posY && brain_Tail[0].getPositionY() > posY && posX >= tail_position_X - size && posX <= tail_position_X + size ){
                return true;
            }
            else if(tailEndDirection == "up" && tail_position_Y > posY && brain_Tail[0].getPositionY() < posY && posX >= tail_position_X - size && posX <= tail_position_X + size){
                return true;
            } 
        }
    }
    return false;

}


function moveTailLeft(){
    tailEndDirection = "left";
    
    ctx.clearRect(tail_position_X + 1,tail_position_Y - 8,8,15);
    ctx.beginPath();
    ctx.arc(tail_position_X,tail_position_Y,size,0,Math.PI*2,true);
    tail_position_X-=tailSpeed;
    ctx.stroke();
    
    moveTail();
}

function moveTailRight() {
    tailEndDirection = "right";
    ctx.clearRect(tail_position_X - 8,tail_position_Y - 8,7,15);
    ctx.beginPath();
    ctx.arc(tail_position_X,tail_position_Y,size,0,Math.PI*2,true);
    tail_position_X+=tailSpeed;
    ctx.stroke();
    moveTail();
}

function moveTailUp() {
    tailEndDirection = "up";
    ctx.clearRect(tail_position_X - 8,tail_position_Y + 1,15,8);
    ctx.beginPath();
    ctx.arc(tail_position_X,tail_position_Y,size,0,Math.PI*2,true);
    tail_position_Y-=tailSpeed;
    ctx.stroke();
    moveTail();
}

function moveTailDown() {
    tailEndDirection = "down";
    ctx.clearRect(tail_position_X - 8,tail_position_Y - 8,15,7);
    ctx.beginPath();
    ctx.arc(tail_position_X,tail_position_Y,size,0,Math.PI*2,true);
    tail_position_Y+=tailSpeed;
    ctx.stroke();
    moveTail();
}





class BrainTail{
    constructor(position_X,position_Y,direction){
        this.position_X = position_X;
        this.position_Y = position_Y;
        this.direction = direction;
    }

    getPositionX() {
        return this.position_X;
    }

    getPositionY() {
        return this.position_Y;
    }

    getDirection(){
        return this.direction;
    }
}

