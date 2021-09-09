import { ProxyState } from "../AppState.js";
import { sandBoxService }from "../Services/sandBoxService.js";

function _drawCurrentPoki() {
  let template = '' 
  ProxyState.sandboxPokemons.forEach(p => template += p.Template)
  document.getElementById('sandbox-poki').innerHTML = template
}

export class PokemonBookController {
  constructor() {
    ProxyState.on('sandboxPokemons', _drawCurrentPoki)
    sandBoxService.getPokemon()
  }
async catchPokemon() {
  try {
  await sandBoxService.catchPokemon()
  } catch (error) {
          console.error('⚠ [CATCH POKIMon]', error)
  }
}


async togglePrepared(pokiId){
try {
await sandBoxService.togglePrepared(pokiId)
} catch (error) {
    console.error('⚠ [HEALPOKI]', error)
}
}
}
