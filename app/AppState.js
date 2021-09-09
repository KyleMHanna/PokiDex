import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  user = 'Kyle'
  /** @type {import('./Models/CurrentPokemon.js').CurrentPokemon[]} */
  currentPokemons = []
  /** @type {import('./Models/CaughtPokemon.js').caughtPokemon[]} */
  caughtPokemons = []
  /** @type {import('./Models/PokeApiPokemon.js').apiPokis} */
  apiPokis = null
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
