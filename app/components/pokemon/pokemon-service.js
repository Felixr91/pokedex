// @ts-ignore
let pokemonAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/"

})

let _Allpokemon = []


export default class PokemonService {
  constructor() {
    console.log("whadup from the pokemon service!")
  }

  get AllPokemon() {
    return _Allpokemon
  }
  getAllPokemon(draw, fail) {
    //this is an HTTP get request
    pokemonAPI.get("/")
      //this is the promise
      .then(res => {
        _Allpokemon = res.data.results
        console.log(res)
        draw(_Allpokemon)
      })
      .catch(error => {
        // fail(error)  creat fail function if in use
        console.log(error)
      })
  }
  getPokeDetails(pokeId, drawdetails) {
    debugger
    //this calls to pokemon api and adds an identifier to the base url
    pokemonAPI.get(pokeId + "/")
      //on success 
      .then(res => {
        //invoke callback function called drawdetails and pass it the data from the response
        drawdetails(res.data)
      })
      .catch(error => {
        // fail(error)  creat fail function if in use
        console.log(error)
      })
  }

}