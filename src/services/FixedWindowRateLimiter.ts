import { RateLimiter } from "../domain/interfaces/RateLimiter.js";
import { Store } from "../domain/interfaces/Store.js";
import { RequestRecord } from "../domain/models/RequestRecord.js";

interface RateLimiterOptions {
  limit: number;
  windowMs: number;
}

export class FixedWindowRateLimiter implements RateLimiter {
  constructor(private store: Store, private options: RateLimiterOptions) {}

  allowRequest(userId: string): boolean {
    const now = Date.now();
    const key = `rate:${userId}`;
    const record = this.store.get<RequestRecord>(key);

    if (!record || now - record.windowStart >= this.options.windowMs) {
      this.store.set<RequestRecord>(key, { count: 1, windowStart: now });
      return true;
    }

    if (record.count < this.options.limit) {
      this.store.set<RequestRecord>(key, record);
      return true;
    }

    return false;
  }
}
