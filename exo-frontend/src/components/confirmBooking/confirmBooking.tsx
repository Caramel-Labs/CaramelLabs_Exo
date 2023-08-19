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
      <section>
        <p>Planet nameee</p>
        <p> rocketttttttttt</p>
        <p>Planet nameee</p>
      </section>

      <section>
        <FlightOverview arrival={arrival} departure={departure} />
      </section>

      <section>
        <SectionHeader question="Passengers" />
        <UserAvatar src="" firstName="" lastName="" />
        <SeatButton seatNumber="" availablity={true} aisle={false} />
      </section>

      <section>
        <ConfirmationPageInfo title="terminal" value="" />
      </section>

      <BlueButton text="Continue to payment" sgcLogo={false} />
    </div>
  )
}
