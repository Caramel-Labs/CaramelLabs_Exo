import { FormProvider } from "@/context/bookingFormContext"

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  )
}
