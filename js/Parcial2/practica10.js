var coordenadas = {
    lat: 0,
    lng: 0
};
var propiedades = {
    center: coordenadas,
    zoom: 2
};

function iniciaMapa(){
    fetch('../../../json/paises.json')
    .then(function(response){
        response.json().then(function(datos){
            const map = new google.maps.Map(document.getElementById('map'), propiedades);
            datos.forEach(marcador => {  
                var informacion = "<strong>País: </strong>" + marcador.CountryName;
                var infoWindow = new google.maps.InfoWindow({content: informacion});
                let marker = new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(marcador.CapitalLatitude, marcador.CapitalLongitude),
                    title: marcador.CountryName
                });
                marker.addListener('click', function(){
                    infoWindow.open(map, marker);
                });
            });
        })
    })
    .catch(function(error){
        console.log('Hubo un problema con la peticion Fetch ' + error.message);
    });
}