import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  user = 'Kyle'
  /** @type {import('./Models/CurrentPokeman').currentPokeman[]} */
  currentPokemans = []
  /** @type {import('./Models/CaughtPokeman').caughtPokeman[]} */
  caughtPokemans =[]
  /** @type {import('./Models/PokeApiPokemon').apiPoki[]} */
  apiPokis = []
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
