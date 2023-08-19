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

  async function handleBookingSubmit() {
    try {
      const response = await handleBooking(formData)

      if (response.status === 200) {
        onHandleNext()
        console.log("Booking successful")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <PageHeader title="Confirm Booking" />

      {/* Visualization (with planets) */}
      <section className="flex justify-around">
        <p>{arrival.location}</p>
        <p>Rokit</p>
        <p>{departure.location}</p>
      </section>

      {/* Trip overview */}
      <section>
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
      <section className="grid grid-cols-2">
        <ConfirmationPageInfo title="Terminal" value={departure.terminal} />
        <ConfirmationPageInfo title="Class" value={currentClass} />
        <ConfirmationPageInfo
          title="Trip Type"
          value={isBusinessTrip ? "Business" : "Personal(Family)"}
        />
        <ConfirmationPageInfo
          title="Meal Preferences"
          value={isVegMeal ? "Vegetarian" : isVeganMeal ? "Vegan" : "none"}
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
