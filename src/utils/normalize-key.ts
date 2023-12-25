/**
 * This mapping matches event.code to the final key that is displayed to the user.
 * For the system events (rust), the key received is already normalized to match a event.code.
 */
const keyMapping: Record<KeyboardEvent["code"], string> = Object.freeze({
    // Numbers
    "Digit1": "1",
    "Digit2": "2",
    "Digit3": "3",
    "Digit4": "4",
    "Digit5": "5",
    "Digit6": "6",
    "Digit7": "7",
    "Digit8": "8",
    "Digit9": "9",
    "Digit0": "0",

    // Letters
    "KeyA": "A",
    "KeyB": "B",
    "KeyC": "C",
    "KeyD": "D",
    "KeyE": "E",
    "KeyF": "F",
    "KeyG": "G",
    "KeyH": "H",
    "KeyI": "I",
    "KeyJ": "J",
    "KeyK": "K",
    "KeyL": "L",
    "KeyM": "M",
    "KeyN": "N",
    "KeyO": "O",
    "KeyP": "P",
    "KeyQ": "Q",
    "KeyR": "R",
    "KeyS": "S",
    "KeyT": "T",
    "KeyU": "U",
    "KeyV": "V",
    "KeyW": "W",
    "KeyX": "X",
    "KeyY": "Y",
    "KeyZ": "Z",

    // Symbols
    "Minus": "-",
    "Equal": "=",
    "BracketLeft": "[",
    "BracketRight": "]",
    "Backslash": "\\",
    "Semicolon": ";",
    "Quote": "'",
    "Backquote": "`",
    "Comma": ",",
    "Period": ".",
    "Slash": "/",
    "IntlBackslash": "\\",

    // Numpad
    "Numpad0": "0",
    "Numpad1": "1",
    "Numpad2": "2",
    "Numpad3": "3",
    "Numpad4": "4",
    "Numpad5": "5",
    "Numpad6": "6",
    "Numpad7": "7",
    "Numpad8": "8",
    "Numpad9": "9",
    "NumpadMultiply": "*",
    "NumpadAdd": "+",
    "NumpadSubtract": "-",
    "NumpadDecimal": ".",
    "NumpadDivide": "/",
    "NumpadEqual": "=",

    // Other
    "CapsLock": "Caps Lock",
    "NumLock": "Num Lock",

    // Modifiers
    "MetaLeft": "⌘",
    "MetaRight": "⌘",
    "AltLeft": "Alt",
    "AltRight": "Alt",
    "ControlLeft": "Ctrl",
    "ControlRight": "Ctrl",
    "ShiftLeft": "⇧ Left",
    "ShiftRight": "⇧ Right",

    // Arrows
    "ArrowUp": "↑",
    "ArrowDown": "↓",
    "ArrowLeft": "←",
    "ArrowRight": "→",

    // Other
    "Escape": "Esc",
    "Enter": "↵ Enter",
    "NumpadEnter": "↵ Enter",
    "Backspace": "⌫ Backspace",
    "Tab": "↹ Tab",
    "ContextMenu": "Menu",
});

/**
 * 
 * @param key A string that matches a event.code
 * @returns A normalized string that can be displayed to the user
 */
export const getNormalizedKey = (key: string) => keyMapping[key as keyof typeof keyMapping] || key;
