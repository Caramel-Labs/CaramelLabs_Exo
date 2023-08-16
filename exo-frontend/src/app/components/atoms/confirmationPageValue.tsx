type confirmationPageValueProps = {
  value: string
}

export default function BoardingPassValue(props: confirmationPageValueProps) {
  return <p> {props.value}</p>
}
