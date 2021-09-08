import { ProxyState } from "../AppState.js";
import { CaughtPokemon } from "../Models/CaughtPokemon.js";

const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})

class CaughtPokemonService {
async togglePokiDex(pokiId){
  const pokemon = ProxyState.caughtPokis.find(p=> p.id === pokiId)
  poki.heal = !poki.heal
  await sandboxApi.put(`${ProxyState.user}/pokemon/${pokiId}`, pokemon)
}
async catchPokemon(){
  const pokemonToCatch = new CaughtPokemon(ProxyState.currentPoki)
  let res = await sandboxApi.post(`${ProxyState.user}/pokemon`, pokemonToCatch)
  ProxyState.caughtPokis = [...ProxyState.caughtPokis, new CaughtPokemon(res.data)]
}
async getPokemon() {
  let res = await sandboxApi.get(`${ProxyState.user}/pokemon`)
  ProxyState.caughtPokis = res.data.map(p => new CaughtPokemon(p))
}
}
export const caughtPokemonService = new CaughtPokemonService()