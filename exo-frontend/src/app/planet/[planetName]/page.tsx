import PlanetTab from "@/components/planet/planetTab"
import PageHeader from "@/components/shared/pageHeader"
import getPlanetData from "@/utils/getPlanetData"

type planetProps = {
  params: {
    planetName: string
  }
}

export default async function Planet({ params }: planetProps) {
  const planetData = await getPlanetData(params.planetName)
  console.log(planetData, "planet data")

  return (
    <main className="min-h-screen px-4 bg-black text-white">
      <PageHeader title={`${params.planetName}`} />

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
