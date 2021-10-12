import { ProxyState } from "../AppState.js";
import { ListPokemon } from "../Models/ListPokemon.js";
import { PokemonDetail } from "../Models/PokemonDetail.js";

// @ts-ignore
const pokiApi = axios.create({
  baseURL: 'https://pokeapi.co'
})

class PokiService {
  async getPokemonDetails(url) {
    let res = await pokiApi.get(url)
    ProxyState.currentPokemon = new PokemonDetail(res.data)
  }
  async getPokemon() {
    let res = await pokiApi.get('api/v2/pokemon/')
    ProxyState.apiPokemons = res.data.results.map(p => new ListPokemon(p))
  }
}

export const pokiService = new PokiService