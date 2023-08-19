type bookingDateAndTimeProps = {
  date: string
  time: string
}

export default function BookingDateAndTime(props: bookingDateAndTimeProps) {
  return (
    <div className="flex flex-col justify-center items-center font-bold">
      <h4>{props.date}</h4>
      <p className="text-xs">{props.time}</p>
    </div>
  )
}
