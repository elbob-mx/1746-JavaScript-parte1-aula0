var btnBuscar = document.querySelector("#buscar-paciente");

btnBuscar.addEventListener("click", function(){
  console.log("PENSANDING PACIENTES");
  var xhr = new XMLHttpRequest;
  xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
  xhr.addEventListener("load", function(){
    var respuesta = xhr.responseText;
    console.log(respuesta);
    console.log(typeof respuesta);

    var pacientes = JSON.parse(respuesta);
    console.log(pacientes);
    console.log(typeof pacientes);
  });
  xhr.send();
});