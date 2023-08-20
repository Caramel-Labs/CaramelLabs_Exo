type planetInfoItemProps = {
  title: string
  value: string
}

export default function PlanetInfoItem(props: planetInfoItemProps) {
  return (
    <main className="">
      <p className="text-xs">{props.title}</p>
      <p className="text-base font-bold">{props.value}</p>
    </main>
  )
}
