import { ProxyState } from "../AppState.js";
import { caughtPokemonService }from "../Services/CaughtPokemonService.js";

function _drawCurrentPoki() {
  let template = '' 
  ProxyState.currentPoki.forEach(p => template += p.Template)
  document.getElementById('current-poki').innerHTML = template
}

export class CurrentPokiController {
  constructor() {
    ProxyState.on('currentPoki', _drawCurrentPoki)
    caughtPokemonService.getPokemon()
  }
async catchPokemon() {
  try {
  await caughtPokemonService.catchPokemon()
  } catch (error) {
          console.error('⚠ [CATCH POKIMon]', error)
  }
}
}

// async healPoki(pokiId){
// try {
// await caughtPokemonService.healPoki(pokiId)
// } catch (error) {
//     console.error('⚠ [HEALPOKI]', error)
// }
// 
