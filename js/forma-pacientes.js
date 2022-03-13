// botón adicionar ------------>
var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", (e) => {
  event.preventDefault();

  var form = document.querySelector("#form-adicionar");

  // objeto 'paciente'
  var paciente = tomarDatosPacientes(form);
  console.log(paciente);

  // declara la variable 'tabla' tomando de la 'tabla-pacientes'
  var tabla = document.querySelector("#tabla-pacientes");

  console.log(" ----> buena adición. ");

  // crea elementos TD y TR ------------------------>
  pacienteTr = document.createElement("tr");
  nombreTd = document.createElement("td");
  pesoTd = document.createElement("td");
  alturaTd = document.createElement("td");
  gorduraTd = document.createElement("td");
  imcTd = document.createElement("td");


  // toma valores con la propiedad textContext y asigna a variables ------------>
  nombreTd.textContent = paciente.nombre;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = calcularIMC(peso, altura);


  // asignación al TR 'PACIENTE' de las filas TD ------------>
  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  console.log(pacienteTr);

  tabla.appendChild(pacienteTr);

});

// FUNCIONES *********************************

// función que crea el objeto 'paciente'
function tomarDatosPacientes(form) {
  // toma datos del formulario
  var paciente = {
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value
  }
  return paciente;
}