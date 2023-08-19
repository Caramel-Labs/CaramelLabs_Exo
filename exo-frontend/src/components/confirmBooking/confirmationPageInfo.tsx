type confirmationPageInfoProps = {
  title: string
  value: string
}

export default function ConfirmationPageInfo(props: confirmationPageInfoProps) {
  return (
    <header className="">
      <h4 className="text-xs text-gray-400 mb-1">{props.title}</h4>
      <p className="font-bold">{props.value}</p>
    </header>
  )
}
