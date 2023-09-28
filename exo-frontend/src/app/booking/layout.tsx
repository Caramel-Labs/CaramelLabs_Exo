import { FormProvider } from "@/context/bookingFormContext"
import {
  useSelectedSeats,
  SelectedSeatsProvider,
} from "@/context/seatSelectionContext"

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <FormProvider>
          <SelectedSeatsProvider>{children}</SelectedSeatsProvider>
        </FormProvider>
      </body>
    </html>
  )
}
