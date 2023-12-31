const titleContact = document.querySelector("#title-contact");
const nameInput = document.querySelector("#name-input");
const cityInput = document.querySelector("#city-input");
const ageInput = document.querySelector("#age-input");
const emailInput = document.querySelector("#email-input");
const messageInput = document.querySelector("#message-input");
const form = document.querySelector("#form");
let subtitleContact = document.querySelector("#subtitle-contact");
const nameBox = document.querySelector("#name-box");
const ageBox = document.querySelector("#age-box");
const cityBox = document.querySelector("#city-box");
let recetaRandom = document.getElementById('valor-receta-random')
let paisRandom = document.getElementById('valor-pais-random')
let descripcionRandom = document.getElementById('descripcion-receta-random')
const botonRandom = document.getElementById('button-random')
let cajaRandom = document.getElementById('caja-random-id')
const rutaJson = '../scripts/data.json'

ocultarRandom()

form.addEventListener("submit", function (e) {
  e.preventDefault();
  contactTitleChange(e)
  Swal.fire({
    title: "¡Genial!",
    text: "Enviaste tu comentario exitosamente",
    icon: "success"
  });
})

async function mostrarRecetaAleatoria() {
  try {
    const response = await fetch(rutaJson);
    const data = await response.json();
    const recetas = data.recetas;
    const recetaAleatoria = recetas[Math.floor(Math.random() * recetas.length)];
    recetaRandom.textContent = `${recetaAleatoria.nombre}`;
    descripcionRandom.textContent = `${recetaAleatoria.descripcion}`;
    paisRandom.textContent = `Pais: ${recetaAleatoria.pais}`;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo salió mal!",
    });
  }
}

botonRandom.addEventListener('click', mostrarRecetaAleatoria);

function contactTitleChange() {

  let nameValue = capitalizeFirstLetter(nameInput.value);

  let userData = {
    name: nameInput.value,
    city: cityInput.value,
    age: ageInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  let counter = localStorage.getItem('counter') || 0;
  counter = Number(counter) + 1;
  localStorage.setItem('counter', counter);

  localStorage.setItem(counter, JSON.stringify(userData));

  titleContact.innerText = `Gracias por tu comentario ${nameValue} :)`;

  subtitleContact.remove()
  form.reset()
  mostrarRandom()
};

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function removeRedundantData() {
  nameBox.remove()
  cityBox.remove()
  ageBox.remove()
}

function ocultarRandom() {
  cajaRandom.style.display = "none"
}

function mostrarRandom() {
  cajaRandom.style.display = "flex"
}

function pedidoLocalStorage() {
  let lastKey = localStorage.key(localStorage.length - 1);
  let lastObject = JSON.parse(localStorage.getItem(lastKey));
  let object = JSON.parse(localStorage.getItem(lastObject));
  
  if (object !== null) {
    let nameEntered = object.name;
    let nameEnteredCap = capitalizeFirstLetter(nameEntered);
 
    titleContact.innerText = `Que bueno verte de nuevo por aquí ${nameEnteredCap} :D`
    subtitleContact.innerText = `¿Quieres dejarnos otro comentario? Adelante!`
  }
 }

if (localStorage.length > 0) {
  pedidoLocalStorage()
  removeRedundantData()
  mostrarRandom()
}