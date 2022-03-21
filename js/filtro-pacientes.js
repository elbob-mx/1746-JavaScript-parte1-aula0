// VARIABLES -------------------->
var inputFiltro = document.querySelector("#filtrar-tabla");

// FUNCIONES -------------------->
inputFiltro.addEventListener("input", function () {
  console.log("--> Input pensanding");
  console.log(this.value);

  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) { // si el usuario introdujo texto:
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNombre = paciente.querySelector(".info-nombre");
      var nombre = tdNombre.textContent; // nombre tomado del paciente en 'x' índice del loop.
      var expresion = new RegExp(this.value, "i");

      if (!expresion.test(nombre)) { // si el elemento escrito por el usuario en input no está:
        paciente.classList.add("invisible");
      } else { // sí si está, muéstralo
        paciente.classList.remove("invisible");
      }
    }
  } else { // si el usuario no introdujo texto:
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisible");
    }
  }
});