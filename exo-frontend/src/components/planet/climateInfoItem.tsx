type climateInfoItemProps = {
  title: string
  value: string
}

export default function ClimateInfoItem(props: climateInfoItemProps) {
  return (
    <header className="flex justify-between text-xs my-4">
      <p className="">{props.title}</p>
      <p className="font-bold">{props.value}</p>
    </header>
  )
}
