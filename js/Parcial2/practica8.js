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
        coordenadas.lat = registro.CapitalLatitude;
        coordenadas.lng = registro.CapitalLongitude;
        colocarMapa()
      });
    });
  });
}); //promesa then



function colocarMapa() {

  let propiedades = {
    center: coordenadas,
    zoom: 2,
  };

  const map = new google.maps.Map(
    document.getElementById("mapa8"),
    propiedades
  );

  marker = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(coordenadas.lat, coordenadas.lng),
  });
}
