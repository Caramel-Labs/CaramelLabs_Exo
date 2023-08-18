import BookingDateAndTime from "./bookingDateAndTime"
import SpacePortName from "./spacePortName"

type flightOverviewProps = {
  departure: {
    location: string
    date: string
    terminal: string
  }
  arrival: {
    location: string
    date: string
    terminal: string
  }
}

export default function FlightOverview(props: flightOverviewProps) {
  console.log(props, "data cominggg heree")
  return (
    <div>
      <div>
        <SpacePortName name={props.departure.location} />
        <BookingDateAndTime
          date={props.departure.date}
          time={props.departure.date}
        />
      </div>
      <div>Rocketship go brrr</div>
      <div>
        <SpacePortName name={props.arrival.location} />
        <BookingDateAndTime
          date={props.arrival.date}
          time={props.arrival.date}
        />
      </div>
    </div>
  )
}
