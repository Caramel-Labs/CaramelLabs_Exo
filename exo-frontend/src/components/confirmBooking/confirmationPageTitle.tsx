type confirmationPageInfoProps = {
  title: string
  value: string
}

export default function ConfirmationPageInfo(props: confirmationPageInfoProps) {
  return (
    <header className="">
      <h4>{props.title}</h4>
      <p> {props.value}</p>
    </header>
  )
}
