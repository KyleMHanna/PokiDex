import { ProxyState } from "../AppState.js";
import { pokiApiService } from '../Services/PokiApiService.js';

function _drawPoki (){
  let template = ''

  ProxyState.apiPokis.forEach(pokemon => template += pokemon.Template)
    document.getElementById('poki-list').innerHTML = template
}
export class PokiApiController {
  constructor() {
    ProxyState.on('apiPokis', _drawPoki)
    pokiApiService.getPokemon()
  }
async getPokiDetails(url){
  try {
  await pokiApiService.getPokiDetails(url)
  } catch (error) {
    // todo Sweeeet alert
    console.error('⚠ [GET_POKi_DETAILS]', error)
    }
  }
}
