// botón adicionar -------->
var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", (e) => {
  event.preventDefault();
  var form = document.querySelector("#form-adicionar");

  var nombre = form.nombre.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var tabla = document.querySelector("#tabla-pacientes");
  
  /*
  console.log(nombre);
  console.log(peso);
  console.log(altura);
  console.log(gordura);
  */

  console.log(" ----> buena adición. ");

  pacienteTr = document.createElement("tr");
  nombreTd = document.createElement("td");
  pesoTd = document.createElement("td");
  alturaTd = document.createElement("td");
  gorduraTd = document.createElement("td");
  imcTd = document.createElement("td");

  nombreTd.textContent = nombre;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = calcularIMC(peso, altura);

  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  console.log(pacienteTr);

  tabla.appendChild(pacienteTr);

});