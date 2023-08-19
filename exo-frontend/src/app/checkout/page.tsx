import Checkout from "@/components/checkout/checkout"
import getTripData from "@/utils/getTripData"

export default async function Booking() {
    const data = await getTripData()
    return (
        <main className="min-h-screen px-4 bg-black">
            <Checkout />
        </main>
    )
}
