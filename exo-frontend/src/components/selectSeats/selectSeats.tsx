import PageHeader from "../shared/pageHeader"
import Image from "next/image"
import Description from "../shared/description"
import SeatButton from "./seatButton"

export default function SelectSeats() {
    return (
        <main className="bg-black text-white">
            <PageHeader title="Select Seats" />

            {/* Image of flight class */}
            <section className="mt-4">
                <Image src={'/cosmo-cruiser.webp'} alt="Flight class" width={328} height={220} className="rounded-lg" />
            </section>

            {/* Name of flight class */}
            <section className="mt-8 flex justify-center">
                <h1 className="text-3xl font-bold">Cosmo Cruiser</h1>
            </section>

            {/* Description of flight class */}
            <section className="mt-6">
                <Description value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </section>

            {/* Seat arrangement */}
            <section className="mt-8 grid grid-cols-7 grid-rows-3 gap-3">
                {/* First row */}
                <SeatButton seatNumber="C1" availablity={false} aisle={false} />
                <SeatButton seatNumber="C2" availablity={false} aisle={false} />
                <SeatButton seatNumber="X" availablity={false} aisle={true} />
                <SeatButton seatNumber="X" availablity={false} aisle={true} />
                <SeatButton seatNumber="X" availablity={false} aisle={true} />
                <SeatButton seatNumber="C3" availablity={false} aisle={false} />
                <SeatButton seatNumber="C4" availablity={false} aisle={false} />

                {/* Second row */}
                <SeatButton seatNumber="C5" availablity={false} aisle={false} />
                <SeatButton seatNumber="C6" availablity={false} aisle={false} />
                <SeatButton seatNumber="C7" availablity={false} aisle={false} />
                <SeatButton seatNumber="X" availablity={false} aisle={true} />
                <SeatButton seatNumber="C8" availablity={false} aisle={false} />
                <SeatButton seatNumber="C9" availablity={false} aisle={false} />
                <SeatButton seatNumber="C10" availablity={false} aisle={false} />

                {/* Third row */}
                <SeatButton seatNumber="C11" availablity={false} aisle={false} />
                <SeatButton seatNumber="C12" availablity={false} aisle={false} />
                <SeatButton seatNumber="C13" availablity={false} aisle={false} />
                <SeatButton seatNumber="X" availablity={false} aisle={true} />
                <SeatButton seatNumber="C14" availablity={false} aisle={false} />
                <SeatButton seatNumber="C15" availablity={false} aisle={false} />
                <SeatButton seatNumber="C16" availablity={false} aisle={false} />
            </section>
        </main>
    )
}