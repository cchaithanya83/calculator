function k7(){
    var text= document.getElementById("box");
    text.value += '7';
}
function k8(){
    var text= document.getElementById("box");
    text.value +='8';
}
function k9(){
    var text= document.getElementById("box");
    text.value +='9';
}
function k6(){
    var text= document.getElementById("box");
    text.value +='6';
}
function k5(){
    var text= document.getElementById("box");
    text.value +='5';
}
function k4(){
    var text= document.getElementById("box");
    text.value +='4';
}

function k3(){
    var text= document.getElementById("box");
    text.value +='3';
}
function k2(){
    var text= document.getElementById("box");
    text.value +='2';
}
function k1(){
    var text= document.getElementById("box");
    text.value +='1';
}
function k0(){
    var text= document.getElementById("box");
    text.value +='0';
}
function kpoint(){
    var text= document.getElementById("box");
    text.value +='.';
}
function kplus(){
    var text= document.getElementById("box");
    text.value +='+';
}

function kminus(){
    var text= document.getElementById("box");
    text.value +='-';
}
function kmul(){
    var text= document.getElementById("box");
    text.value +='*';
}
function kdiv(){
    var text= document.getElementById("box");
    text.value +='/';
}
function keq(){
    var text= document.getElementById("box").value;   
    var v = eval(text)
    document.getElementById("box").value=v;
    
}
function kper(){
    var text= document.getElementById("box");
    text.value +='%';

}
function clc(){
    var text= document.getElementById("box");
    text.value ='';
}