import { listen } from "@tauri-apps/api/event";
import { updateDisplayForWebviewKeyEvent } from "./event-handlers/webview-event-handler";
import { updateDisplayForSystemKeyPressEvent, updateDisplayForSystemKeyReleaseEvent } from "./event-handlers/system-event-handler";

document.addEventListener("DOMContentLoaded", () => {
  runApp();
})

const runApp = () => {
  // Disable context menu
  document.addEventListener("contextmenu", event => {
    event.preventDefault()
  })

  // Manage keypress when the app is focused (webview)
  document.addEventListener('keydown', updateDisplayForWebviewKeyEvent)

  // Manage keypress when the app is not focused (system wide)
  listen("KeyPress", updateDisplayForSystemKeyPressEvent)
  listen("KeyRelease", updateDisplayForSystemKeyReleaseEvent)
}


