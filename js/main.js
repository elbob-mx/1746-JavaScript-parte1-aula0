var paciente = document.querySelector("#paciente-uno");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

// console check --------------->

console.log(paciente);

console.log(tdPeso);
console.log(peso);

console.log(tdAltura);
console.log(altura);

// fórmula índice masa corporal
var imc = peso / altura**2;
console.log(imc);