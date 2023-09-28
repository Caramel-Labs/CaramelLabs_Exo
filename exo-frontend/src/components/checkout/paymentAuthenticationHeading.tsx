type paymentAuthenticationHeadingProps = {
  title: string
}

export default function PaymentAuthenticationHeading(
  props: paymentAuthenticationHeadingProps
) {
  return (
    <main>
      <p className="flex justify-center text-center font-bold text-3xl mt-28">
        {props.title}
      </p>
    </main>
  )
}
