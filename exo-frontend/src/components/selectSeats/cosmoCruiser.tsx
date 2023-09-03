import SeatLayout from "./seatLayout"

type cosmoCruiserProps = {
  availableSeats: string[]
}

export default function CosmoCruiser(props: cosmoCruiserProps) {
  const seatLayout = [
    "C1",
    "C2",
    "X",
    "X",
    "X",
    "C6",
    "C7",
    "C8",
    "C9",
    "C10",
    "X",
    "C12",
    "C13",
    "C14",
    "C15",
    "C16",
    "C17",
    "X",
    "C19",
    "C20",
    "C21",
  ]

  const rows = 3
  const seatsPerRow = 7
  return (
    <SeatLayout
      rows={rows}
      seatsPerRow={seatsPerRow}
      seatLayout={seatLayout}
      availableSeats={props.availableSeats}
    />
  )
}
