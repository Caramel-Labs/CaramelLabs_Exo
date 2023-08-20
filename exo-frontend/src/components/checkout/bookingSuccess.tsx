import Link from "next/link"

export default function BookingSuccess() {
  return (
    <div>
      <h1>Booking Complete</h1>

      <Link href="/"> view boarding pass</Link>
      <Link href="/home">
        <button> Keep exploring</button>
      </Link>
    </div>
  )
}
