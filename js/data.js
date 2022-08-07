import {user_main} from './main.js';



//base de datos
export let user = [
    [100,	'<a href="https://imgur.com/6UkPuJu"><img src="https://i.imgur.com/6UkPuJu.png" title="source: imgur.com" /></a>'],
    [101,	'<a href="https://imgur.com/HITKqfF"><img src="https://i.imgur.com/HITKqfF.png" title="source: imgur.com" /></a>'],
    [102,	'<a href="https://imgur.com/jGefuPW"><img src="https://i.imgur.com/jGefuPW.png" title="source: imgur.com" /></a>'],
    [103,	'<a href="https://imgur.com/CsS9Y6a"><img src="https://i.imgur.com/CsS9Y6a.png" title="source: imgur.com" /></a>'],
    [104,	'<a href="https://imgur.com/cNSKdUs"><img src="https://i.imgur.com/cNSKdUs.png" title="source: imgur.com" /></a>'],
    [105,	'<a href="https://imgur.com/8rfmGhc"><img src="https://i.imgur.com/8rfmGhc.png" title="source: imgur.com" /></a>'],
    [106,	'<a href="https://imgur.com/nFOIqiu"><img src="https://i.imgur.com/nFOIqiu.png" title="source: imgur.com" /></a>'],
    [107,	'<a href="https://imgur.com/NGCYW4B"><img src="https://i.imgur.com/NGCYW4B.png" title="source: imgur.com" /></a>'],
]

// root
let root_usuario = document.querySelector("#root");



// variable para saber la posicion dentro del arreglo
let posicion = 0;
// mostrando el primer nombre
document.getElementById("usuario").innerHTML = user[posicion][1];
// funcion para mover hacia la derecha, avanzar
const mover_derecha = () => {
if(posicion < user.length-1){
    posicion++;
}
 document.getElementById("usuario").innerHTML = user[posicion][1];
}

// funcion para mover hacia la izquierda, regresar
const mover_izquierda = () => {
    if(posicion > 0) {
        posicion--;
    }
    document.getElementById("usuario").innerHTML = user[posicion][1];
}

document.getElementById("segundo-bt").onclick = function (){
    mover_derecha();
}
document.getElementById("primer-bt").onclick = function (){
    mover_izquierda();
}

//INERT HTML ROOT
function mostrar_usuarios () {
    
root_usuario.innerHTML = '<h1>' + user_main[posicion].nikname + '</h1>'+
'<h1>' + user_main[posicion].name + '</h1>' +
'<h1>' + user_main[posicion].adress + '</h1>' + 
'<h1>' + user_main[posicion].email + '</h1>' + 
'<h1>' + user_main[posicion].phone + '</h1>';


};

document.getElementById('bt_user').addEventListener('click', mostrar_usuarios);