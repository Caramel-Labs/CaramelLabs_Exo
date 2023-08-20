import SeatLayout from "./seatLayout"

export default function OrionLux() {
  const seatLayout = [
    "O1",
    "O2",
    "O3",
    "X",
    "O5",
    "O6",
    "O7",
    "O8",
    "O9",
    "O10",
    "X",
    "O12",
    "O13",
    "O14",
    "O15",
    "O16",
    "O17",
    "X",
    "O19",
    "O20",
    "O21",
    "O22",
    "O23",
    "O24",
    "X",
    "O26",
    "O27",
    "O28",
  ]
  const rows = 4
  const seatsPerRow = 7

  return (
    <SeatLayout rows={rows} seatsPerRow={seatsPerRow} seatLayout={seatLayout} />
  )
}
