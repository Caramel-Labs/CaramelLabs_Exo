import SeatButton from "./seatButton"

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
    <div>
      <div className="flex flex-col items-center gap-3 mt-9">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div className="flex gap-3.5" key={rowIndex}>
            {seatLayout
              .slice(rowIndex * seatsPerRow, (rowIndex + 1) * seatsPerRow)
              .map((seatName, seatIndex) => (
                <SeatButton key={seatIndex} seatNumber={seatName} />
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}
