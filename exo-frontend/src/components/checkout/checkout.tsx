import BlueButton from "../shared/blueButton"
import PageHeader from "../shared/pageHeader"
import CheckoutPageInfo from "./checkouPageInfo"
import calculateTotalPrice from "@/utils/calculateTotalPrice"
import handleBooking from "@/utils/handleBooking"

export default function Checkout(props: any) {
  const { cosmoCruiser, orionLux, astroHop } = props.props[0]

  const mockBooking = {
    user: "61572b7c8c5f2500159407d2", // Sample ObjectId for a user
    spaceship: "61572b7c8c5f2500159407e3", // Sample ObjectId for a spaceship
    trip: "61572b7c8c5f2500159407f4", // Sample ObjectId for a trip
    participants: "", // Sample ObjectId for participants
    status: "Confirmed",
    class: "Cosmo Cruiser",
    tripType: "Round Trip",
    veg: true,
    price: 1500,
    seats: ["A1", "A2", "B3"],
  }

  async function handleClick() {
    const response = await handleBooking(mockBooking)
    if (response.status === 200) {
      console.log("Booking successful")
    }
  }

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

      <h2> Total Price</h2>
      <h2>{totalPrice}</h2>
      <BlueButton
        sgcLogo={true}
        text="Authorize Payment"
        onClick={handleClick}
      />
    </div>
  )
}
