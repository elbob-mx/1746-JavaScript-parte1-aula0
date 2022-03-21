// botón adicionar ------------>
var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", (e) => {
  event.preventDefault();

  var form = document.querySelector("#form-adicionar");
  var paciente = tomarDatosPacientes(form); // objeto 'paciente' **

  var errores = validarPesoPaciente(paciente);
  console.log(errores);

  if (errores.length > 0) {
    exhibirMsjsErrores(errores);
    return;
  }

  sumPacienteEnTabla(paciente);
  form.reset();

  var msjsErrores = document.querySelector("#mensajes-errores");
  msjsErrores.innerHTML = "";

});

// FUNCIONES *********************************

function sumPacienteEnTabla(paciente) {
  var pacienteTr = construirTr(paciente); // crea TR del paciente adicionado **
  var tabla = document.querySelector("#tabla-pacientes"); // declara la variable 'tabla' tomado de la 'tabla-pacientes' **
  tabla.appendChild(pacienteTr); // suma paciente a la tabla **  
}

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
function validarPesoPaciente(paciente) {
  var errores = []

  if (paciente.nombre.length <= 1) {
    errores.push("*nombre requerido.");
  }

  if (paciente.peso.length == 0) {
    errores.push("*peso requerido.");
  }

  if (paciente.altura.length == 0) {
    errores.push("*altura requerida.");
  }

  if (paciente.gordura.length == 0) {
    errores.push("*% de grasa corporal requerido.");
  }

  if (!validarPeso(paciente.peso)) {
    errores.push("*peso inválido.");
  }

  if (!validarAltura(paciente.altura)) {
    errores.push("*altura inválida.");
  }

  return errores;
};

//  función que valida la altura de los pacientes introducidos por el usuario ------------------------->
//  function validarAlturaPaciente(paciente) {
//    var errores = []
//    if(!validarAltura(paciente.altura)){
//      return "altura inválida";
//   } else {
//     return "";
//     }
//     return errores;
//   };

function exhibirMsjsErrores(errores) {
  var ul = document.querySelector("#mensajes-errores");
  ul.innerHTML = "";
  console.log(ul)

  errores.forEach(function (error) {
    var li = document.createElement("li")
    li.textContent = error;
    ul.appendChild(li);
  });
};