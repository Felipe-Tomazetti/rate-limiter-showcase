import { MemoryStore } from "../src/infrastructure/MemoryStore.ts";

describe("MemoryStore", () => {
  it("stores and retrieves values", () => {
    const store = new MemoryStore();
    store.set("value1", 42);

    expect(store.get<number>("value1")).toBe(42);
  });

  it("deletes values", () => {
    const store = new MemoryStore();
    store.set("value1", "toBeDeleted");
    store.delete("value1");

    expect(store.get("value1")).toBeUndefined();
  });
});
