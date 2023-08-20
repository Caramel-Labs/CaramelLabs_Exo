import Image from "next/image"

export default function AttractionCard() {
    return (
        <main>
            <Image src={'/thumbnail.jpg'} width={267} height={263} alt="Attraction" className="rounded-lg" />
            <section className="bg-zinc-800 p-4 rounded-lg">
                <h1>Great Red Spot</h1>
                <p className="line-clamp-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nobis eveniet aspernatur quia dolorum sit corrupti temporibus, asperiores, sint iusto suscipit est. Ea iste nemo delectus hic illo obcaecati qui?</p>
            </section>
        </main>
    )
}