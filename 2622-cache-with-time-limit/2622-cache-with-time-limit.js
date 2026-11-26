class TimeLimitedCache {
    #cache;
    constructor() {
        this.#cache = new Map();
    }
    #hasExpired(key) {
        const [value, expiration] = this.#cache.get(key);
        return expiration < Date.now();
    }
    set(key, value, duration) {
        if (this.#keyExists(key) && this.#hasExpired(key)) return false;
        const alreadyExists = this.#keyExists(key);
        this.#cache.set(key, [value, Date.now() + duration]);
        return alreadyExists;
    }
    get(key) {
        if (!this.#keyExists(key) || this.#hasExpired(key)) return -1;
        return this.#getValue(key);
    }
    #getValue(key) {
        const [value] = this.#cache.get(key);
        return value;
    }
    #keyExists(key) {
        return this.#cache.has(key);
    }
    count() {
        const unExpiredItems = [...this.#cache].filter(([key]) => !this.#hasExpired(key));
        return unExpiredItems.length;
    }
}
