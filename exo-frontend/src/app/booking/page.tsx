import BookFlight from "@/components/bookFlight/bookFlight"
import Checkout from "@/components/checkout/checkout"
import SelectSeats from "@/components/selectSeats/selectSeats"
import getTripData from "@/utils/getTripData"
import { data } from "autoprefixer"
import ConfirmBooking from "@/components/confirmBooking/confirmBooking"

export default async function Booking() {
  const data = await getTripData()
  return (
    <main className="min-h-screen px-4 bg-black">
      <ConfirmBooking />
    </main>
  )
}
