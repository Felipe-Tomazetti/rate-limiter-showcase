import { FixedWindowRateLimiter } from "../src/services/FixedWindowRateLimiter.ts";
import { MemoryStore } from "../src/infrastructure/MemoryStore.ts";

describe("FixedWindowRateLimiter", () => {
  it("allows requests up to the limit", () => {
    const store = new MemoryStore();
    const limiter = new FixedWindowRateLimiter(store, {
      limit: 3,
      windowMs: 1000,
    });
    const user = "user-1";

    expect(limiter.allowRequest(user)).toBe(true);
    expect(limiter.allowRequest(user)).toBe(true);
    expect(limiter.allowRequest(user)).toBe(true);
    expect(limiter.allowRequest(user)).toBe(false);
  });

  it("resets the window after time passes", () => {
    jest.useFakeTimers();
    const store = new MemoryStore();
    const limiter = new FixedWindowRateLimiter(store, {
      limit: 2,
      windowMs: 1000,
    });
    const user = "user-2";

    expect(limiter.allowRequest(user)).toBe(true);
    expect(limiter.allowRequest(user)).toBe(true);
    expect(limiter.allowRequest(user)).toBe(false);

    // advance time
    jest.advanceTimersByTime(1001);
    expect(limiter.allowRequest(user)).toBe(true);

    jest.useRealTimers();
  });
});
