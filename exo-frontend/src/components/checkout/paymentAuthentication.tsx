import Image from "next/image"

export default function PaymentAuthentication() {
  return (
    <main className="flex flex-col">
      <h1 className="">Authenticating Payment</h1>
      <p className="">Exo is authenticating your payment with your StarGate NeuraChip™...</p>
      <Image src={'/loader.gif'} width={1280} height={720} alt="Loader" />
    </main>
  )
}
