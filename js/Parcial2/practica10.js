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
                var informacion = '<div class="text-center"><h1 class="text2">' + marcador.CountryName +'</h1>';
                informacion += '<p class="text3"><strong>Capital:</strong> ' + marcador.CapitalName + '</p>';
                informacion += '<p class="text3"><strong>Continente: </strong>'+ marcador.ContinentName +'</p>';
                informacion += '<div class="bg-dark"><p class="text3 text-white m-2"><strong>Código de País: </strong>'+ marcador.CountryCode +'</p></div>'
                
                if(marcador.ContinentName == "Africa"){
                    informacion += '<div><i class="fa-solid fa-earth-africa fa-3x"></i> </div></div>';                
                }else{
                    if(marcador.ContinentName == "Asia"){
                        informacion += '<div><i class="fa-solid fa-earth-asia fa-3x"></i> </div></div>';                
                    }else
                    {
                        if(marcador.ContinentName == "Central America" || marcador.ContinentName == "North America" || marcador.ContinentName == "South America"){
                            informacion += '<div><i class="fa-solid fa-earth-americas fa-3x"></i> </div></div>';                
                        }else{
                            if(marcador.ContinentName == "Europe"){
                                informacion += '<div><i class="fa-solid fa-earth-europe fa-3x"></i> </div></div>';                
                            }
                            else{
                                if(marcador.ContinentName == "Australia"){
                                    informacion += '<div><i class="fa-solid fa-earth-oceania fa-3x"></i> </div></div>';                
                                }else{
                                    informacion += '<div><i class="fa-solid fa-globe fa-3x"></i> </div></div>';                
                                }
                            }
                        }
                    }
                }
               
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