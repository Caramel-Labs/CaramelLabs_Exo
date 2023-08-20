import SeatButton from "./seatButton"

export default function CosmoCruiser() {
  const seatLayout = [
    "C1",
    "C2",
    "",
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
    //   <div>
    //     <section className="mt-8 grid grid-cols-7 grid-rows-3 gap-3">
    //       {/* First row */}
    //       <SeatButton
    //         seatNumber="C1"
    //         isAvailable={false}
    //         aisle={false}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="C2"
    //         isAvailable={false}
    //         aisle={false}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="X"
    //         isAvailable={false}
    //         aisle={true}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="X"
    //         isAvailable={false}
    //         aisle={true}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="X"
    //         isAvailable={false}
    //         aisle={true}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="C3"
    //         isAvailable={true}
    //         aisle={false}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="C4"
    //         isAvailable={true}
    //         aisle={false}
    //         isSelected={false}
    //       />

    //       {/* Second row */}
    //       <SeatButton
    //         seatNumber="C5"
    //         isAvailable={true}
    //         aisle={false}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="C6"
    //         isAvailable={true}
    //         aisle={false}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="C7"
    //         isAvailable={true}
    //         aisle={false}
    //         isSelected={true}
    //       />
    //       <SeatButton
    //         seatNumber="X"
    //         isAvailable={false}
    //         aisle={true}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="C8"
    //         isAvailable={false}
    //         aisle={false}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="C9"
    //         isAvailable={false}
    //         aisle={false}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="C10"
    //         isAvailable={false}
    //         aisle={false}
    //         isSelected={false}
    //       />

    //       {/* Third row */}
    //       <SeatButton
    //         seatNumber="C11"
    //         isAvailable={true}
    //         aisle={false}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="C12"
    //         isAvailable={true}
    //         aisle={false}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="C13"
    //         isAvailable={false}
    //         aisle={false}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="X"
    //         isAvailable={false}
    //         aisle={true}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="C14"
    //         isAvailable={true}
    //         aisle={false}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="C15"
    //         isAvailable={true}
    //         aisle={false}
    //         isSelected={false}
    //       />
    //       <SeatButton
    //         seatNumber="C16"
    //         isAvailable={true}
    //         aisle={false}
    //         isSelected={false}
    //       />
    //     </section>
    //   </div>
    //

    <div>
      <div className="flex flex-col items-center">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div className="flex gap-4" key={rowIndex}>
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
