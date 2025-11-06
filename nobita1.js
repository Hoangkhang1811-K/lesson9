function upArowPressed(){
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function downArowPressed(){
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function leftArowPressed(){
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function rightArowPressed(){
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}
debugger;
function  moveSelection(evt){
    switch (evt.keyCode){
        case 37:
            leftArowPressed();
            break;
        case 38:
            rightArowPressed();
            break;
        case 39:
            upArowPressed();
            break;
        case 40:
            downArowPressed();
            break;
    }
}
function doReady(){
    window.addEventListener('keydown', moveSelection);
}