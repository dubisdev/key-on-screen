import { Event } from "@tauri-apps/api/event";
import { keyStore } from "../utils/key-history-store";

type SystemKeyEvent = Event<string>

export const addNormalizedKeyFromSystem = (event: SystemKeyEvent) => {
    const { payload: key } = event

    keyStore.add(key)
}

export const removeNormalizedKeyFromSystem = (event: SystemKeyEvent) => {
    const { payload: key } = event

    keyStore.remove(key)
}
