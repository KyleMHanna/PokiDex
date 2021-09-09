import { ProxyState } from "../AppState.js";
import { SandBoxPokemon } from "../Models/SandBoxPokemon.js";

const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})

class SandBoxService {
async togglePrepared(pokiId){
  const pokemon = ProxyState.SandboxPokemon.find(p=> p.id === pokiId)
  pokemon.prepared = !pokemon.prepared
  await sandboxApi.put(`${ProxyState.user}/pokemon/${pokiId}`, pokemon)
}
async catchPokemon(){
  const pokemonToCatch = new SandboxPokemon(ProxyState.currentPokemon)
  let res = await sandboxApi.post(`${ProxyState.user}/pokemon`, pokemonToCatch)
  ProxyState.sandboxPokemons = [...ProxyState.sandboxPokemons, new SandboxPokemon(res.data)]
}
async getPokemon() {
  let res = await sandboxApi.get(`${ProxyState.user}/pokemon`)
  ProxyState.sandboxPokemons = res.data.map(p => new SandboxPokemon(p))
}
}
export const sandBoxService = new SandBoxService()