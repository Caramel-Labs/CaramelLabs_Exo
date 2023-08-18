import BookFlight from "@/components/bookFlight/bookFlight"
import SelectSeats from "@/components/selectSeats/selectSeats"

export default async function Booking() {
  const data = await getTripData()
  return (
    <main className="min-h-screen px-4 bg-black">
      <SelectSeats />
    </main>
  )
}
