import BookingDateAndTime from "./bookingDateAndTime"
import SpacePortName from "./spacePortName"
import convertDateFromISO from "../../utils/convertDateFromISO"

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
  const departureDateAndTime = convertDateFromISO(props.departure.date)
  const arrivalDateAndTime = convertDateFromISO(props.arrival.date)

  //console.log(departureDateAndTime, "data cominggg heree")

  return (
    <div>
      <div>
        <SpacePortName name={props.departure.location} />
        <BookingDateAndTime
          date={departureDateAndTime[0]}
          time={departureDateAndTime[1]}
        />
      </div>
      <div>Rocketship go brrr</div>
      <div>
        <SpacePortName name={props.arrival.location} />
        <BookingDateAndTime
          date={arrivalDateAndTime[0]}
          time={arrivalDateAndTime[1]}
        />
      </div>
    </div>
  )
}
