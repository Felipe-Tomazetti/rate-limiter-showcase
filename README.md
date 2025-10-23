# Rate Limiter Showcase

This project demonstrates **clean, testable software design** using TypeScript, based on SOLID principles.

## 🎯 Overview

A small but realistic rate-limiting system implementing a **Fixed Window algorithm**.  
It shows clean separation between **domain**, **infrastructure**, and **service** layers.

## 🧱 Architecture

- **Domain**: Defines interfaces and models.
- **Infrastructure**: Provides a `MemoryStore` implementation of `Store`.
- **Services**: Contains `FixedWindowRateLimiter`, which enforces rate limits.
- **Tests**: Built with Jest, following TDD practices.

## 💡 Why This Design

- **Testable:** Core logic depends only on interfaces.
- **Modular:** Swappable persistence (Memory, Redis, etc.).
- **Predictable:** Small, low-risk commits.
- **Readable:** Each class has a clear single responsibility.

## 🚀 Run Tests

```bash
npm install
npm test
```
