import PokemonController from "./components/pokemon/pokemon-controller.js"

class App {
  constructor() {
    this.controllers = {
      pokemonController: new PokemonController()
    }
  }
}

window.app = new App()

console.log("The app is up and running")
