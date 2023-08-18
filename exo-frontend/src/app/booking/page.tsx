import BookFlight from "@/components/bookFlight/bookFlight"
import SelectSeats from "@/components/selectSeats/selectSeats"
import getTripData from "@/utils/getTripData"
import { data } from "autoprefixer"

export default async function Booking() {
  const data = await getTripData()
  return (
    <main className="min-h-screen px-4 bg-black">
      <BookFlight props={data} />
      <SelectSeats />
    </main>
  )
}
