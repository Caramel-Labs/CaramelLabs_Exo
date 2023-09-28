import Image from "next/image"
import PaymentAuthenticationHeading from "./paymentAuthenticationHeading"

export default function PaymentAuthentication() {
  return (
    <main>
      {/* Heading */}
      <PaymentAuthenticationHeading title={"Authenticating Payment"} />

      {/* Text section */}
      <p className="text-xs text-gray-500 text-center mt-9">
        Exo is authenticating your payment with your StarGate NeuraChip™...
      </p>

      {/* Loader */}
      <div className="mt-36">
        <Image src={"/loader.gif"} width={1280} height={720} alt="Loader" />
      </div>
    </main>
  )
}
