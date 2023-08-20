import SeatLayout from "./seatLayout"

export default function AstroHop() {
  const seatLayout = [
    "A1",
    "A2",
    "A3",
    "X",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
    "X",
    "A12",
    "A13",
    "A14",
    "A15",
    "A16",
    "A17",
    "X",
    "A19",
    "A20",
    "A21",
    "A22",
    "A23",
    "A24",
    "X",
    "A26",
    "A27",
    "A28",
  ]

  const rows = 4
  const seatsPerRow = 7

  return (
    <SeatLayout rows={rows} seatsPerRow={seatsPerRow} seatLayout={seatLayout} />
  )
}
