export type KeyStoreSubscriptor = (keys: string[]) => void;

class KeyStore {
    private subscriptions: KeyStoreSubscriptor[] = [];
    private keys: string[] = [];

    subscribe(subscriptor: KeyStoreSubscriptor): void {
        this.subscriptions.push(subscriptor);
    }

    public add(key: string): void {
        if (this.keys.at(-1) === key) return
        this.keys.push(key);
        this.subscriptions.forEach((callback) => callback(this.keys));
    }

    public remove(key: string): void {
        setTimeout(() => {
            const firstElementIndex = this.keys.indexOf(key)
            if (firstElementIndex === -1) return

            this.keys.splice(firstElementIndex, 1)

            this.subscriptions.forEach((callback) => callback(this.keys));
        }, 3000)
    }
}

export const keyStore = new KeyStore();
