import { PokiApiController } from "./Controllers/PokiApiController.js";
import { CaughtPokiController } from "./Controllers/CaughtPokiController.js";
import { CurrentPokiController } from "./Controllers/CurrentPokiController.js";


class App {
pokiApiController = new PokiApiController()
caughtPokiController = new CaughtPokiController()
currentPokiController = new CurrentPokiController()
}

window["app"] = new App();
