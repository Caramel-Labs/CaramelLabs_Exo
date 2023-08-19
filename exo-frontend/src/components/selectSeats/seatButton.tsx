type seatButtonProps = {
  seatNumber: string
  isAvailable: boolean
  aisle: boolean
  isSelected: boolean
}

// seatStatus == 0 means the seat is not available
// seatStatus == 1 means the seat is available
// seatStatus == 2 means the seat is selected

const SeatButton: React.FC<seatButtonProps> = (props) => {
  return (
    <div className="seat-button">
      <button className={`w-9 h-9 text-xs font-bold rounded-lg ${props.isAvailable ? "bg-white text-black" : "bg-gray-900 text-white"} ${props.isSelected ? "bg-green-500 text-black" : ""} ${props.aisle ? "bg-black text-black" : ""}`}>
        {props.seatNumber}
      </button>
    </div>
  )
}

export default SeatButton
