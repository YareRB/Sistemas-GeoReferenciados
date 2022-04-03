var paises = document.getElementById("paises");
var coordenadas = {
  lat: 0.0,
  lng: 0.0,
};

fetch("../../../json/paises.json").then(function (response) {
  response.json().then(function (datos) {
    let contador = 1;

    datos.forEach((registro) => {
      let renglon = document.createElement("div"); // crear div
      renglon.className = "row border bg-light m-2"; // agregando clase css row
      paises.appendChild(renglon);

      renglon.id = registro.CountryName;

      let columna = document.createElement("div"); // crear div
      columna.className = "col-12"; // agregando clase css column
      renglon.appendChild(columna);

      let nombre = document.createElement("p"); // crear parrafo
      nombre.textContent = contador + ") " + registro.CountryName; //agregar información
      columna.appendChild(nombre);
      contador++;

      renglon.addEventListener("click", function () {
        //OBTENEMOS COORDENADAS
        coordenadas.lat = parseFloat(registro.CapitalLatitude);
        coordenadas.lng = parseFloat(registro.CapitalLongitude);
        
        iniciaMapa()
      });
    });
  });
}); //promesa then



function iniciaMapa() {

  console.log(coordenadas)
  let propiedades = {
    center: coordenadas,
    zoom: 2,
  };

  const map = new google.maps.Map(
    document.getElementById("mapa8"),
    propiedades
  );

  var marker = new google.maps.Marker({
    position: coordenadas,
    map: map,
  });
}
