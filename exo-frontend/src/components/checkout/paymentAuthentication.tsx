import Image from "next/image"

export default function PaymentAuthentication() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">Authenticating Payment</h1>
      <p className="text-xs">Exo is authenticating your payment with your StarGate NeuraChip™...</p>
      <Image src={'/loader.gif'} width={1280} height={720} alt="Loader" />
    </main>
  )
}
