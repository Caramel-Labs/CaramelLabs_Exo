import SeatButton from "./seatButton"
//import { SelectedSeatsProvider } from "@/context/seatSelectionContext"

type SeatLayoutProps = {
  rows: number
  seatsPerRow: number
  seatLayout: string[]
  availableSeats: string[]
}

export default function SeatLayout(props: SeatLayoutProps) {
  return (
    <div>
      {/* <SelectedSeatsProvider> */}
      <div className="flex flex-col items-center gap-3 mt-9">
        {Array.from({ length: props.rows }).map((_, rowIndex) => (
          <div className="flex gap-3.5" key={rowIndex}>
            {props.seatLayout
              .slice(
                rowIndex * props.seatsPerRow,
                (rowIndex + 1) * props.seatsPerRow
              )
              .map((seatName, seatIndex) => (
                <SeatButton
                  key={seatIndex}
                  seatNumber={seatName}
                  isAvailable={props.availableSeats.includes(seatName)}
                />
              ))}
          </div>
        ))}
      </div>
      {/* </SelectedSeatsProvider> */}
    </div>
  )
}
