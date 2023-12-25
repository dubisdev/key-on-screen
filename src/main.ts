import { listen } from "@tauri-apps/api/event";
import { updateDisplayForWebviewKeyEvent } from "./event-handlers/webview-event-handler";
import { updateDisplayForSystemKeyPressEvent, updateDisplayForSystemKeyReleaseEvent } from "./event-handlers/system-event-handler";

document.addEventListener("DOMContentLoaded", () => {
  runApp();
})

const runApp = () => {
  // Manage keypress when the app is focused
  document.addEventListener('keydown', updateDisplayForWebviewKeyEvent)

  listen("KeyPress", updateDisplayForSystemKeyPressEvent)

  listen("KeyRelease", updateDisplayForSystemKeyReleaseEvent)
}


