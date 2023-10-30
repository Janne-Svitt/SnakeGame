const addBox1 = document.createElement("div");
const addBox2 = document.createElement("div");
const addBox3 = document.createElement("div");
const addContentBox = document.createElement("div");

const gameAreaBox = document.getElementById("gameArea");

menu();

function menu(){
    gameAreaBox.append(addContentBox);
    addContentBox.append(addBox1);
    addContentBox.append(addBox2);
    addContentBox.append(addBox3);

    addContentBox.setAttribute("id", "contentBox")
    addBox1.innerHTML=`<p id="textBox" onclick=gameStart()>Start Game</p>`
    addBox2.innerHTML=`<p id="textBox" onclick=howToPlay()>How To Play</p>`
    addBox3.innerHTML=`<p id="textBox">Settings</p>`

    
    // ------- How To Play -------
};


function removeTextBox(){
    gameAreaBox.children[2].remove();
}

function howToPlay(){
    addContentBox.children[0].remove();
    addContentBox.children[0].remove();
    addContentBox.children[0].remove();
    
    addContentBox.setAttribute("id", "contentBoxImg");
    
    addContentBox.innerHTML="<div id=backBtn onclick=menuBack()><i>X</i></div>"
};

function menuBack(){
    addContentBox.children[0].remove();
    menu();
}