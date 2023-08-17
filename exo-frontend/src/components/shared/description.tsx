type descriptionProps = {
  value: string
}

export default function Description(props: descriptionProps) {
  return <p className="text-xs">{props.value}</p>
}
