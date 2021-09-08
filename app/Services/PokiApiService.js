import { ProxyState } from "../AppState.js";
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js";
import { CaughtPokemon } from "../Models/CaughtPokemon.js";

const pokiApi = axios.create({
  baseURL: 'https://pokeapi.co'
})

class PokiApiService {
  async getPokiDetails(url){
    let res = await pokiApi.get(url)
    ProxyState.currentPokemans = new PokeApiPokemon(res.data)
  }
  async getPokemon() {
    let res = await pokiApi.get('api/v2/pokemon/')
    ProxyState.apiPokis = res.data.results.map(p => new CaughtPokemon(p))
  }
}

export const pokiApiService = new PokiApiService