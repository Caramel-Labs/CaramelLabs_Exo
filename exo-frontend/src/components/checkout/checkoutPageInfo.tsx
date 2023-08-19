type checkoutPageInfoProps = {
  title: string
  value: number
}

export default function CheckoutPageInfo(props: checkoutPageInfoProps) {
  return (
    <div className="">
      <h4>{props.title}</h4>
      <p>{props.value} CR</p>
    </div>
  )
}
