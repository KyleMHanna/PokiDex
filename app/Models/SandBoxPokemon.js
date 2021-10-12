export class SandBoxPokemon {
    constructor (pokiData){
      this.name = pokiData.name
      this.type = pokiData.type
      this.weight = pokiData.weight
      this.user = pokiData.user
      this.prepared =pokiData.prepared
      this.id = pokiData.id
      this.weight = pokiData.weight

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