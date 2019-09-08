const tarjetas = document.querySelector(".tarjetas-personajes");
//INVESTIGAR COMO HACER LA COMPAGINACION. funcion REX

const descriptionCharacter = document.querySelector(".description-character");



const config = {
  method: "get"
}


function getCharacters(url) {
  fetch(url, config)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
        imprimePersonajes(response.results);
    })
}

getCharacters("https://rickandmortyapi.com/api/character/");

function imprimePersonajes(personajes) {
  for(let personaje of personajes) {
    tarjetas.innerHTML += `
    <section class = "description-character">
      <div class = " ${personaje.status}">
        <div class = "contenedor-imagen-nombre">
          <img src = ${personaje.image}>
          <h3 class = "nombre">${personaje.name}</h3>
          <h3 class = "id">Nº ${personaje.id}</h3>
        </div>
        <div class = "contenido-personaje">
          <h2>Status: ${personaje.status}</h2>
          <h2>Especie: ${personaje.species}</h2>
          <h2>Género: ${personaje.gender}</h2>
          <h2>Origen: ${personaje.origin.name}</h2>
        </div>
      </div>
    </section>
    `
  }
}

function page1() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/");
}

function page2() {
  tarjetas.innerHTML = " ";     // CON EL innerHTML PUEDES AÑADIR COSAS CON EL "=", SUMAR COSAS CON EL "+="  O BORRAR COSAS CON UN STRING VACIO
  getCharacters("https://rickandmortyapi.com/api/character/?page=2");
}

function page3() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=3");
}

function page4() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=4");
}

function page5() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=5");
}

function page6() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=6");
}

function page7() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=7");
}

function page8() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=8");
}

function page9() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=9");
}

function page10() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=10");
}

function page11() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=11");
}

function page12() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=12");
}

function page13() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=13");
}

function page14() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=14");
}

function page15() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=15");
}

function page16() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=16");
}

function page17() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=17");
}

function page18() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=18");
}

function page19() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=19");
}

function page20() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=20");
}

function page21() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=21");
}

function page22() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=22");
}

function page23() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=23");
}

function page24() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=24");
}

function page25() {
  tarjetas.innerHTML = " ";
  getCharacters("https://rickandmortyapi.com/api/character/?page=25");
}
