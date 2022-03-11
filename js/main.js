//  VARIABLES ------------------------------------------------>

// botón adicionar -------->
var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", (e) => {
  event.preventDefault();
  var form = document.querySelector("#form-adicionar");

  var nombre = form.nombre.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;
  
  console.log(nombre);
  console.log(peso);
  console.log(altura);
  console.log(gordura);

  console.log(" ----> buena adición. ");

  pacienteTr = document.createElement("tr");
  nombreTd = document.createElement("td");
  pesoTd = document.createElement("td");
  alturaTd = document.createElement("td");
  gorduraTd = document.createElement("td");
  imcTd = document.createElement("td");
});


var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i = 0; i < pacientes.length; i++) {  

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
/* var ptImc = peso / altura**2; // fórmula índice masa corporal
tdImc.textContent = ptImc; // el contenido de tdIMC será igual al resultado de la fórmula en 'ptImc' */

var pesoEsValido = true;
var alturaEsValida = true;

//  CONDICIONALES --------------------------------------->

// si una de las condiciones se cumple, el resultado es VERDADERO
if((peso <= 0) || (peso >= 500)) {
  console.log ("----> el peso indicado no es válido");
  tdImc.textContent = "peso no válido";
  pesoEsValido = false;
  paciente.classList.add("paciente-incorrecto");
};

// si una de las condiciones se cumple, el resultado es VERDADERO
if((altura <= 0) || (altura >= 2.5)) {
  console.log ("----> la altura indicada no es válida");
  tdImc.textContent = "altura no válida";
  alturaEsValida = false;
  paciente.classList.add("paciente-incorrecto");
};

// ambas condiciones tienen que ser válidas para que proceda
if (pesoEsValido && alturaEsValida) {
  var ptImc = /*Math.floor*/ peso / altura**2; // fórmula índice masa corporal con redondeado 'floor'
  tdImc.textContent = ptImc.toFixed(2); // el contenido de tdIMC será igual al resultado de la fórmula en 'ptImc' con solo 2 decimales
}; /* else {tdImc.textContent = "datos no válidos"; }; */

};