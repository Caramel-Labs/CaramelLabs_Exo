"use client"

import { useFormState } from "@/context/bookingFormContext"
import BookFlight from "@/components/bookFlight/bookFlight"
import SelectSeats from "@/components/selectSeats/selectSeats"
import ConfirmBooking from "@/components/confirmBooking/confirmBooking"
import Checkout from "@/components/checkout/checkout"
import PaymentAuthentication from "../checkout/paymentAuthentication"
import BookingSuccess from "../checkout/bookingSuccess"

export default function BookingStepForm(props: any) {
  const { step } = useFormState()
  switch (step) {
    case 0:
      return <BookFlight props={props} />
    case 1:
      return <SelectSeats />
    case 2:
      return <ConfirmBooking />
    case 3:
      return <Checkout />
    case 4:
      return <PaymentAuthentication />
    case 5:
      return <BookingSuccess />
    default:
      return null
  }
}
