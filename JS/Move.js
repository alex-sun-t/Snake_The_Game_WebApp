    var positionX = 350;
    var positionY = 350;
    var interval = 20;
    var speed = 1;
    const size = 1;
 
    var ctx = document.getElementById("place-game").getContext('2d');
    ctx.lineWidth = 10;

    var headRun = null;

    var pause = false;

    var keyBlocked = "right";

    document.addEventListener('keydown', (event) => {
        var keyName = event.key;

        console.log(keyName);

        if (play) {
            
            
            if(keyBlocked != "left" && keyName == 'ArrowLeft'){
                moveStop();
                headRun = setInterval(moveLeft,interval);
                keyBlocked = "right";
                brain_Tail.push(new BrainTail(positionX,positionY,"left"));
                console.log(brain_Tail[0].getPositionX() + " " + brain_Tail[0].getPositionY() + " " + brain_Tail[0].getDirection());
            }

            if(keyBlocked != "right" && keyName == 'ArrowRight'){
                moveStop();
                headRun = setInterval(moveRight,interval);
                keyBlocked = "left";
                brain_Tail.push(new BrainTail(positionX,positionY,"right"));
                console.log(brain_Tail[0].getPositionX() + " " + brain_Tail[0].getPositionY() + " " + brain_Tail[0].getDirection());
            }

            if( keyBlocked != "up" && keyName == 'ArrowUp'){
                moveStop();
                headRun = setInterval(moveUp,interval);
                keyBlocked = "down";
                brain_Tail.push(new BrainTail(positionX,positionY,"up"));
                console.log(brain_Tail[0].getPositionX() + " " + brain_Tail[0].getPositionY() + " " + brain_Tail[0].getDirection());
            }
        
            if (keyBlocked != "down" && keyName == 'ArrowDown') {
                moveStop();
                headRun = setInterval(moveDown,interval);
                keyBlocked = "up";
                brain_Tail.push(new BrainTail(positionX,positionY,"down"));
                console.log(brain_Tail[0].getPositionX() + " " + brain_Tail[0].getPositionY() + " " + brain_Tail[0].getDirection());
            }
        }

    //     if(keyName == " "){
    //         pause = !pause;
    //         if (pause) {
    //            moveStop();
    //         } else {
    //            if (keyBlocked == "down") {
    //                headRun = setInterval(moveUp,interval);
    //            }
    //             if (keyBlocked == "up") {
    //                headRun = setInterval(moveDown,interval);
    //             }
    //             if (keyBlocked == "left") {
    //                 headRun = setInterval(moveRight,interval);
    //             }
    //             if (keyBlocked == "right") {
    //                 headRun = setInterval(moveLeft,interval);
    //             }
    //        }
    //    }

   });

    function moveStop(){
        clearInterval(headRun);
    }


function moveRight() {

    ctx.beginPath();
    ctx.arc(positionX,positionY,size,0,Math.PI*2,true);
    positionX+=speed;
    ctx.stroke();

    if (tail_detected(positionX,positionY,7) || positionX == 700) {
        restartGame();
    }  
    foodDetected();
}

function moveLeft() {

    ctx.beginPath();
    ctx.arc(positionX,positionY,size,0,Math.PI*2,true);
    positionX-=speed;
    ctx.stroke();    

    
    if (tail_detected(positionX,positionY,7) || positionX == 0) {
        restartGame();
    }
    foodDetected();
}

function moveUp() {

    ctx.beginPath();
    ctx.arc(positionX,positionY,size,0,Math.PI*2,true);
    positionY-=speed;
    ctx.stroke();
    if (tail_detected(positionX,positionY,7) || positionY == 0) {
        restartGame();
    }  
    foodDetected();
}

function moveDown() {

    ctx.beginPath();
    ctx.arc(positionX,positionY,size,0,Math.PI*2,true);
    positionY+=speed;
    ctx.stroke();

    if (tail_detected(positionX,positionY,7) || positionY == 700) {
        restartGame();
    } 
    foodDetected();
}