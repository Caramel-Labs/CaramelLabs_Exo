import Description from "@/components/shared/description"
import SectionHeader from "./sectionHeader"
import FlightOverview from "../shared/flightOverview"
import UserAvatar from "../shared/userAvatar"
import CheckBox from "./checkBox"
import BlueLink from "../shared/blueLink"
import TravelClassButton from "./travelClassButton"
import TotalPrice from "./totalPrice"
import BlackButton from "../shared/blackButton"

export default function bookFlight() {
  const labels = ["checkbox label 1", "checkbox label 2"]
  return (
    <div>
      <h1>One way</h1>
      <h1>Round trip</h1>
      <Description value="" />

      <section>
        <SectionHeader question="" />
        <Description value="" />

        <FlightOverview name="" date="" time="" />
      </section>

      <section>
        <SectionHeader question="" />
        <Description value="" />
        <UserAvatar src="" firstName="" lastName="" />
      </section>

      <section>
        <SectionHeader question="" />
        <Description value="" />
        {labels.map((label, i) => (
          <CheckBox key={i} label={label} />
        ))}
        <BlueLink text="" />
      </section>

      <section>
        <SectionHeader question="" />
        <Description value="" />
        <TravelClassButton name="" iconPath="" />
        <CheckBox label="" />
      </section>

      <section>
        <p> total</p>
        <TotalPrice totalPrice={0} />
        <div>
          <BlackButton text="" />
        </div>
      </section>
    </div>
  )
}
