import SectionHeader from "../bookFlight/sectionHeader"
import SeatButton from "../selectSeats/seatButton"
import BlueButton from "../shared/blueButton"
import FlightOverview from "../shared/flightOverview"
import PageHeader from "../shared/pageHeader"
import UserAvatar from "../shared/userAvatar"
import ConfirmationPageInfo from "./confirmationPageInfo"

export default function ConfirmBooking(props: any) {
  const { arrival, departure } = props.props[0]

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
        <SeatButton seatNumber="" isAvailable={true} aisle={false} isSelected={true} />
      </section>

      {/* Miscellaneous info */}
      <section className="grid grid-cols-2">
        <ConfirmationPageInfo title="Terminal" value="Kronos Gate 7B" />
        <ConfirmationPageInfo title="Class" value="Cosmo Cruiser" />
        <ConfirmationPageInfo title="Trip Type" value="Personal (Family)" />
        <ConfirmationPageInfo title="Meal Preferences" value="None" />
      </section>

      {/* Continue button */}
      <section className="flex justify-center items-center mt-12">
        <BlueButton text="Continue to payment" sgcLogo={false} />
      </section>
    </div>
  )
}
