type seatButtonProps = {
  seatNumber: string
  availablity: boolean
}

export default function SeatButton(props: seatButtonProps) {
  return (
    <div className="seat-button">
      <button className={`bg-blue-500 ${props.availablity && "bg-green-500 "}`}>
        {props.seatNumber}
      </button>
    </div>
  )
}
