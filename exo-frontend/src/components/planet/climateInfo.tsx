type climateInfoProps = {
  title: string
  value: string
}

export default function ClimateInfo(props: climateInfoProps) {
  return (
    <header className="">
      <h4 className="">{props.title}</h4>
      <p className="">{props.value}</p>
    </header>
  )
}
