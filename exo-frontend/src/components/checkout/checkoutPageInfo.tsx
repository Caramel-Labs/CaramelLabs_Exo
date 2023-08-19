type checkoutPageInfoProps = {
  title: string
  value: number
}

export default function CheckoutPageInfo(props: checkoutPageInfoProps) {
  return (
    <main>
      <div className="flex justify-between text-xs my-6">
        <p>{props.title}</p>
        <p className="font-bold">{props.value} CR</p>
      </div>
      <hr />
    </main>
  )
}
