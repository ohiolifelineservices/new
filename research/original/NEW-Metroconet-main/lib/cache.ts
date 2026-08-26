"use client"

import { useState, useEffect } from "react"

interface CacheItem<T> {
  value: T
  expiry: number
}

class AdvancedCache {
  private storage: Storage

  constructor() {
    this.storage = typeof window !== "undefined" ? window.localStorage : null
  }

  set<T>(key: string, value: T, ttl: number): void {
    if (!this.storage) return

    const item: CacheItem<T> = {
      value: value,
      expiry: Date.now() + ttl,
    }

    this.storage.setItem(key, JSON.stringify(item))
  }

  get<T>(key: string): T | null {
    if (!this.storage) return null

    const item = this.storage.getItem(key)
    if (!item) return null

    const cachedItem: CacheItem<T> = JSON.parse(item)

    if (Date.now() > cachedItem.expiry) {
      this.storage.removeItem(key)
      return null
    }

    return cachedItem.value
  }

  remove(key: string): void {
    if (!this.storage) return
    this.storage.removeItem(key)
  }

  clear(): void {
    if (!this.storage) return
    this.storage.clear()
  }
}

export const cache = new AdvancedCache()

export function useCachedData<T>(key: string, fetchData: () => Promise<T>, ttl = 3600000) {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    const fetchCachedData = async () => {
      const cachedData = cache.get<T>(key)
      if (cachedData) {
        setData(cachedData)
        return
      }

      const newData = await fetchData()
      cache.set(key, newData, ttl)
      setData(newData)
    }

    fetchCachedData()
  }, [key, fetchData, ttl])

  return data
}
