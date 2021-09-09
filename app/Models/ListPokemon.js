export class ListPokemon {
    constructor (pokiData){
      this.name = pokiData.name
      this.id = pokiData.index
      this.index = pokiData.index
      this.url = pokiData.url
    }

    get Template() {
    return /*html*/`
    <li class="list-group-item py-2 selectable" onclick="app.pokemonListController.getPokemonDetails('${this.url}')">${this.name}</li>
    `
  }
}