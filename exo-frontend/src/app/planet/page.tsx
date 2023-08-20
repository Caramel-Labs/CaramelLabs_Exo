import Link from "next/link"
import PlanetTab from "@/components/planet/planetTab"
import PageHeader from "@/components/shared/pageHeader"

export default function Planet() {
  return (
    <main className="min-h-screen px-4 bg-black text-white">
      <PageHeader title="Jupiter" />

      {/* Tabs */}
      <div className="flex justify-around text-base py-1.5">
        <h1>Planet</h1>
        <h1>Attractions</h1>
        <h1>Gallery</h1>
        <h1>Flights</h1>
      </div>

      {/* Planet */}
      <PlanetTab />
    </main>
  )
}
