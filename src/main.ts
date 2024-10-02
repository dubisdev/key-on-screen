import { listen } from "@tauri-apps/api/event";
import { addNormalizedKeyFromWebView, removeNormalizedKeyFromWebView } from "./event-handlers/webview-event-handler";
import { addNormalizedKeyFromSystem, removeNormalizedKeyFromSystem } from "./event-handlers/system-event-handler";
import { keyStore } from "./utils/key-history-store";
import { createDOMElementForKey, getDisplayerDOMElement } from "./utils/dom-manipulation";
import { checkForUpdates } from "./utils/update-notifier";

document.addEventListener("DOMContentLoaded", () => {
  runApp();
  checkForUpdates();
})

const runApp = () => {
  // Disable context menu
  document.addEventListener("contextmenu", event => {
    event.preventDefault()
  })

  // Manage keypress when the app is focused (webview)
  document.addEventListener('keydown', addNormalizedKeyFromWebView)
  document.addEventListener('keyup', removeNormalizedKeyFromWebView)

  // Manage keypress when the app is not focused (system wide)
  listen("KeyPress", addNormalizedKeyFromSystem)
  listen("KeyRelease", removeNormalizedKeyFromSystem)

  // Update display when the key store is updated
  keyStore.subscribe((keys) => {
    const $display = getDisplayerDOMElement()
    $display.innerHTML = keys.map(createDOMElementForKey).join(" ")
  })
}


