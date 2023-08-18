"use client"

import { useState, useEffect } from "react"
import calculateTicketPrice from "../../utils/calculateTicketPrice"

type totalPriceProps = {
  cosmoCruiserPrice: string
  orionLuxPrice: string
  astroHopPrice: string
  passengerCount: number
  currentClass: string
}

export default function TotalPrice(props: totalPriceProps) {
  const [totalPrice, setTotalPrice] = useState<string>("0")
  console.log(props.currentClass)
  useEffect(() => {
    const calculatePriceBasedOnClass = () => {
      switch (props.currentClass) {
        case "Cosmo":
          return calculateTicketPrice(
            props.cosmoCruiserPrice,
            props.passengerCount
          )
        case "Orion":
          return calculateTicketPrice(props.orionLuxPrice, props.passengerCount)
        case "Astro":
          return calculateTicketPrice(props.astroHopPrice, props.passengerCount)
        default:
          return "0" // Default value if currentClass is not recognized
      }
    }

    const newTotalPrice = String(calculatePriceBasedOnClass())
    setTotalPrice(newTotalPrice)
    console.log(totalPrice)
  }, [props.currentClass, props.passengerCount])

  return (
    <div className="total-price">
      <p className="font-bold text-sm mt-3.5">
        {" "}
        {totalPrice}K credits (excl. taxes)
      </p>
    </div>
  )
}
