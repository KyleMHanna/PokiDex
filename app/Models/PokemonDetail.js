export class PokemonDetail {
  constructor(pokiData) {
    this.index = pokiData.index
    this.id = pokiData.index
    this.url = pokiData.url
    this.name = pokiData.species.name
    this.weight = pokiData.weight
    this.height = pokiData.height
    this.imgUrl = pokiData.sprites.front_shiny
    this.experience = pokiData.base_experience
  }

  get Template() {
    return /*html*/`
  <div class="card elevation-2">
        <div class="card-header">
          <h3>${this.name}</h3>
          <img class="poke-img" src="${this.imgUrl}">
        </div>
        <div class="card-body scrollable-y" style="max-height:50vh;">
          <p>Height: ${this.height}ft</p>
          <p>weight: ${this.weight} lbs</p>
          <p>Base experience: ${this.experience} exp </p>
        </div>
        <div class="card-footer">
          <button class="btn btn-danger" onclick="app.pokemonBookController.catchPokemon()">Catch</button>
        </div>
      </div>
    `
  }
}