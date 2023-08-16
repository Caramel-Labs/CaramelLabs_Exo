type spacePortNameProps = {
  name: string
}

export default function SpacePortName(props: spacePortNameProps) {
  return <h4>{props.name}</h4>
}
