const display=document.getElementById("display");
function appendValue(value){
    display.value += value;
}

// clear field
function clearField(){
    display.value="";
}

function delField() {
    display.value = display.value.slice(0, -1);
}
function calculation(){
    display.value=eval(display.value);
}
