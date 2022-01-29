//==========5============
let a = prompt("Выведите целое число");
a = Number(a);
let b = prompt("Выведите целое число");
b = Number(b);
document.write( + (a + b) + "<br>");
document.write( + (a - b) + "<br>");
document.write( + (a * b) + "<br>");
document.write( + (a / b) + "<br>");
document.write( + (a % b) + "<br>");
document.write( + (a ** b));

console.log(`сумма a и b = ${a + b}`);
console.log(`разница между a и b = ${a - b}`);
console.log(`произведение a и b = ${a * b}`);
console.log(`частное от деления a на b = ${a / b}`);
console.log(`остаток от деления a на b = ${a % b}`);
console.log(`результат возведения числа a в степень b = ${a ** b}`);