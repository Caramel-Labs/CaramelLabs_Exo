type planetInfoProps = {
  title: string
  value: string
}

export default function PlanetInfo(props: planetInfoProps) {
  return (
    <header className="">
      <h4 className="">{props.title}</h4>
      <p className="">{props.value}</p>
    </header>
  )
}
