var distanciaAnoLuz = prompt("Olá! Quantos anos luz você irá viajar?");
var anoLuzKm = 9.461 * Math.pow(10, 12);
var distanciaKm = distanciaAnoLuz * anoLuzKm;


var tempoViagem = Math.trunc(distanciaKm / 24 / 365); 

alert("Você terá um percursso de  " +
    distanciaKm +
    " km, em " +
    tempoViagem +
    " de viajem. Tenha um bom passeio!"
);