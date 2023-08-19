"use client"

import React, { createContext, useContext, useState } from "react"

type FormData = Record<string, any>

type FormContextType = {
  formData: FormData
  onHandleBack: () => void
  onHandleNext: () => void
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  step: number
}

const FormContext = createContext<FormContextType>({
  formData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 0,
})

function FormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<FormData>({})
  const [step, setStep] = useState<number>(0)

  function onHandleNext() {
    setStep((prev) => prev + 1)
  }

  function onHandleBack() {
    setStep((prev) => prev - 1)
  }

  return (
    <FormContext.Provider
      value={{ formData, setFormData, onHandleBack, onHandleNext, step }}
    >
      {children}
    </FormContext.Provider>
  )
}

function useFormState() {
  return useContext(FormContext)
}

export { FormProvider, useFormState }
