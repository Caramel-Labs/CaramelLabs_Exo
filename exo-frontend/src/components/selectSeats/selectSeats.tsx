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
                <Image src={'/cosmo-cruiser.webp'}
                       alt="Flight class"
                       width={328}
                       height={220}
                       className="rounded-lg" />
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
                <SeatButton seatNumber="C1" availability={false} aisle={false} seatStatus={0} />
                <SeatButton seatNumber="C2" availability={false} aisle={false} seatStatus={0} />
                <SeatButton seatNumber="X" availability={false} aisle={true} seatStatus={0} />
                <SeatButton seatNumber="X" availability={false} aisle={true} seatStatus={0} />
                <SeatButton seatNumber="X" availability={false} aisle={true} seatStatus={0} />
                <SeatButton seatNumber="C3" availability={false} aisle={false} seatStatus={0} />
                <SeatButton seatNumber="C4" availability={false} aisle={false} seatStatus={0} />

                {/* Second row */}
                <SeatButton seatNumber="C5" availability={false} aisle={false} seatStatus={0} />
                <SeatButton seatNumber="C6" availability={false} aisle={false} seatStatus={0} />
                <SeatButton seatNumber="C7" availability={false} aisle={false} seatStatus={0} />
                <SeatButton seatNumber="X" availability={false} aisle={true} seatStatus={0} />
                <SeatButton seatNumber="C8" availability={false} aisle={false} seatStatus={0} />
                <SeatButton seatNumber="C9" availability={false} aisle={false} seatStatus={0} />
                <SeatButton seatNumber="C10" availability={false} aisle={false} seatStatus={0} />

                {/* Third row */}
                <SeatButton seatNumber="C11" availability={false} aisle={false} seatStatus={0} />
                <SeatButton seatNumber="C12" availability={false} aisle={false} seatStatus={0} />
                <SeatButton seatNumber="C13" availability={false} aisle={false} seatStatus={0} />
                <SeatButton seatNumber="X" availability={false} aisle={true} seatStatus={0} />
                <SeatButton seatNumber="C14" availability={false} aisle={false} seatStatus={0} />
                <SeatButton seatNumber="C15" availability={false} aisle={false} seatStatus={0} />
                <SeatButton seatNumber="C16" availability={false} aisle={false} seatStatus={0} />
            </section>
        </main>
    )
}