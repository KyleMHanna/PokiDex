import { ProxyState } from "../AppState.js";

function _drawCurrentPoki() {
  console.log('did it work', ProxyState.currentPoki);
  document.getElementById('current-poki').innerHTML = ProxyState.currentPoki.Template
}


export class CurrentPokiController {
  constructor() {
    ProxyState.on('current-poki', _drawCurrentPoki)
  }
}