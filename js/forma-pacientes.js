// botón adicionar ------------>
var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", (e) => {
  event.preventDefault();

  var form = document.querySelector("#form-adicionar");  
  var paciente = tomarDatosPacientes(form); // objeto 'paciente' **
  var pacienteTr = construirTr (paciente); // crea TR del paciente adicionado **
  var tabla = document.querySelector("#tabla-pacientes"); // declara la variable 'tabla' tomado de la 'tabla-pacientes' **
  tabla.appendChild(pacienteTr);
  form.reset();

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

// función que crea las filas 'TR' y celdas 'TD' -------------------------->
function construirTr(paciente) {
  // crea elementos TD y TR ------------------------>
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente"); // adiciona la clases 'paciente' **

  var nombreTd = construirTd(paciente.nombre, "info-nombre") // se llama a la función de donde tomará el contenido de la celda 'nombre' **
  var pesoTd = construirTd(paciente.peso, "info-peso")  // se llama a la función de donde tomará el contenido de la celda 'peso' **
  var alturaTd = construirTd(paciente.altura, "info-altura")  // se llama a la función de donde tomará el contenido de la celda 'altura' **
  var gorduraTd = construirTd(paciente.gordura, "info-gordura")  // se llama a la función de donde tomará el contenido de la celda 'gordura' **
  var imcTd = construirTd(paciente.imc, "info-imc")  // se llama a la función de donde tomará el contenido de la celda 'imc' **

  // asignación al TR 'PACIENTE' de las filas TD ------------>
  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
};

// función que genera los datos para incluirlos en los 'TD' correspondientes --------------------------->
function construirTd(dato, clase) { //los datos tomarán desde la celda e.g. 'paciente.peso' y el dato tomado es 'info-peso' **
  var td = document.createElement("td"); // crear elemento 'TD' **
  td.classList.add(clase); // establecer clase al elemento 'TD' **
  td.textContent = dato; // en el contenido incluir el dato recibido de e.g. 'info-peso' **

  return td;
};

// función que valida el peso de los pacientes introducidos por el usuario ------------------------->
function validarNuevoPaciente(paciente) {
  if(validarPeso(paciente.peso)){
    return true;
 } else {
   return false;
   }
 };
 
 // función que valida la altura de los pacientes introducidos por el usuario ------------------------->
 function validarNuevoPaciente(paciente) {
   if(validarAltura(paciente.altura)){
     return true;
  } else {
    return false;
    }
  };