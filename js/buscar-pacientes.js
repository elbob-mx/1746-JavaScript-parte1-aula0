var btnBuscar = document.querySelector("#buscar-paciente");

btnBuscar.addEventListener("click", function () {
  console.log("PENSANDING PACIENTES"); // buscar paciente
  var xhr = new XMLHttpRequest; // requisición API
  xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
  xhr.addEventListener("load", function () { // cargar API
    var errorAjax = document.querySelector("#error-ajax");    
    if (xhr.status == 200) {
      errorAjax.classList.add("invisible"); // si el status es OK, haz invisible el msj de error
      var respuesta = xhr.responseText;
      /* console.log(respuesta);
      console.log(typeof respuesta); */

      var pacientes = JSON.parse(respuesta); // conversión a array
      /* console.log(pacientes);
      console.log(typeof pacientes); */

      pacientes.forEach(function (paciente) { // loop iteración pacientes
        sumPacienteEnTabla(paciente);
        // console.log(paciente);
      });
    } else {
      errorAjax.classList.remove("invisible"); // si hay error, haz visible el msj de error
      console.log(xhr.status); // muestra el tipo de error
      console.log(xhr.responseText); // muestra el contenido del error
    }
  });
  xhr.send();
});