let scoreHome = document.getElementById("scoreHome");
let scoreGuest = document.getElementById("scoreGuest")
let scoreH = 0;
let scoreG = 0;

function plusOneH(){
scoreH += 1;
scoreHome.textContent = scoreH;    
}

function plusTwoH(){
scoreH += 2;
scoreHome.textContent = scoreH;    
}

function plusThreeH(){
scoreH += 3;
scoreHome.textContent = scoreH;    
}

function plusOneG(){
scoreG += 1;
scoreGuest.textContent = scoreG;    
}

function plusTwoG(){
scoreG += 2;
scoreGuest.textContent = scoreG;    
}

function plusThreeG(){
scoreG += 3;
scoreGuest.textContent = scoreG;    
}

function newGame(){
    scoreH=0;
    scoreG=0;
    scoreHome.textContent= scoreH;
    scoreGuest.textContent= scoreG;
}

function leader(){
    if (scoreH > scoreG) {}
}