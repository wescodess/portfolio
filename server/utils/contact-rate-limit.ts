interface RateLimitEntry {
  count: number
  resetAt: number
}

export interface RateLimitResult {
  allowed: boolean
  remaining: number
  retryAfterSeconds: number
}

export class ContactRateLimiter {
  private readonly entries = new Map<string, RateLimitEntry>()

  constructor(
    private readonly limit = 3,
    private readonly windowMs = 15 * 60 * 1000,
  ) {}

  consume(key: string, now = Date.now()): RateLimitResult {
    this.prune(now)

    const existing = this.entries.get(key)
    const entry = !existing || existing.resetAt <= now
      ? { count: 0, resetAt: now + this.windowMs }
      : existing

    entry.count += 1
    this.entries.set(key, entry)

    const allowed = entry.count <= this.limit
    return {
      allowed,
      remaining: Math.max(this.limit - entry.count, 0),
      retryAfterSeconds: Math.max(Math.ceil((entry.resetAt - now) / 1000), 1),
    }
  }

  reset(): void {
    this.entries.clear()
  }

  private prune(now: number): void {
    if (this.entries.size < 500) return

    for (const [key, entry] of this.entries) {
      if (entry.resetAt <= now) this.entries.delete(key)
    }
  }
}

export const contactRateLimiter = new ContactRateLimiter()
