import Link from "next/link"
import Image from "next/image"
import PaymentAuthenticationHeading from "./paymentAuthenticationHeading"
import BlueLink from "../shared/blueLink"
import BlueButton from "../shared/blueButton"

export default function BookingSuccess() {
  return (
    <main className="">
      {/* Heading */}
      <PaymentAuthenticationHeading title={"Booking Complete"} />

      {/* Verified icon */}
      <div className="mt-64">
        <Image
          src={"/verified.png"}
          width={96}
          height={96}
          alt="Booking Complete"
        />
      </div>

      {/* Blue link (boarding pass) */}
      <div className="mt-7">
        <BlueLink text={"View Boarding Pass"} />
      </div>

      {/* Continue button (leads to home) */}
      <div className="mt-6">
        <BlueButton text="Keep Exploring" sgcLogo={false} />
      </div>
    </main>
  )
}
