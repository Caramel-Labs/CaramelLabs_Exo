"use-client"

import BookFlight from "@/components/bookFlight/bookFlight"
import SelectSeats from "@/components/selectSeats/selectSeats"

export default function Booking() {
  return (
    <main className="min-h-screen px-4 bg-black">
      {/* change tag as necessary during development */}
      <SelectSeats />
    </main>
  )
}
