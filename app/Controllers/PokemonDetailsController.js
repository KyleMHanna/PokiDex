import { ProxyState } from "../AppState.js"


function _drawCurrentPokemon() {
  // let template = ''
  // ProxyState.caughtPokemons.forEach(p=> template += p.Template)
  document.getElementById('current-poki').innerHTML =  ProxyState.currentPokemon.Template
}

export class PokemonDetailsController {
  constructor () {
    ProxyState.on('currentPokemon', _drawCurrentPokemon)
  }
}