function iniciaMapa() {
  //variables
  var coordenadas = { lat: 21.152639, lng: -101.711598 };

  var limites = {
    north: 21.390039,
    south: 20.858414,
    west: -102.149631,
    east: -101.09299,
  };

  // #region Propiedades
  var propiedades1 = {
    center: coordenadas,
    zoom: 12,
  };

  var propiedades2 = {
    center: coordenadas,
    zoom: 12,
    disableDefaultUI: true,
  };

  var propiedades3 = {
    center: coordenadas,
    zoom: 12,
    zoomControl: false,
    scaleControl: false,
  };

  var propiedades4 = {
    center: coordenadas,
    zoom: 12,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ["roadmap", "satelite", "terrain"],
    },
  };

  var propiedades5 = {
    center: coordenadas,
    zoom: 12,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER,
    },
    zoomControl: true,
    zoomContorlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER,
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: position.maps.ControlPosition.LEFT_TOP,
    },
    fullscreenControl: true,
  };

  var propiedades6 = {
    center: coordenadas,
    zoom: 12,
    restriction: {
      latLngBounds: limites,
      strictBounds: false,
    },
  };

  var propiedades7 = {
    center: coordenadas,
    zoom: 19,
    mapTypeId: "satellite",
  };

  //#endregion

  //#region Mapas
  var mapa1 = new google.maps.Map( document.getElementById("map15-1"), propiedades1 );
  var mapa2 = new google.maps.Map( document.getElementById("map15-2"), propiedades2 );
  var mapa3 = new google.maps.Map( document.getElementById("map15-3"), propiedades3 );
  var mapa4 = new google.maps.Map( document.getElementById("map15-4"), propiedades4 );
  var mapa5 = new google.maps.Map( document.getElementById("map15-5"), propiedades5 );
  var mapa6 = new google.maps.Map( document.getElementById("map15-6"), propiedades6 );
  var mapa7 = new google.maps.Map( document.getElementById("map15-7"), propiedades7 );
 
  mapa7.setTilt(45);
  //#endregion
}
