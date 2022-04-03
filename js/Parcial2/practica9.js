var coordenadas = {
    lat :0,
    lng : 0
}

var propiedades = {
    center : coordenadas,
    zoom : 2
}
function iniciaMapa (){

    const map = new google.maps.Map(document.getElementById("map9"), propiedades); // crear constante mapa

    const marcadores = obtieneMarcadores();

    console.log(marcadores);

    for(marcador of marcadores){
        marker = new google.maps.Marker({
            map : map,
            position : new google.maps.LatLng(marcador.latitude, marcador.longitude),
            title : marcador.name
        });
    }
}

function obtieneMarcadores () {
    const markers = [
        {
            name : "Mexico",
            longitude : "-99.1276", 
            latitude : "19.427"
        },
        {
            name : "Brasil",
            longitude : "-47.9292", 
            latitude : "-15.7801"
        },
        {
            name : "España",
            longitude : "-3.70327", 
            latitude : "40.4167"
        }
    ]

    return markers;
}