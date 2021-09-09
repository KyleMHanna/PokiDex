export class SandBoxPokemon {
    constructor (pokiData){
      this.name = pokiData.name
      this.weight = pokiData.weight
      this.prepared =pokiData.prepared
      this.id = pokiData.id
      this.weight = pokiData.weight
      this.url = pokiData.url
    }

  get Template() {
    return /*html*/`
      <li class="list-group-item py-2 selectable">
      <input type="checkbox" ${this.prepared ? 'checked' : ''} onclick="app.pokemonBookController.togglePrepared('${this.id}')">
      <span class= "ms-2">${this.name}</span>
      </li>
    `
  }

}