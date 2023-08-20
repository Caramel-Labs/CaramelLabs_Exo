type descriptionProps = {
  value: string
}

export default function Description(props: descriptionProps) {
  return <p className="text-xs text-neutral-400 leading-5">{props.value}</p>
}
