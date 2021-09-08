import { ProxyState } from "../AppState.js";
import { CaughtPokemon } from "../Models/CaughtPokemon.js";

const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})

class CaughtPokemonService {
async togglePokiDex(pokiId)
}