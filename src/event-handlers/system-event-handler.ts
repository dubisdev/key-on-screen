import { Event } from "@tauri-apps/api/event";
import { createDOMElementForKey, getDisplayerDOMElement } from "../utils/dom-manipulation";

type SystemKeyEvent = Event<string>

const activeKeys: string[] = []

export const updateDisplayForSystemKeyPressEvent = (event: SystemKeyEvent) => {
    const { payload: key } = event

    const $displayer = getDisplayerDOMElement();

    activeKeys.push(key)

    $displayer.innerHTML = activeKeys.map(createDOMElementForKey).join(" ")

}

export const updateDisplayForSystemKeyReleaseEvent = (event: SystemKeyEvent) => {
    const { payload: key } = event

    const $displayer = getDisplayerDOMElement();

    setTimeout(() => {
        const firstElementIndex = activeKeys.indexOf(key)
        if (firstElementIndex === -1) return

        activeKeys.splice(firstElementIndex, 1)

        $displayer.innerHTML = activeKeys.map(createDOMElementForKey).join(" ")
    }, 3000)

}
