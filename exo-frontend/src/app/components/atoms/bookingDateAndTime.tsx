type bookingDateAndTimeProps = {
  date: string
  time: string
}

export default function BookingDateAndTime(props: bookingDateAndTimeProps) {
  return (
    <div>
      <h4>{props.date}</h4>
      <p> {props.time}</p>
    </div>
  )
}
