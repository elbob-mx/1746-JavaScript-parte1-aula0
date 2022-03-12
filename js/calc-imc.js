//  VARIABLES ------------------------------------------------>
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
  tdImc.textContent = calcularIMC(peso, altura);
  }
};


// FUNCIÓN ENGLOBADA CALCULAR IMC ----------------->
function calcularIMC(peso, altura) {
  var ptImc = peso / altura**2;
  return ptImc.toFixed(2);
};