import { createDOMElementForKey, getDisplayerDOMElement } from "../utils/dom-manipulation";

export const updateDisplayForWebviewKeyEvent = (event: KeyboardEvent) => {
  event.preventDefault();

  const $displayer = getDisplayerDOMElement();

  const pressedCombination = getKeysFromEvent(event);

  $displayer.innerHTML = pressedCombination.map(createDOMElementForKey).join(" ")
}

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
