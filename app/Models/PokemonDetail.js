export class PokemonDetail {
  constructor(pokiData){
    this.index = pokiData.index
    this.id = pokiData.index
    this.name = pokiData.name
    this.weight = pokiData.weight
    this.abilities = pokiData.abilities
    this.types = pokiData.types
    this.moves = pokiData.moves
    this.weight = pokiData.weight
    this.url = pokiData.url
    this.sprites = pokiData.sprites.back_shiny
  }

get Template() {
  return /*html*/`
  <div class="card elevation-2">
        <div class="card-header">
          <h3>${this.name}</h3>
          <h3>${this.url}</h3>
        </div>
        <div class="card-body scrollable-y" style="max-height:50vh;">
          <p>${this.abilities}</p>
          <p>${this.types}</p>
          <p>${this.moves}</p>
          <p>${this.weight}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-danger" onclick="app.pokemonBookController.catchPokemon()">Catch</button>
        </div>
      </div>
    `
}
}