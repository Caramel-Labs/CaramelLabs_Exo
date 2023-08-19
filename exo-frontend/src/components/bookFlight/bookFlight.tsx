"use client"

import Description from "@/components/shared/description"
import SectionHeader from "./sectionHeader"
import FlightOverview from "../shared/flightOverview"
import UserAvatar from "../shared/userAvatar"
import CheckBox from "./checkBox"
import BlueLink from "../shared/blueLink"
import TravelClassButton from "./travelClassButton"
import TotalTicketPrice from "./totalTicketPrice"
import BlackButton from "../shared/blackButton"
import PageHeader from "../shared/pageHeader"

import { useState } from "react"

export default function BookFlight(props: any) {
  const labels = ["Include vegetarian meals", "Include vegan meals"]

  const [passengerCount, setPassengerCount] = useState(1)
  const [currentClass, setCurrentClass] = useState("Cosmo")

  const { arrival, departure, cosmoCruiser, orionLux, astroHop } = props.props
  console.log(props, "data cominggg")

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
        <FlightOverview arrival={arrival} departure={departure} />
      </section>

      {/* Add passengers */}
      <section>
        <SectionHeader question="Who's coming with you?" />
        <Description value="Other passengers will receive their tickets on their Exo apps." />
        <UserAvatar src="../public/next.svg" firstName="" lastName="" />
      </section>

      {/* Meal preferences */}
      <section>
        <SectionHeader question="Any meal preferences?" />
        <Description value="Exo will automatically check for allergens your passengers may have and avoid such foods and beverages being served to them." />
        <div className="flex flex-col mt-4 gap-y-3">
          {labels.map((label, i) => (
            <CheckBox key={i} label={label} />
          ))}
        </div>
        <div className="text-center pt-2 pb-5">
          <BlueLink text="Contact spaceport for more options" />
        </div>
      </section>

      {/* Class */}
      <section>
        <SectionHeader question="How are you flying?" />
        <Description value="Press and hold to view class details" />
        <div className="flex justify-between py-6">
          <TravelClassButton
            name1="Cosmo"
            name2="Cruiser"
            icon="C"
            currentClass={currentClass}
            setCurrentClass={setCurrentClass}
          />
          <TravelClassButton
            name1="Orion"
            name2="Lux"
            icon="O"
            currentClass={currentClass}
            setCurrentClass={setCurrentClass}
          />
          <TravelClassButton
            name1="Astro"
            name2="Hop"
            icon="A"
            currentClass={currentClass}
            setCurrentClass={setCurrentClass}
          />
        </div>
        <CheckBox label="This is a business / official trip" />
      </section>

      {/* Line break */}
      <hr className="bg-zinc-800 my-6" />

      {/* Running total */}
      <section className="flex justify-between items-center mb-4 px-4 bg-white text-black py-3 rounded-lg">
        <div>
          <p className="text-xs">Total</p>
          <TotalTicketPrice
            passengerCount={passengerCount}
            cosmoCruiserPrice={cosmoCruiser.ticketPrice}
            astroHopPrice={astroHop.ticketPrice}
            orionLuxPrice={orionLux.ticketPrice}
            currentClass={currentClass}
          />
        </div>
        <div>
          <BlackButton text="Get Seats" />
        </div>
      </section>
    </main>
  )
}
