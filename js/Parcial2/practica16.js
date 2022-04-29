function iniciaMapa() {
  //variables
  var coordenadas = { lat: 21.152639, lng: -101.711598 };

  var propiedades = {
    center: coordenadas,
    zoom: 12,
  };

  //#region Mapas
  var mapa1 = new google.maps.Map( document.getElementById("map15-1"), propiedades );
  var mapa2 = new google.maps.Map( document.getElementById("map15-2"), propiedades );
  var mapa3 = new google.maps.Map( document.getElementById("map15-3"), propiedades );
  var mapa4 = new google.maps.Map( document.getElementById("map15-4"), propiedades );
  var mapa5 = new google.maps.Map( document.getElementById("map15-5"), propiedades );
  var mapa6 = new google.maps.Map( document.getElementById("map15-6"), propiedades );
  //#endregion

  //#region Marcadores
  //mapa 1
  var marker = new google.maps.Marker({
    position: coordenadas,
    map: mapa1,
  });

  //mapa 2
  var marker2 = new google.maps.Marker({
    position: coordenadas,
    map: mapa2,
  });

  //#endregion

  //#region Eventos
  //mapa 1
  marker.addListener("click", function () {
    mapa1.setZoom(8);
    mapa1.setCenter(marker.getPosition());
  });

  //mapa 2
  mapa2.addListener("center_changed", function () {
    window.setTimeout(function () {
      mapa2.panTo(marker2.getPosition());
    }, 3000);
  });

  //mapa 3
  mapa3.addListener("zoom_changed", function () {
    var infowindow = new google.maps.InfoWindow({
      content: "Cambia el zoom",
      position: coordenadas,
    });

    infowindow.open(mapa3);
    nivelZoom = mapa3.getZoom();
    infowindow.setContent("Zoom:" + nivelZoom);
  });

  //mapa 4
  mapa4.addListener("click", function (e) {
    console.log(e.latLng);

    estableceMarcador(e.latLng);
  });

  function estableceMarcador(latLng) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: mapa4,
    });
    mapa4.panTo(latLng);
  }

  //mapa 5
  var infowindow = new google.maps.InfoWindow({
    content: "Haz click para obtener las coordenadas",
    position: coordenadas,
  });

  infowindow.open(mapa5);

  mapa5.addListener("click", function (evento) {
    infowindow.close();
    infowindow = new google.maps.InfoWindow({ position: evento.latLng });
    infowindow.setContent(evento.latLng.toString());
    infowindow.open(mapa5);
  });

  //mapa 6
  google.maps.event.addDomListener(mapa6, "click", function () {
    window.alert(" Se hizo click en el mapa");
  });

  //Boton
  var boton = document.getElementById("btnCentrar");
  google.maps.event.addDomListener(boton, "click", function () {
    mapa6.panTo(coordenadas);
  });
  //#endregion
  
}
