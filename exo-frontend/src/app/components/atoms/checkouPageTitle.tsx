type checkoutPageTitleProps = {
  title: string
}

export default function checkoutPageTitle(props: checkoutPageTitleProps) {
  return (
    <header className="">
      <h4>{props.title}</h4>
    </header>
  )
}
