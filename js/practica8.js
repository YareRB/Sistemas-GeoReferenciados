var paises = document.getElementById("paises");

fetch("../json/paises.json").then(function (response) {
  response.json().then(function (datos) {
    let contador = 1;

    datos.forEach((registro) => {
      let renglon = document.createElement("div"); // crear div 
      renglon.className = "row border bg-light m-2"; // agregando clase css row
      paises.appendChild(renglon);

      let columna = document.createElement("div"); // crear div 
      columna.className = "col-12 "; // agregando clase css column 
      renglon.appendChild(columna);

      let nombre = document.createElement("p"); // crear parrafo
      nombre.textContent = contador + ")" + registro.CountryName; //agregar información
      columna.appendChild(nombre);
      contador++;

    });
  });
}); //promesa then
