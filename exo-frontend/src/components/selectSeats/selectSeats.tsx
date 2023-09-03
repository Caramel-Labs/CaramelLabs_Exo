"use client"

import PageHeader from "../shared/pageHeader"
import Image from "next/image"
import Description from "../shared/description"
import BlueButton from "../shared/blueButton"
import { useFormState } from "@/context/bookingFormContext"
import AstroHop from "./astroHop"
import CosmoCruiser from "./cosmoCruiser"
import OrionLux from "./orionLux"
import { useSelectedSeats } from "@/context/seatSelectionContext"

import { useState } from "react"

export default function SelectSeats() {
  const { onHandleNext, onHandleBack, setFormData, formData } = useFormState()
  console.log(formData, "form data")

  const { currentClass, availableSeats } = formData

  const { selectedSeats } = useSelectedSeats()

  //console.log(selectedSeats, "selected seats in parent")

  function handleClick() {
    setFormData({ ...formData, selectedSeats: selectedSeats })
    onHandleNext()
  }

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
      {/* {currentClass === "Cosmo Cruiser" ? (
        <CosmoCruiser availableSeats={["C1", "C2", "C3", "C8"]} />
      ) : currentClass === "Orion Lux" ? (
        <OrionLux availableSeats={availableSeats} />
      ) : (
        <AstroHop availableSeats={availableSeats} />
      )} */}
      <CosmoCruiser
        availableSeats={[
          "C1",
          "C2",
          "C7",
          "C8",
          "C10",
          "C11",
          "C12",
          "C13",
          "C20",
        ]}
      />

      {/* Continue button */}
      <section className="flex justify-center items-center my-16">
        <BlueButton text="Continue" sgcLogo={false} onClick={handleClick} />
      </section>
    </main>
  )
}
