"use client"

import { createContext, useContext, useState } from "react"

const SelectedSeatsContext = createContext<
  | {
      selectedSeats: string[]
      setSelectedSeats: React.Dispatch<React.SetStateAction<string[]>>
    }
  | undefined
>(undefined)

function SelectedSeatsProvider({ children }: { children: React.ReactNode }) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  return (
    <SelectedSeatsContext.Provider value={{ selectedSeats, setSelectedSeats }}>
      {children}
    </SelectedSeatsContext.Provider>
  )
}

function useSelectedSeats() {
  const context = useContext(SelectedSeatsContext)
  if (context === undefined) {
    throw new Error(
      "useSelectedSeats must be used within a SelectedSeatsProvider"
    )
  }
  return context
}

export { SelectedSeatsProvider, useSelectedSeats }
