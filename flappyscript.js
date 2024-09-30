//Board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird
let birdWidth = 34;
let birdHeigth = 24;
let birdX = boardWidth/8;
let birdY = boardHeight/8;

let bird ={
    x :birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeigth,
}

window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    //draw the bird here
    //context.fillStyle ="green";
    //context.fillRect(bird.x,bird.y,bird.height,bird.width);

    //loadimage
    birdImg = new Image();
    birdImg.src = "./flappybird.png";
    birdImg.onload = function(){
        context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);
    }
}