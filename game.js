let gameContext = document.getElementById("game").getContext("2d");
//hcn chay doc
let xPosition1 = 20;
let yPosition1 = 20;
let width1 = 150;
let height1 =100;

let gameTopPostion=0;
let gameBottomPosition= 600;
let timeLoop1=10;

let rect1 = new Rectangle(xPosition1, yPosition1, width1, height1);

function drawRect1(){
    gameContext.beginPath();
    gameContext.fillStyle ="#fa4b2a";
    gameContext.fillRect(rect1.x, rect1.y, rect1.w, rect1.h);
}

let yDistance =1;
function moveRect1(){
    // xoa hinh cu di
    gameContext.clearRect(rect1.x, rect1.y, rect1.w, rect1.h);

    let isTouchBottom = rect1.y + rect1.h >gameBottomPosition;
    let isTouchTop = rect1.y <gameTopPostion;
    if(isTouchBottom || isTouchTop || isCollision(rect1, rect2) ){
        yDistance = -yDistance;    
    }
    rect1.y += yDistance;
    drawRect1();
}

setInterval(moveRect1, timeLoop1);

//hcn chay ngang

let xPosition2 = 400;
let yPosition2 = 20;
let width2 = 150;
let height2 =100;

let gameLeftPostion=0;
let gameRightPosition= 800;
let timeLoop2=10;

let rect2 = new Rectangle(xPosition2, yPosition2, width2, height2);

function drawRect2(){
    gameContext.beginPath();
    gameContext.fillStyle ="#2596be";
    gameContext.fillRect(rect2.x, rect2.y, rect2.w, rect2.h);
}
drawRect2();

let xDistance2 =1;
function moveRect2(){
    // xoa hinh cu di
    gameContext.clearRect(rect2.x, rect2.y, rect2.w, rect2.h);

    let isTouchRight = rect2.x + rect2.w >gameRightPosition;
    let isTouchLeft = rect2.x <gameLeftPostion;
    if(isTouchLeft || isTouchRight || isCollision(rect1, rect2) ){
        xDistance2 = -xDistance2;    
    }
    rect2.x += xDistance2;
    drawRect2();
}

setInterval(moveRect2, timeLoop2);
