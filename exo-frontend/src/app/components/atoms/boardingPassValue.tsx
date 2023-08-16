type BoardingPassValueProps = {
  value: number
}

export default function BoardingPassValue(props: BoardingPassValueProps) {
  return (
    <div>
      <p> {props.value}</p>
      <p> CR</p>
    </div>
  )
}
