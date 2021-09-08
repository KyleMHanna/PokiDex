import { ProxyState } from "../AppState.js"
import { caughtPokemonService} from "../Services/CaughtPokemonService.js"

function _drawCaughtPokemon() {
  let template = ''
  ProxyState.caughtPokemons.forEach(p=> template += p.Template)
  document.getElementById('caught-poki').innerHTML = template
}

export class CaughtPokiController {
  constructor () {
    ProxyState.on('caughtPokemons', _drawCaughtPokemon)
    caughtPokemonService.getPokemon()
  }
}