import Image from "next/image"
import Description from "../shared/description"
import PlanetInfo from "./planetInfo"
import ClimateInfo from "./climateInfo"

export default function Planet() {
  return (
    <div>
      {/* intro */}
      <section>
        <Image height={40} width={40} src="/planet.png" alt="planet" />
        <h1>The gas giant</h1>
        <Description value="planet desc"></Description>
        <PlanetInfo title="temp" value="100C"></PlanetInfo>
      </section>

      {/* culture */}
      <section>
        <h1> Culture</h1>
        <Description value="culture desc"></Description>
      </section>

      {/* fun fact */}
      <section>
        <Image height={40} width={40} src="/halfplanet.png" alt="half-planet" />
        <h1> Fun Fact</h1>
        <Description value="fun fact desc"></Description>
      </section>

      {/* climate */}
      <section>
        <h1> Climate</h1>
        <Description value="climate desc"></Description>
        <ClimateInfo title="O2 percent" value="69%"></ClimateInfo>
      </section>
    </div>
  )
}
