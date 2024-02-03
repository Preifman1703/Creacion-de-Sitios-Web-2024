var cancion, numero_cancion;
cancion= new Array("0.mp3", "1.mp3", "2.mp3","3.mp3","4.mp3","5.mp3","6.mp3","7.mp3","8.mp3","9.mp3","10.mp3","11.mp3","12.mp3");

function reproducir(numero_cancion){
    location.href=cancion[numero_cancion];
}

function aleatorio(){
    numero_cancion=Math.random()*(2-0)+0;
    numero_cancion=Math.round(numero_cancion);
    location.href=cancion[numero_cancion];
}