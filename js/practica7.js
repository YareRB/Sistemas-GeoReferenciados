var paises = document.getElementById("paises");

fetch("../../../json/datos.json").then(function (response) {
  response.json().then(function (datos) {
    datos.forEach((registro) => {
      let card = document.createElement("div"); // crear elemento
      card.className = "card m-2"; // agregando clase css row

      let image = document.createElement("img");
      image.className = "card-img-top";
      image.src = registro.image;

      let divBody = document.createElement("div"); 
      card.className = "card-body"

      let nombre = document.createElement("h5");
      nombre.className = "card-title";
      nombre.textContent = registro.country;

      let descripcion = document.createElement("p");
      descripcion.className = "card-text";
      descripcion.textContent = "Casos: " + registro.cases;


      divBody.appendChild(nombre);
      divBody.appendChild(descripcion);

      card.appendChild(image);
      card.appendChild(divBody);

    /*  nombre.textContent =
        "País: " + registro.country + " , casos: " + registro.cases;

      paises.appendChild(nombre); // agregar un hijo*/
    });
  });
}); //promesa then

/*
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
*/
/*
      let renglon = document.createElement("div"); // crear div 
      renglon.className = "row border bg-light m-2"; // agregando clase css row
      paises.appendChild(renglon);

      let columna = document.createElement("div"); // crear div 
      columna.className = "col-12 "; // agregando clase css column 
      renglon.appendChild(columna);

      let nombre = document.createElement("p"); // crear parrafo
      nombre.textContent = contador + ") " + registro.CountryName; //agregar información
      columna.appendChild(nombre);
      contador++;

    });*/