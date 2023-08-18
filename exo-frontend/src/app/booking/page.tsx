import BookFlight from "@/components/bookFlight/bookFlight"

export default async function Booking() {
  const data = await getTripData()
  return (
    <main className="px-4 bg-black">
      <BookFlight />
    </main>
  )
}
