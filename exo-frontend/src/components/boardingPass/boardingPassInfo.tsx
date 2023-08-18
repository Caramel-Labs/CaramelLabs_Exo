type BoardingPassInfoProps = {
  title: string
  value: string
}

export default function BoardingPassTitle(props: BoardingPassInfoProps) {
  return (
    <header className="">
      <h4>{props.title}</h4>
      <p> {props.value}</p>
    </header>
  )
}
