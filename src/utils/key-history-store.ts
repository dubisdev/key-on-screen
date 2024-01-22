import { TypedEventTarget } from "typescript-event-target";

export const enum KeyStoreEvent {
    KEYS_UPDATED = "keys-updated",
}

type KeyStoreEventMap = {
    [KeyStoreEvent.KEYS_UPDATED]: KeysUpdatedEvent;
};

class KeyStore extends TypedEventTarget<KeyStoreEventMap> {
    private keys: string[] = [];

    constructor() {
        super();
    }

    public add(key: string): void {
        if (this.keys.at(-1) === key) return
        this.keys.push(key);
        this.dispatchTypedEvent(KeyStoreEvent.KEYS_UPDATED, new KeysUpdatedEvent(this.keys));
    }

    public remove(key: string): void {
        setTimeout(() => {
            const firstElementIndex = this.keys.indexOf(key)
            if (firstElementIndex === -1) return

            this.keys.splice(firstElementIndex, 1)

            this.dispatchTypedEvent(KeyStoreEvent.KEYS_UPDATED, new KeysUpdatedEvent(this.keys));
        }, 3000)
    }

}

class KeysUpdatedEvent extends CustomEvent<string[]> {
    constructor(keys: string[]) {
        super(KeyStoreEvent.KEYS_UPDATED, { detail: keys });
    }
}

export const keyStore = new KeyStore();
