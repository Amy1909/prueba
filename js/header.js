//VINCULAR MI MENÚ
var carpet = document.getElementById ('carpet');
var bajaopacidad = document.getElementById ('bajaopacidad');

//FUNCIÓN
function activar () {
    bajaopacidad.classList.add ("activaopacidad");
}
//SUCESO
carpet.addEventListener ('click', activar);