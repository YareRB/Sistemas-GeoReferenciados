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
            const map = new google.maps.Map(document.getElementById('map9'), propiedades);
            datos.forEach(marcador => { 
                var informacion = '<div class="div-center"><h1 class="text2">' + marcador.CountryName +'</h1>';
                informacion += '<p class="text3"><strong>Capital:</strong> ' + marcador.CapitalName + '</p>';
                informacion += '<p class="text3"><strong>Continente: </strong>'+ marcador.ContinentName +'</p>';
                informacion += '<div class="bg-dark"><p class="text3 text-white m-2"><strong>Código de País: </strong>'+ marcador.CountryCode +'</p></div><div> <i class="fa-solid fa-earth-africa"></i> </div></div>';                
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