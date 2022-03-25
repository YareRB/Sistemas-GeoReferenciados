var paises = document.getElementById("paises");

fetch("../../../../json/datos.json").then(function (response) {
  response.json().then(function (datos) {
    datos.forEach((registro) => {
      let nombre = document.createElement("p"); // crear elemento
      nombre.textContent =
        "País: " + registro.country + " , casos: " + registro.cases;

      paises.appendChild(nombre); // agregar un hijo
    });
  });
}); //promesa then
