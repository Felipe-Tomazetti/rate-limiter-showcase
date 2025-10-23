import { MemoryStore } from "./infrastructure/MemoryStore.js";
import { FixedWindowRateLimiter } from "./services/FixedWindowRateLimiter.js";

const store = new MemoryStore();
const limiter = new FixedWindowRateLimiter(store, { limit: 3, windowMs: 1000 });

if (limiter.allowRequest("user1")) {
  console.log("Request allowed");
} else {
  console.log("Too many requests");
}
