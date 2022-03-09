//  VARIABLES ------------------------------------------------>
var paciente = document.querySelector("#paciente-uno");

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
if((peso < 0) || (peso >= 500)) {
  console.log ("----> el peso indicado no es válido");
  tdPeso.textContent = "peso no válido";
  pesoEsValido = false;
};

// si una de las condiciones se cumple, el resultado es VERDADERO
if((altura < 0) || (altura >= 2.5)) {
  console.log ("----> la altura indicada no es válida");
  tdAltura.textContent = "altura no válida";
  alturaEsValida = false;
};

// ambas condiciones tienen que ser válidas para que proceda
if (pesoEsValido && alturaEsValida) {
  var ptImc = peso / altura**2; // fórmula índice masa corporal
  tdImc.textContent = ptImc; // el contenido de tdIMC será igual al resultado de la fórmula en 'ptImc'
} else {tdImc.textContent = "datos no válidos";
};


// console check --------------->
/* console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(tdAltura);
console.log(altura);
console.log(tdImc);
console.log(ptImc); */