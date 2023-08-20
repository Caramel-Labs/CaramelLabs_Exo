import SeatButton from "./seatButton"

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
    <div>
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
    </div>
  )
}
