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
      <section className="flex justify-around">
        <p>{arrival.location}</p>
        <p>Rokit</p>
        <p>{departure.location}</p>
      </section>

      <section>
        <FlightOverview arrival={arrival} departure={departure} />
      </section>

      <section>
        <SectionHeader question="Passengers" />
        <UserAvatar src="" firstName="" lastName="" />
        <SeatButton seatNumber="" isAvailable={true} aisle={false} isSelected={true} />
      </section>

      <section>
        <ConfirmationPageInfo title="terminal" value="" />
      </section>

      <BlueButton text="Continue to payment" sgcLogo={false} />
    </div>
  )
}
