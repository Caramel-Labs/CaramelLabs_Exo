import BlueButton from "../shared/blueButton"
import PageHeader from "../shared/pageHeader"
import CheckoutPageInfo from "./checkouPageInfo"

export default function Checkout() {
  const paymentItem = [
    "Ticket price",
    "Accomadation",
    "Food and Beverages",
    "Miscellaneous",
  ]
  return (
    <div>
      <PageHeader title="Payment" />
      <section>
        <p>Swipe left to select a StarGate Corporation card.</p>
        <p>The fucking credit carrrrd</p>
      </section>

      <section>
        {paymentItem.map((item, i) => (
          <CheckoutPageInfo key={i} title={item} value={0} />
        ))}
      </section>

      <h2> Total Price</h2>
      <h2> 8344444 CR</h2>
      <BlueButton sgcLogo={true} text="Authorize Payment" />
    </div>
  )
}
