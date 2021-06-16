let temporizador = document.getElementById('temporizador');
let iniciar = document.getElementById('iniciar');
let resetear = document.getElementById('resetear');
let grabar = documente.getElementById('grabar');
let almacenarTiempos = document.getElementById('almacenarTiempos');

let tiempo = 0;
let intervalo = 0;
let verificador = false;

init();

function init(){
    iniciar.addEventListener('clicl', iniciarContador);
    iniciar.addEventListener('clicl', resetearContador);
    iniciar.addEventListener('clicl', grabarContador);

}

function iniciarContador(){
    if(verificador == false){
        intervalo = setInterval(function (){
            tiempo += 0.01;
            temporizador.innerHTML = tiempo.toFixed(2);
        }, 10);
        verificador == true;
    }else{
        verificador = false;
        clearInterval(intervalo);
    }
}

function resetearContador(){
    verificador = false;
    tiempo = 0;
    temporizador.innerHTML = tiempo + '.00';
    clearInterval(intervalo);
    while(almacenarTiempos.firstChild){
        almacenarTiempos.removeChild(almacenarTiempos.firstChild);
    }
}

