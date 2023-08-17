import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="p-5">
        <h1 className="text-8xl">EXO</h1>
      </div>
      <div>
        <p>
          To get started, open this web app in a mobile viewport and head over
          to{" "}
          <span className="font-mono">
            <a
              href="http://localhost:3000/booking"
              className="underline underline-offset-2"
            >
              localhost:3000/booking
            </a>
          </span>
          .
        </p>
      </div>
    </main>
  )
}
