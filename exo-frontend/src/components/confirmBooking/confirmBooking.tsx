import handleBooking from "@/utils/handleBooking"
import SectionHeader from "../bookFlight/sectionHeader"
import SeatButton from "../selectSeats/seatButton"
import BlueButton from "../shared/blueButton"
import FlightOverview from "../shared/flightOverview"
import PageHeader from "../shared/pageHeader"
import UserAvatar from "../shared/userAvatar"
import ConfirmationPageInfo from "./confirmationPageInfo"

import { useFormState } from "@/context/bookingFormContext"

export default function ConfirmBooking() {
  const { onHandleNext, onHandleBack, formData } = useFormState()

  const {
    arrival,
    departure,
    currentClass,
    passengerCount,
    isBusinessTrip,
    isVeganMeal,
    isVegMeal,
  } = formData

  const bookingData = {
    user: "64df1d6d660b27f90c195a3a",
    spaceship: "64df1ef6660b27f90c195a3c",
    trip: ["64ddabe6c50e42701f869076"],
    participants: ["61572b7c8c5f2500159407e3", "61572b7c8c5f2500159407e3"],
    class: currentClass,
    tripType: isBusinessTrip ? "Business" : "Personal",
    vegan: isVeganMeal,
    veg: isVegMeal,
    price: 1500,
    seats: ["A1", "A2", "A3"],
    status: "pending",
  }

  // const bookingData = {
  //   user: "64df1d6d660b27f90c195a3a",
  //   spaceship: "64df1ef6660b27f90c195a3c",
  //   trip: ["64ddabe6c50e42701f869076"],
  //   participants: ["64df1d6d660b27f90c195a3a", "64df1db0660b27f90c195a3b"],
  //   status: "Confirmed",
  //   class: "Cosmo Cruiser",
  //   tripType: "Round-trip",
  //   veg: true,
  //   vegan: false,
  //   price: 2500,
  //   seats: ["A1", "A2"],
  // }

  async function handleBookingSubmit() {
    try {
      const response = await handleBooking(JSON.stringify(bookingData))
      console.log(response, "response")
      if (response && response.status === 200) {
        onHandleNext()
        console.log("Booking successful")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <PageHeader title="Confirm Booking" onHandleBack={onHandleBack} />

      {/* Visualization (with planets) */}
      <section className="flex justify-around">
        <p>{arrival.location}</p>
        <p>Rokit</p>
        <p>{departure.location}</p>
      </section>

      {/* Trip overview */}
      <section className="mt-8">
        <FlightOverview arrival={arrival} departure={departure} />
      </section>

      {/* Passengers */}
      <section>
        <SectionHeader question="Passengers" />
        <UserAvatar src="" firstName="" lastName="" />
        <SeatButton
          seatNumber=""
          isAvailable={true}
          aisle={false}
          isSelected={true}
        />
        <SeatButton
          seatNumber=""
          isAvailable={true}
          aisle={false}
          isSelected={true}
        />
      </section>

      {/* Miscellaneous info */}
      <section className="grid grid-cols-2 gap-y-6">
        <ConfirmationPageInfo title="Terminal" value={departure.terminal} />
        <ConfirmationPageInfo title="Class" value={currentClass} />
        <ConfirmationPageInfo
          title="Trip Type"
          value={isBusinessTrip ? "Business" : "Personal (Family)"}
        />
        <ConfirmationPageInfo
          title="Meal Preferences"
          value={isVegMeal ? "Vegetarian" : isVeganMeal ? "Vegan" : "None"}
        />
      </section>

      {/* Continue button */}
      <section className="flex justify-center items-center mt-12">
        <BlueButton
          text="Continue to payment"
          sgcLogo={false}
          onClick={handleBookingSubmit}
        />
      </section>
    </div>
  )
}
