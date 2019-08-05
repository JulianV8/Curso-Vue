const URL_API = "https://pokeapi.co/api/v2/"
const PERSONAJE = "pokemon/:id"
const opt = crossDomain:true

function url(id) {
  const url = `${URL_API}${PERSONAJE.replace(':id', id)}`
}

$.get(url, opt, callback);
