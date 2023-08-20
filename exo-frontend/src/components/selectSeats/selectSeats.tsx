"use client"

import PageHeader from "../shared/pageHeader"
import Image from "next/image"
import Description from "../shared/description"
import SeatButton from "./seatButton"
import BlueButton from "../shared/blueButton"
import { useFormState } from "@/context/bookingFormContext"
import AstroHop from "./astroHop"
import CosmoCruiser from "./cosmoCruiser"
import OrionLux from "./orionLux"

export default function SelectSeats() {
  const { onHandleNext, onHandleBack, setFormData, formData } = useFormState()
  console.log(formData, "form data")

  const { currentClass } = formData

  return (
    <main className="bg-black text-white">
      <PageHeader title="Select Seats" onHandleBack={onHandleBack} />

      {/* Image of flight class */}
      <section className="mt-4">
        <Image
          src={`/${currentClass}.png`}
          alt="Flight class"
          width={328}
          height={220}
          className="rounded-lg"
        />
      </section>

      {/* Name of flight class */}
      <section className="mt-8 flex justify-center">
        <h1 className="text-3xl font-bold">{currentClass}</h1>
      </section>

      {/* Description of flight class */}
      <section className="mt-6">
        <Description value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      </section>

      {/* Seat arrangement */}
      {currentClass === "Cosmo Cruiser" ? (
        <CosmoCruiser />
      ) : currentClass === "Orion Lux" ? (
        <OrionLux />
      ) : (
        <AstroHop />
      )}

      {/* Continue button */}
      <section className="flex justify-center items-center my-16">
        <BlueButton text="Continue" sgcLogo={false} onClick={onHandleNext} />
      </section>
    </main>
  )
}
