document.addEventListener("DOMContentLoaded", () => {
  runApp();
})

const runApp = () => {
  const $displayer = document.getElementById('keypress-displayer') as HTMLDivElement;

  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    const pressed = getKeysFromEvent(event);

    $displayer.innerHTML = pressed.map(CreateelementFromKey).join(" + ")
  })

}
const CreateelementFromKey = (key: string) => `<span class="pressed-key">${key}</span>`

const getKeysFromEvent = (event: KeyboardEvent) => {
  const { key } = event;
  const pressedKeys = []

  // Add modifiers
  if (event.ctrlKey) pressedKeys.push("Ctrl")
  if (event.shiftKey) pressedKeys.push("Shift")
  if (event.altKey) pressedKeys.push("Alt")
  if (event.metaKey) pressedKeys.push("⊞ Windows")

  // We dont add again the modifier if it is the key pressed
  if (["Alt", "Shift", "Control", "Meta"].includes(key)) return pressedKeys

  const specialCases = {
    "ArrowUp": "↑",
    "ArrowDown": "↓",
    "ArrowLeft": "←",
    "ArrowRight": "→",
    "Escape": "Esc",
    "Enter": "↵ Enter",
    "Backspace": "⌫ Backspace",
    "Tab": "↹ Tab",
    " ": "Space",
  }

  if (key in specialCases) {
    pressedKeys.push(specialCases[key as keyof typeof specialCases])
    return pressedKeys
  }

  pressedKeys.push(key)

  return pressedKeys
}

