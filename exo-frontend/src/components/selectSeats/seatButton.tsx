type seatButtonProps = {
  seatNumber: string
  availablity: boolean
  aisle: boolean
}

export default function SeatButton(props: seatButtonProps) {
  return (
    <div className="seat-button">
      <button className={`w-9 h-9 text-xs rounded-lg bg-blue-500 ${props.availablity && "bg-green-500 "} ${props.aisle && "bg-black "}`}>
        {props.seatNumber}
      </button>
    </div>
  )
}
