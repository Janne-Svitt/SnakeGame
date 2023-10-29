let bugFix = 0;
let gamePoints = 0;
const adder = 10;
let leftAdd = 200;
let topAdd = 200;
let boxColor ="red";
let activeKey = 1;
let snakeAcc = 90;
let counter = 0;
let snakeBodyAddLength = 0;
let gameAreaFoodPos_Left = Math.round((Math.random() * 49))*10;
let gameAreaFoodPos_Top = Math.round((Math.random() * 49))*10;
console.log(gameAreaFoodPos_Left);
console.log(gameAreaFoodPos_Top);
var snakeBodyPos = [];
document.getElementById("gamePoints").innerHTML=`GamePoints: ${gamePoints} ⭐`;

alert(`
Controls:
W=Up
S=Down
D=Right
A=Left
`);

posPlayer();
posFood();

let interval1 =  setInterval(()=>{
    if (leftAdd===490){
        leftAdd = -10;
        return;
    } else {
        leftAdd += adder
        posPlayer()
    };
}, snakeAcc) 

let interval2 = setInterval(()=>{
    if(leftAdd===0){
        return;
    } else {
        leftAdd -= adder;
        posPlayer();
    };
}, snakeAcc)

let interval3 = setInterval(()=>{
    if(topAdd===0){
        return;
    } else {
        topAdd -= adder
        posPlayer()
    }
}, snakeAcc)

let interval4 = setInterval(()=>{
    if(topAdd===490){
        return;
    } else {
        topAdd += adder
        posPlayer()
    }
}, snakeAcc)

clearInterval(interval2)
clearInterval(interval3)
clearInterval(interval4)

// setInterval(()=>{
// document.getElementById("gameArea").children[1].remove();
// }, 60);

// ASWD Kontroller
window.addEventListener("keydown", (event) =>{
    switch(event.code){
        case "KeyD":
            if(activeKey!=1){
                clearInterval(interval2)
                clearInterval(interval3)
                clearInterval(interval4)
                interval1 =  setInterval(()=>{
                    if (leftAdd===490){
                        leftAdd = -10;
                        return;
                    } else {
                        leftAdd += adder
                        posPlayer()
                    };
                }, snakeAcc)
                setTimeout(()=>{activeKey=1;},100)
                break;
            } else {
                break;
            }

        case "KeyA":
            if(activeKey!=1){
                clearInterval(interval1)
                clearInterval(interval3)
                clearInterval(interval4)
                interval2 = setInterval(()=>{
                    if(leftAdd===0){
                        leftAdd = 500;
                        return;
                    } else {
                        leftAdd -= adder;
                        posPlayer()
                    };
                }, snakeAcc)
                setTimeout(()=>{activeKey=1;},100)
                break;
            } else {
                break;
            }
        case "KeyW":
            if(activeKey!=2){
                clearInterval(interval1)
                clearInterval(interval2)
                clearInterval(interval4)
                interval3 = setInterval(()=>{
                    if(topAdd===0){
                        topAdd= 500;
                        return;
                    } else {
                        topAdd -= adder
                        posPlayer()
                    }
                }, snakeAcc)
                setTimeout(()=>{activeKey=2;},100)
                break;
            } else {
                break;
            }

        case "KeyS":
            if(activeKey!=2){
                clearInterval(interval1)
                clearInterval(interval2)
                clearInterval(interval3)
                interval4 = setInterval(()=>{
                    if(topAdd===490){
                        topAdd = -10;
                        return;
                    } else {
                        topAdd += adder
                        posPlayer()
                    }
                }, snakeAcc)
                setTimeout(()=>{activeKey=2;},100)
                break;
            } else {
                break;
            } 
    };
})


function posPlayer(){
        document.getElementById("box").style.cssText=`
        height: 10px;
        width: 10px;
        background-color: green;
        position: absolute;
        left: ${leftAdd}px;
        top: ${topAdd}px;
        z-index:999;
        `;
        addSnakeBody();
        
        if(counter>snakeBodyAddLength){
            document.getElementById("gameArea").children[2].remove();
            console.log(counter);
            console.log(checkCollision());
            snakeBodyPos.push(`${topAdd}x${leftAdd}`);
            if(snakeBodyPos.length>snakeBodyAddLength){
                snakeBodyPos.shift();
            }
            console.log(snakeBodyPos);
            
        } else {
            counter +=1;
            return;
        }


}

function posFood(){
    document.getElementById("boxFood").style.cssText=`
    height: 10px;
    width: 10px;
    background-color: blue;
    position: absolute;
    left: ${gameAreaFoodPos_Left}px;
    top: ${gameAreaFoodPos_Top}px;
    `
}


function clearAllIntervals(){
    let interval1;
    let interval2;
    let interval3;
    let interval4;
    clearInterval(interval1)
    clearInterval(interval2)
    clearInterval(interval3)
    clearInterval(interval4)
}


function addSnakeBody(){
    let snakeBodyAdd = document.createElement("div")
    document.getElementById("gameArea").append(snakeBodyAdd);
    snakeBodyAdd.style.cssText=`
    height: 10px;
    width: 10px;
    background-color: ${boxColor};
    position: absolute;
    left: ${leftAdd}px;
    top: ${topAdd}px;
    `;
    if(leftAdd===gameAreaFoodPos_Left && topAdd===gameAreaFoodPos_Top){
        snakeBodyAddLength+=1;
        gameAreaFoodPos_Left = Math.round((Math.random() * 49))*10;
        gameAreaFoodPos_Top = Math.round((Math.random() * 49))*10;
        posFood();
        gamePoints += 100
        document.getElementById("gamePoints").innerHTML=`GamePoints: ${gamePoints} ⭐`;
    } else {
        return;
    };  
} 


function checkCollision(){
    if(snakeBodyPos.find((element) => element ==`${topAdd}x${leftAdd}`)){
        alert("You hit your body😭 Score: "+gamePoints+" ⭐");
        location.reload()
    }
};
