let thisH1 = document.getElementById("random_h1");
let thisP = document.getElementById("random_p");
let thisDiv = document.getElementById("random_div");

function mouseIn(){
    thisH1.innerHTML = "你進來了";
}
function mouseOut(){
    thisH1.innerHTML = "你出去了";
    thisP.innerHTML = "";
}

function mouseMove(e){
    thisP.innerHTML = "你在裡面走來走去。位置:"+e.clientX + "," + e.clientY;
}
function mouseClick(){
    thisP.innerHTML = "點屁點";
}
function mouseUp(){
    thisP.innerHTML = "就跟妳說放手";
}

thisDiv.addEventListener("mouseover",mouseIn);
thisDiv.addEventListener("mouseout",mouseOut);
thisDiv.addEventListener("mousemove",mouseMove);
thisDiv.addEventListener("mousedown",mouseClick);
thisDiv.addEventListener("mouseup",mouseUp);