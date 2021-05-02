let timer = document.getElementById("timer");
let userInput = document.getElementById("userInput");
let hint = document.getElementById("hint");
let button = document.getElementById("enter");
let reloadButton = document.getElementById("restart");;
let count = 10;

timer.innerHTML = count;
button.addEventListener("click", checkPassword);
let myVar = setInterval(myTimer, 1000);

function myTimer(){
    count--;
    timer.innerHTML = count;
    if(count==0){
        hint.innerHTML = "Gamer Over!";
        clearInterval(myVar);
        // reloadButton.addEventListener("click",timeOut);
    }
    
}
reloadButton.addEventListener("click",timeOut);
function timeOut(){
    window.location.reload();
}

function checkPassword(){
    hint.innerHTML = "";
    if(count!=0){
    if(parseInt(userInput.value)==1234){
        alert("You got it!");
        // clearInterval(myVar);
        clearInterval(myVar).onclick = window.location.reload();
        // window.location.reload();
    }else{
        hint.innerHTML = "Try again!";
    }
    userInput.value = null;
    // window.location.reload();
    reloadButton.addEventListener("click",timeOut);
}}