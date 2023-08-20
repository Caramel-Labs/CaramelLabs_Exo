"use client"

import BlueButton from "../shared/blueButton"
import PageHeader from "../shared/pageHeader"
import CheckoutPageInfo from "./checkoutPageInfo"
import calculateTotalPrice from "@/utils/calculateTotalPrice"
import getCards from "@/utils/getCards"
import { useFormState } from "@/context/bookingFormContext"
import handleBookingConfirmation from "@/utils/handleBookingConfirmation"
import { useEffect, useState } from "react"
import BankCardCarousel from "./bankCardCarousel"

export default function Checkout() {
  const [cards, setCards] = useState([])

  // added by Ravindu
  const bankCards = [
    { balance: 123456, cardNumber: "1111 2222 3333 4444" },
    { balance: 789654, cardNumber: "5555 8888 9999 6666" },
    { balance: 456982, cardNumber: "7777 2222 6666 2244" },
    // Add more cards as needed
  ]

  const { onHandleNext, onHandleBack, formData } = useFormState()
  const { cosmoCruiser, orionLux, astroHop, currentClass } = formData

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const fetchedCards = await getCards()
        setCards(fetchedCards)
      } catch (error) {
        console.error("Error fetching cards:", error)
      }
    }

    fetchCards()
  }, [])

  console.log(cards, "cards")

  const classToGetPrices =
    currentClass === "Cosmo Cruiser"
      ? cosmoCruiser
      : currentClass === "Orion Lux"
      ? orionLux
      : astroHop

  async function handlePayment() {
    try {
      const response = await handleBookingConfirmation()
      console.log(response, "response")
      if (response && response.status === 200) {
        onHandleNext()
        console.log("Booking successful")
      }
    } catch (error) {
      console.log(error)
    }
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
      <PageHeader title="Payment" onHandleBack={onHandleBack} />
      <section className="mt-4">
        <p className="text-xs text-gray-600 flex justify-center">
          Swipe to select a StarGate Corporation card.
        </p>
        <div className="mt-6">
          <BankCardCarousel bankCards={bankCards} />
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
          onClick={handlePayment}
        />
      </section>
    </main>
  )
}
