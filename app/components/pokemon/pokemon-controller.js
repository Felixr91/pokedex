import PokemonService from "./pokemon-service.js";

let _pokemonService = new PokemonService()

function _draw() {
  //create a template
}
export default class PokemonController {
  constructor() {
    console.log("hello from the pokemon controller!")
    _pokemonService.getAllPokemon(this.draw)
  }

  draw(pokeArr) {
    let pokemonTemplate = ''
    for (var i = 0; i < 20; i++) {
      pokemonTemplate += `
          <div class="pokename d-flex justify-content-between col-12">
          <p>${pokeArr[i].name}</p>
          <button onclick="app.controllers.pokemonController.getPokeDetails(${i + 1})">See stats</button>
          </div>
      `
    }
    document.getElementById("poke").innerHTML = pokemonTemplate
  }

  //this will return the details of the object into HTML
  //drawdetails(deets)
  drawdetails(deets) {
    let detailsTemplate = `
      <div class="pokedeets d-flex justify-content-center col-12">
      <img src="${deets.sprites.front_default}"/>
    `
    document.getElementById("stat").innerHTML = detailsTemplate
  }

  getPokeDetails(pokeId) {
    _pokemonService.getPokeDetails(pokeId, this.drawdetails)
  }
  // service getdetails(id, drawdetails)

}
