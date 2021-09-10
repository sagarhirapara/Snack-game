const cvs=document.getElementById('snake');
const ctx=cvs.getContext("2d");
// create unit

const box = 32;

// load images  
const ground=new Image();
ground.src = "ground.png";

const foodImg=new Image();
foodImg.src="food.png";

// create snake
// snake is one type of array

let snake = [];
snake[0]= { 
    x  : 9 * box,
    y  : 10 * box 
};


// create the food

let food ={  
    x : Math.floor(Math.random() * 17 + 1) * box,
    y : Math.floor(Math.random() * 15 + 3) * box
};

// create a score

let score = 0;

var d;
// control the snake

document.addEventListener("keydown", dir);
function dir(e)
{
    console.log(e.keyCode);
    if(e.keyCode == 37 && d != "RIGHT"){
        d = "LEFT";
        console.log("y");
    }
    else if(e.keyCode == 38 && d != "DOWN"){
        d = "UP";
        console.log("y");
    }
    else if(e.keyCode == 39 && d != "LEFT"){
        d = "RIGHT";
        console.log("y");
    }
    else if(e.keyCode == 40 && d != "UP")
    {
        d = "DOWN";
        console.log("y");
    }
}
    function reStart(e)
    {
            location.reload();
            
    }

// draw everting to our canvas

function draw()
{
    ctx.drawImage(document.getElementById("ground"),0,0);
    ctx.drawImage(document.getElementById("food"),food.x,food.y);
    for(let i=0;i<snake.length;i++)
    {
        ctx.fillStyle = (i == 0)?"green":"white";
        ctx.arc(snake[i].x,snake[i].y,20,0,2 * Math.PI,false);
        ctx.strokeStyle="red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
        
    }
    
    // old head position

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(d == "LEFT")
    {snakeX = snakeX - box;console.log("harry");} 
    if(d == "UP")
    { snakeY= snakeY - box;}
    if(d == "RIGHT") 
    {snakeX= snakeX + box;}
    if(d =="DOWN") 
    {snakeY=snakeY + box;}
    if(snake[0].x == food.x && snake[0].y == food.y)
    {
        score++;
        food ={  
            x : Math.floor(Math.random() * 17 + 1) * box,
            y : Math.floor(Math.random() * 15 + 3) * box
        };
    } 
    else{
     snake.pop();
    }
    let newhead =
    {
        x : snakeX,
        y : snakeY
    }
    snake.unshift(newhead);
    if(newhead.x < box ||  newhead.y < (box * 2.5) || newhead.y > (17.5 * box) || newhead.x > 17*box)
    {
        clearInterval(game);
        ctx.fillStyle ="white";
        ctx.font = "90 Changa one";
        ctx.fillText("Tap to start",200,315);
        document.addEventListener("keypress",reStart);
    }
    
    for(i=1;i<snake.length;i++)
    {
        // if(i == snake.length)
        // {
        //     console.log("sagar hirapara")
        // }
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y)
        {
            clearInterval(game);
            ctx.fillStyle ="white";
            ctx.font = "90 Changa one";
            ctx.fillText("Tap to start",200,315);
            document.addEventListener("keypress",reStart);
            console.log("game is over");
        }

    }
    ctx.fillStyle="white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,2*box,1.7*box);
}
var game = setInterval(draw,100);

