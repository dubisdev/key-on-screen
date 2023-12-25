import { Event } from "@tauri-apps/api/event";
import { keyStore } from "../utils/key-history-store";
import { getNormalizedKey } from "../utils/normalize-key";

type SystemKeyEvent = Event<string>

export const addNormalizedKeyFromSystem = (event: SystemKeyEvent) => {
    const { payload: key } = event

    keyStore.add(getNormalizedKey(key))
}

export const removeNormalizedKeyFromSystem = (event: SystemKeyEvent) => {
    const { payload: key } = event

    keyStore.remove(getNormalizedKey(key))
}
