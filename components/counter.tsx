"use client"

import { useState } from "react"
// import { incrementCount } from './actions'
import { Button } from "@/components/ui/button"

export function Counter({ initialCount = 0 }: { initialCount?: number }) {
  const [count, setCount] = useState(initialCount)
  const [isLoading, setIsLoading] = useState(false)

  const handleIncrement = async () => {
    setIsLoading(true)
    try {
      // const newCount = await incrementCount()
      // setCount(newCount)
      setCount(count + 1)
    } catch (error) {
      console.error("Failed to increment count:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <p>Current count: {count}</p>
      <Button className="font-mono" onClick={handleIncrement} disabled={isLoading}>
        {isLoading ? "Incrementing..." : "++ count"}
      </Button>
    </div>
  )
}
