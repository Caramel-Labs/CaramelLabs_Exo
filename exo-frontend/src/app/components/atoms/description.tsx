type descriptionProps = {
  value: string
}

export default function Description(props: descriptionProps) {
  return <p>{props.value}</p>
}
