import { ProxyState } from "../AppState.js"


function _drawCaughtPokemon() {
  // let template = ''
  // ProxyState.caughtPokemons.forEach(p=> template += p.Template)
  document.getElementById('caught-poki').innerHTML =  ProxyState.currentPokemon.Template
}

export class CaughtPokiController {
  constructor () {
    ProxyState.on('currentPokemon', _drawCaughtPokemon)
  }
}