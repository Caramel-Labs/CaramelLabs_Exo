import BookingDateAndTime from "./bookingDateAndTime"
import SpacePortName from "./spacePortName"

type flightOverviewProps = {
  name: string
  date: string
  time: string
}

export default function FlightOverview(props: flightOverviewProps) {
  return (
    <div>
      <div>
        <SpacePortName name="" />
        <BookingDateAndTime date="" time="" />
      </div>
      <div> rocketshippppp</div>
      <div>
        <SpacePortName name="" />
        <BookingDateAndTime date="" time="" />
      </div>
    </div>
  )
}
