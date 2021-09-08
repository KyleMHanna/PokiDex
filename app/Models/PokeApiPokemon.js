export class PokeApiPokemon {
    constructor (pokiData){
      this.name = pokiData.name
      this.weight = pokiData.weight
      this.abilities = pokiData.abilities
      this.id = pokiData.id
      this.types = pokiData.types
      this.moves = pokiData.moves
      this.weight = pokiData.weight
      this.url = pokiData.url
    }

    get Template() {
    return /*html*/`
    <li class="list-group-item py-2 selectable" onclick="app.pokiApiController.getPokiDetails('${this.url}')">${this.name}</li>
    `
  }
}