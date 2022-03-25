var map;

var coordenadas = {
  lat: 0,
  lng: 0,
};

var propiedades = {
  center: coordenadas,
  zoom: 20,
};

function iniciaMapa() {
  map = new google.maps.Map(document.getElementById("map6"), propiedades);

  var icono = {
    url: "https://c.tenor.com/MPrZD7nJwlsAAAAj/greet-i%27m-here.gif",//"https://cdn.pixabay.com/photo/2017/01/11/08/31/icon-1971129_960_720.png", //"https://media.giphy.com/media/1ZweHMlSaxcc32mSSu/giphy.gif",
    scaledSize: new google.maps.Size(100, 100),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0),
  };

  var marker = new google.maps.Marker({
    position: coordenadas,
    icon: icono,
    map: map,
  });

  if (navigator.geolocation) {
    setInterval(() => {
      moverPosicion(marker);
    }, 5000);
  }

  function moverPosicion(marker) {
    navigator.geolocation.getCurrentPosition((posicion) => {
      var pos = {
        lat: posicion.coords.latitude,
        lng: posicion.coords.longitude,
      };

      marker.setPosition(pos);
      map.panTo(pos);
      map.setCenter(pos);
    });
  }
}

