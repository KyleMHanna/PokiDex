import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  user = 'Kyle'
  /** @type {import('./Models/SandBoxPokemon.js').SandBoxPokemon[]} */
  sandboxPokemons = []
  /** @type {import('./Models/ListPokemon.js').ListPokemon[]} */
  apiPokemons = []
  /** @type {import('./Models/PokemonDetail.js').PokemonDetail} */
  currentPokemon = null
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
