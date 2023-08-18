import Description from "@/components/shared/description"
import SectionHeader from "./sectionHeader"
import FlightOverview from "../shared/flightOverview"
import UserAvatar from "../shared/userAvatar"
import CheckBox from "./checkBox"
import BlueLink from "../shared/blueLink"
import TravelClassButton from "./travelClassButton"
import TotalPrice from "./totalPrice"
import BlackButton from "../shared/blackButton"
import PageHeader from "../shared/pageHeader"

export default function BookFlight() {
  const labels = ["checkbox label 1", "checkbox label 2"]
  return (
    <main className="bg-black text-white">
      {/* Page header */}
      <PageHeader title="Book Flight" />

      {/* Trip type (tabs) */}
      <div className="flex justify-around text-base py-1.5">
        <h1>One way</h1>
        <h1>Round trip</h1>
      </div>

      {/* Trip description */}
      <section>
        <Description value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      </section>

      {/* Flight overview */}
      <section>
        <SectionHeader question="What's the flight?" />
        <Description value="Other passengers will receive their tickets on their Exo apps." />

        <FlightOverview name="" date="" time="" />
      </section>

      {/* Add passengers */}
      <section>
        <SectionHeader question="" />
        <Description value="" />
        <UserAvatar src="" firstName="" lastName="" />
      </section>

      {/* Meal Preferences */}
      <section>
        <SectionHeader question="Any meal preferences?" />
        <Description value="Exo will automatically check for allergens your passengers may have and avoid such foods and beverages being served to them." />
        {labels.map((label, i) => (
          <CheckBox key={i} label={label} />
        ))}
        <div className="text-center pt-2">
          <BlueLink text="Contact spaceport for more options" />
        </div>
      </section>

      {/* Class */}
      <section>
        <SectionHeader question="How are you flying?" />
        <Description value="Press and hold to view class details" />
        <div className="flex justify-between py-6">
          <TravelClassButton name="Cosmo Cruiser" icon="C" />
          <TravelClassButton name="Orion Lux" icon="O" />
          <TravelClassButton name="Astro Hop" icon="A" />
        </div>
        <CheckBox label="This is a business / official trip" />
      </section>

      {/* Line break */}

      <hr className="bg-zinc-800 my-6" />

      {/* Running total */}
      <section className="flex justify-between items-center mb-4 px-4 bg-white text-black py-3">
        <div>
          <p className="text-xs">Total</p>
          <TotalPrice totalPrice={69} />
        </div>
        <div>
          <BlackButton text="Get Seats" />
        </div>
      </section>
    </main>
  )
}
