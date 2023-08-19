type seatButtonProps = {
  seatNumber: string
  availability: boolean
  aisle: boolean
  seatStatus: number
}

// seatStatus == 0 means the seat is not available
// seatStatus == 1 means the seat is available
// seatStatus == 2 means the seat is selected

const SeatButton: React.FC<seatButtonProps> = (props) => {
  return (
    <div className="seat-button">
      <button className={`w-9 h-9 text-xs font-bold rounded-lg ${props.aisle ? "bg-black" : "bg-white text-black"} ${props.availability ? "bg-white text-black" : "bg-gray-900"} ${props.seatStatus}`}>
        {props.seatNumber}
      </button>
    </div>
  )
}

export default SeatButton
