import Image from "next/image"
import Description from "../shared/description"
import PlanetInfoItem from "./planetInfoItem"
import ClimateInfoItem from "./climateInfoItem"
import Subheading from "./subheading"
import BookFlightButton from "./bookFlightButton"

export default function PlanetTab() {
  return (
    <div>

      {/* Planet image */}
      <section className="flex justify-center items-center mt-6">
        <Image height={268} width={255.28} src="/planets/Jupiter.png" alt="planet" />
      </section>

      {/* Introduction */}
      <section className="mt-9">
        <h1 className="text-3xl font-bold mb-3">The Gas Giant</h1>
        <Description value="Welcome to the ultimate cosmic escape – Jupiter! Immerse yourself in a transformed realm where once treacherous storms have surrendered to tranquil skies. Explore floating cities, lush landscapes, and a harmonious blend of nature and innovation." />
      </section>

      {/* Planet statistics */}
      <section className="grid grid-cols-2 gap-y-6 mt-9">
        <PlanetInfoItem title="Distance" value="715 million km" />
        <PlanetInfoItem title="Solar Day" value="10 hr" />
        <PlanetInfoItem title="Gravity" value="2.54 G" />
        <PlanetInfoItem title="Temperature" value="(-160) C ~ (-100) C" />
      </section>

      {/* Culture */}
      <section className="mt-12">
        <Subheading title={'Culture'} />
        <Description value={`Embark on a deep journey of culture - a captivating fusion of subcultures that beckons the curious traveler.\n\ \n\
Immersed in Jupiter's vibrant culture, its inhabitants thrive in diverse subcultures. From the artistic flair of the "Aurora Painters" to the scientific rigor of the "Galactic Explorers," unity prevails. Festivals celebrate Jovian diversity, while communal sky-gazing fosters a shared connection to the gas giant's mesmerizing beauty.`}></Description>
      </section>

      {/* Fun fact */}
      <section className="bg-zinc-800 flex justify-around py-6 px-5 mt-9 rounded-lg">
        <Image height={40} width={40} src="/halfplanet.png" alt="half-planet" />
        <div>
          <h1 className="text-base font-bold text-yellow-400 mb-1">Fun Fact</h1>
          <Description value="Historically, Jupiter was initially thought to be completely uninhabited until 2024, when NASA's Clipper discovered schools of Jovian whales in the planet's atmosphere"></Description>
        </div>
      </section>

      {/* Climate and Environment */}
      <section className="mt-16">
        <Subheading title={'Climate and Environment'} />
        <Description value="As a cosmic traveler, you'll find Jupiter's climate remarkably transformed into a habitable haven. Once turbulent storms have given way to serene skies, and advanced terraforming has paved the way for floating cities. Lush landscapes thrive, carefully sustained by engineered ecosystems."></Description>
        <ClimateInfoItem title="O2 percent" value="69%"></ClimateInfoItem>
        <hr />
        <ClimateInfoItem title="Time to acclimatize to gravity" value="6 - 8 days"></ClimateInfoItem>
        <hr />
        <ClimateInfoItem title="Current Season" value="Swirlstorm (Northern Maelstrom)"></ClimateInfoItem>
      </section>

      {/* 'Book Flight' button */}
      <section className="mt-16">
        <BookFlightButton />
      </section>
    </div>
  )
}
