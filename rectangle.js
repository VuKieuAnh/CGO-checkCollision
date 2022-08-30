class Rectangle{
    constructor(x, y, width, height){
        this.x = x;
        this.y= y;
        this.w = width;
        this.h = height;
    }
}

function isCollision(rect1, rect2){
    let distX = (rect1.x + (rect1.w/2)) - (rect2.x + (rect2.w)/2);
    if (distX < 0)
        distX = -distX;

    const distW = (rect1.w + rect2.w)/2;

    let distY =(rect1.y + (rect1.h/2)) - (rect2.y + (rect2.h)/2);
    if(distY < 0)
        distY = -distY;

    const distH = (rect1.h + rect2.h)/2;

    return (distX <= distW && distY <= distH);
}