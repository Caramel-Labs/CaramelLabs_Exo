type confirmationPageTitleProps = {
  title: string
}

export default function ConfirmationPageTitle(
  props: confirmationPageTitleProps
) {
  return (
    <header className="">
      <h4>{props.title}</h4>
    </header>
  )
}
