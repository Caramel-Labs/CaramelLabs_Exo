"use client"
import { useState, useEffect } from "react"
import { useSelectedSeats } from "@/context/seatSelectionContext"
// import { useFormState } from "@/context/bookingFormContext"

type seatButtonProps = {
  seatNumber: string
  isAvailable?: boolean
}

export default function SeatButton(props: seatButtonProps) {
  const [isSelected, setIsSelected] = useState(false)
  const { selectedSeats, setSelectedSeats } = useSelectedSeats()
  // const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  // const { formData, setFormData } = useFormState()

  useEffect(() => {
    // When the component mounts, update isSelected based on selectedSeats
    setIsSelected(selectedSeats.includes(props.seatNumber))
  }, [selectedSeats, props.seatNumber])

  function handleClick() {
    setIsSelected((prevIsSelected) => !prevIsSelected)
    console.log(props.seatNumber, "clicked")
    if (
      !isSelected &&
      props.isAvailable &&
      !selectedSeats.includes(props.seatNumber)
    ) {
      setSelectedSeats((prevSelectedSeats) => [
        ...prevSelectedSeats,
        props.seatNumber,
      ])
      console.log(props.seatNumber, "pushed", selectedSeats)
    } else if (isSelected && selectedSeats.includes(props.seatNumber)) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((seat) => seat !== props.seatNumber)
      )
      console.log(props.seatNumber, "removed", selectedSeats)
    }
  }

  return (
    <div className="seat-button">
      <button
        onClick={handleClick}
        className={`w-9 h-9 text-xs font-bold rounded-lg ${
          isSelected && props.isAvailable ? "bg-green-500 text-white" : ""
        }${
          props.isAvailable ? "bg-white text-black" : "bg-gray-900 text-white"
        } 
        ${props.seatNumber === "X" ? "invisible" : ""}`}
      >
        {props.seatNumber}
      </button>
    </div>
  )
}
