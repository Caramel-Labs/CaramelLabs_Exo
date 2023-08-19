import BookingDateAndTime from "./bookingDateAndTime"
import SpacePortName from "./spacePortName"
import convertDateFromISO from "../../utils/formatDate"
import Image from "next/image"

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

  // console.log(departureDateAndTime, "data cominggg heree")

  return (
    <main className="flex justify-around">
      {/* Departure */}
      <div className="flex flex-col justify-center items-center">
        <SpacePortName name={props.departure.location} />
        <BookingDateAndTime
          date={departureDateAndTime[0]}
          time={departureDateAndTime[1]}
        />
      </div>

      {/* Rocket */}
      <div>
        <Image
          src={"/forward-rocket.png"}
          alt="Rocket moving forward"
          width={133}
          height={21}
        />
      </div>

      {/* Arrival */}
      <div className="flex flex-col justify-center items-center">
        <SpacePortName name={props.arrival.location} />
        <BookingDateAndTime
          date={arrivalDateAndTime[0]}
          time={arrivalDateAndTime[1]}
        />
      </div>
    </main>
  )
}
