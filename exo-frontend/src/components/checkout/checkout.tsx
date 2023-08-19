import BlueButton from "../shared/blueButton"
import PageHeader from "../shared/pageHeader"
import CheckoutPageInfo from "./checkoutPageInfo"
import calculateTotalPrice from "@/utils/calculateTotalPrice"

export default function Checkout(props: any) {
  const { cosmoCruiser, orionLux, astroHop } = props.props[0]

  const paymentItems = [
    { key: "Ticket price", value: astroHop.ticketPrice },
    { key: "Accommodation", value: astroHop.accomodationPrice },
    { key: "Food and Beverages", value: astroHop.foodAndBeveragePrice },
    { key: "Miscellaneous", value: astroHop.miscellaneousPrice },
  ]

  const totalPrice = calculateTotalPrice(astroHop)
  return (
    <div>
      <PageHeader title="Payment" />
      <section>
        <p>Swipe left to select a StarGate Corporation card.</p>
        <p>The fucking credit carrrrd</p>
      </section>

      <section>
        {paymentItems.map((item, i) => (
          <CheckoutPageInfo key={i} title={item.key} value={item.value} />
        ))}
      </section>

      <h2>Total Price</h2>
      <h2>{totalPrice}</h2>
      <BlueButton sgcLogo={true} text="Authorize Payment" />
    </div>
  )
}
