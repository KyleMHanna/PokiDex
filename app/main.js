import { PokemonBookController } from "./Controllers/PokemonBookController.js";
import { PokemonDetailsController } from "./Controllers/PokemonDetailsController.js";
import { PokemonListController } from "./Controllers/PokemonListController.js";


class App {
pokemonBookController = new PokemonBookController()
pokemonDetailsController = new PokemonDetailsController()
pokemonListController = new PokemonListController()
}

window["app"] = new App();
