type spacePortNameProps = {
  name: string
}

export default function SpacePortName(props: spacePortNameProps) {
  return <h4 className="text-white/40 font-bold text-xl">{props.name}</h4>
}
