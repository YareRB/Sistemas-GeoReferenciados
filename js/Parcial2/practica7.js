var paises = document.getElementById("paises");

fetch("../../../json/datos.json").then(function (response) {
  response.json().then(function (datos) {
    datos.forEach((registro) => {
      let div = document.createElement("div");
      div.className = " col-3 m-2  ";

      let card = document.createElement("div"); // crear elemento
      card.className = "card rounded text-center card-color size-card "; // agregando clase css row

      let image = document.createElement("img");
      image.className = "card-img-top image-si";
      image.src = registro.image;

      let divBody = document.createElement("div"); 
      divBody.className = "card-body"

      let nombre = document.createElement("h5");
      nombre.className = "card-title text2 fw-bold";
      nombre.textContent = registro.country;

      let descripcion = document.createElement("p");
      descripcion.className = "card-text text3";
      descripcion.textContent = "Casos: " + registro.cases;


      divBody.appendChild(nombre);
      divBody.appendChild(descripcion);

      card.appendChild(image);
      card.appendChild(divBody);

      div.appendChild(card);

      paises.appendChild(div);

    
    });
  });
}); //promesa then