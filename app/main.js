import { PokiApiController } from "./Controllers/PokiApiController.js"

class App {
pokiApiController = new PokiApiController()
}

window["app"] = new App();
