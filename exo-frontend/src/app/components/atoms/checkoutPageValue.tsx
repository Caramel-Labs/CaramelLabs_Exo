type checkoutPageValueProps = {
  value: string
}

export default function BoardingPassValue(props: checkoutPageValueProps) {
  return <p> {props.value}</p>
}
