var inp=document.getElementById("input");

function display(num1){
inp.value=inp.value+num1;

}
function equal(){
    inp.value=eval(inp.value)
}
function back(){
    inp.value=inp.value.slice(0,-1);
}
function c(){
    inp.value="";
}