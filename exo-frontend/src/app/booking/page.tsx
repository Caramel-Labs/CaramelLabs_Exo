import getTripData from "@/utils/getTripData"
import ActiveStepForm from "@/components/shared/ActiveStepFrom"

export default async function Booking() {
  const data = await getTripData()
  //console.log(data.arrival)
  return (
    <main className="min-h-screen px-4 bg-black">
      <ActiveStepForm props={data} />
    </main>
  )
}
