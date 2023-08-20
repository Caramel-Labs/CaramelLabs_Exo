import convertDateFromISO from "@/utils/formatDate"

type flightDataProps = {
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
export default function FlightData(props: flightDataProps) {
  const departureDateAndTime = convertDateFromISO(props.departure.date)
  const arrivalDateAndTime = convertDateFromISO(props.arrival.date)

  return <div></div>
}
