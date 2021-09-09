import { ProxyState } from "../AppState.js";
import { pokiService } from '../Services/pokiService.js';

function _drawPoki (){
  let template = ''

  ProxyState.apiPokemons.forEach(pokemon => template += pokemon.Template)
    document.getElementById('poki-list').innerHTML = template
}
export class PokemonListController {
  constructor() {
    ProxyState.on('apiPokemons', _drawPoki)
    pokiService.getPokemon()
  }
async getPokemonDetails(pokiId){
  try {
  await pokiService.getPokemonDetails(pokiId)
  } catch (error) {
    // todo Sweeeet alert
    console.error('⚠ [GET_POKi_DETAILS]', error)
    }
  }
}
