//==========4=============

const suvenir = 75,
    bezdelushka = 112;
let suvenirKol = prompt("Cколько сувениров купили?"),
    bezdelushkaKol = prompt("Cколько безделушек купили?");

let sum = (suvenir * suvenirKol + bezdelushka * bezdelushkaKol);
let sumKg = sum / 1000;
alert("Oбщий вес посылки "  + sumKg + "кг");
document.write(`Oбщий вес посылки ${sumKg}кг`);
console.log(`Oбщий вес посылки ${sumKg}кг`);