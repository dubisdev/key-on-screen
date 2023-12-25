import { keyStore } from "../utils/key-history-store";

export const addNormalizedKeyFromWebView = (event: KeyboardEvent) => {
  event.preventDefault();

  const normalizedKey = getKeyFromEvent(event);

  keyStore.add(normalizedKey);
}

export const removeNormalizedKeyFromWebView = (event: KeyboardEvent) => {
  event.preventDefault();

  const normalizedKey = getKeyFromEvent(event);

  keyStore.remove(normalizedKey);
}

const getKeyFromEvent = (event: KeyboardEvent) => {
  const { key } = event;

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
    "Shift": "⇧ Shift",
  }

  if (key in specialCases) {
    return specialCases[key as keyof typeof specialCases]
  }

  return key
}
