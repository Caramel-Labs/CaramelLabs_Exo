import getTripData from "@/utils/getTripData"
// import ActiveStepForm from "@/components/shared/ActiveStepFrom"
import BookingStepForm from "@/components/shared/BookingStepFrom"

export default async function Booking() {
  const data = await getTripData()
  // console.log(data.arrival)
  return (
    <main className="min-h-screen px-4 bg-black">
      <BookingStepForm props={data} />
    </main>
  )
}
