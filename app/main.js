import { PokiApiController } from "./Controllers/PokiApiController.js";
import { CaughtPokiController } from "../app/Controllers/CaughtPokiController.js";
import { CurrentPokiController } from "../app/Controllers/CurrentPokiController.js";


class App {
pokiApiController = new PokiApiController()
caughtPokiController = new CaughtPokiController()
currentPokiController = new CurrentPokiController()
}

window["app"] = new App();
