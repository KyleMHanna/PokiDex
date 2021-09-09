export class CurrentPokemon {
  constructor(pokiData){
    this.id = pokiData.id
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
  <div class="card elevation-2">
        <div class="card-header">
          <h3>${this.name}</h3>
        </div>
        <div class="card-body scrollable-y" style="max-height:50vh;">
          <p>${this.abilities}</p>
          <p>${this.types}</p>
          <p>${this.moves}</p>
          <p>${this.weight}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-danger" onclick="app.pokiApiController.catchPokemon()">Catch</button>
        </div>
      </div>
    `
}
}