import BookFlight from "@/components/bookFlight/bookFlight"
import getTripData from "@/utils/getTripData"
import { data } from "autoprefixer"

export default async function Booking() {
  const data = await getTripData()
  return (
    <main className="px-4 bg-black">
      <BookFlight props={data} />
    </main>
  )
}
