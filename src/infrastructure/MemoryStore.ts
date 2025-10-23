import { Store } from "../domain/interfaces/Store.js";

export class MemoryStore implements Store {
  private storage = new Map<string, unknown>();

  get<T>(key: string): T | undefined {
    return this.storage.get(key) as T | undefined;
  }

  set<T>(key: string, value: T): void {
    this.storage.set(key, value);
  }

  delete(key: string): void {
    this.storage.delete(key);
  }
}
