import { keyStore } from "../utils/key-history-store";
import { getNormalizedKey } from "../utils/normalize-key";

export const addNormalizedKeyFromWebView = (event: KeyboardEvent) => {
  event.preventDefault();

  const normalizedKey = getNormalizedKey(event.code);

  keyStore.add(normalizedKey);
}

export const removeNormalizedKeyFromWebView = (event: KeyboardEvent) => {
  event.preventDefault();

  const normalizedKey = getNormalizedKey(event.code);

  keyStore.remove(normalizedKey);
}
