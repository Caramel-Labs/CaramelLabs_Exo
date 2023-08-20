"use client"

import BlueButton from "../shared/blueButton"
import PageHeader from "../shared/pageHeader"
import CheckoutPageInfo from "./checkoutPageInfo"
import calculateTotalPrice from "@/utils/calculateTotalPrice"
import handleBooking from "@/utils/handleBooking"
import BankCard from "./bankCard"
import getCards from "@/utils/getCards"
import { useFormState } from "@/context/bookingFormContext"
import { on } from "process"

export default function Checkout() {
  //console.log(`Props are ${props.props[0]}`)
  const { onHandleNext, onHandleBack, formData } = useFormState()
  const { cosmoCruiser, orionLux, astroHop, currentClass } = formData
  //const cards = await getCards()

  const classToGetPrices =
    currentClass === "Cosmo Cruiser"
      ? cosmoCruiser
      : currentClass === "Orion Lux"
      ? orionLux
      : astroHop

  async function handleClick() {
    onHandleNext()
  }

  const paymentItems = [
    { key: "Ticket price", value: classToGetPrices.ticketPrice },
    { key: "Accommodation", value: classToGetPrices.accomodationPrice },
    { key: "Food and Beverages", value: classToGetPrices.foodAndBeveragePrice },
    { key: "Miscellaneous", value: classToGetPrices.miscellaneousPrice },
  ]

  const totalPrice = calculateTotalPrice(classToGetPrices)

  return (
    <main>
      <PageHeader title="Payment" />
      <section className="mt-4">
        <p className="text-xs text-gray-600 flex justify-center">Swipe left to select a StarGate Corporation card.</p>
        <div className="mt-6">
          <BankCard balance={180346} cardNumber={'1111 2222 3333 4444'} />
        </div>
      </section>

      <section>
        {paymentItems.map((item, i) => (
          <CheckoutPageInfo key={i} title={item.key} value={item.value} />
        ))}
      </section>

      <section className="text-lg flex justify-between font-bold mt-4">
        <p>Your Total</p>
        <p>{totalPrice} CR</p>
      </section>

      <section className="flex justify-center items-center mt-16">
        <BlueButton
          sgcLogo={true}
          text="Authorize Payment"
          onClick={handleClick}
        />
      </section>
    </main>
  )
}
