import { Counter } from "@/components/counter"

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center">
      <h1 className="text-4xl font-extrabold tracking-wide">Counter</h1>
      <Counter />
    </main>
  )
}
