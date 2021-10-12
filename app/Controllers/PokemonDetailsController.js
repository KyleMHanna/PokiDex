import { ProxyState } from "../AppState.js"
import { pokiService } from "../Services/PokiService.js"


function _drawCurrentPokemon() {
  // let template = ''
  // ProxyState.caughtPokemons.forEach(p=> template += p.Template)
  document.getElementById('current-poki').innerHTML = ProxyState.currentPokemon.Template
}

export class PokemonDetailsController {
  constructor() {
    ProxyState.on('currentPokemon', _drawCurrentPokemon)
  }
  async getPokemonDetails(url) {
    try {
      await pokiService.getPokemonDetails(url)
    } catch (error) {
      console.log(error, "from PokemonDetailsController 🌋");
    }
  }
}