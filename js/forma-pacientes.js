// botón adicionar ------------>
var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", (e) => {
  event.preventDefault();

  var form = document.querySelector("#form-adicionar");  
  var paciente = tomarDatosPacientes(form); // objeto 'paciente' **
  var pacienteTr = construirTr (paciente); // crea TR del paciente adicionado **
  var tabla = document.querySelector("#tabla-pacientes"); // declara la variable 'tabla' tomado de la 'tabla-pacientes' **
  tabla.appendChild(pacienteTr);

});

// FUNCIONES *********************************

// función que crea el objeto 'paciente' **
function tomarDatosPacientes(form) {
  // toma datos del formulario **
  var paciente = {
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularIMC(form.peso.value, form.altura.value)
  }
  return paciente;
};

function construirTr(paciente) {
  // crea elementos TD y TR ------------------------>
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente"); // adiciona la clases 'paciente' **

  var nombreTd = document.createElement("td");
  pacienteTr.classList.add("info-nombre"); // adiciona la clases 'paciente' **

  var pesoTd = document.createElement("td");
  pacienteTr.classList.add("info-peso"); // adiciona la clases 'paciente' **

  var alturaTd = document.createElement("td");
  pacienteTr.classList.add("info-altura"); // adiciona la clases 'paciente' **

  var gorduraTd = document.createElement("td");
  pacienteTr.classList.add("info-gordura"); // adiciona la clases 'paciente' **

  var imcTd = document.createElement("td");
  pacienteTr.classList.add("info-imc"); // adiciona la clases 'paciente' **

  // toma valores con la propiedad textContext y asigna a variables ------------>
  nombreTd.textContent = paciente.nombre;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;

  // asignación al TR 'PACIENTE' de las filas TD ------------>
  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
};