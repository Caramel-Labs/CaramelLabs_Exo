import PageHeader from "../shared/pageHeader"
import BoardingPassId from "./boardingPassId"
import BoardingPassInfo from "./boardingPassInfo"
import BlueButton from "../shared/blueButton"
import getBoardingPass from "@/utils/getBoardingPass"
import SpacePortName from "../shared/spacePortName"
import formatDate from "@/utils/formatDate"

import Image from "next/image"

export default async function BoardingPass() {
  const boardingPassData = await getBoardingPass()
  //console.log("This object", boardingPassData[0])

  const { spaceship, trip } = boardingPassData
  console.log("this is the trip", trip[0])

  const passDateAndTime = formatDate(trip[0].departure.date)

  const passItems = [
    { key: "Date", value: passDateAndTime[0] },
    { key: "Time", value: passDateAndTime[1] },
    { key: "Terminal", value: trip[0].departure.terminal },
    { key: "Spaceship Number", value: spaceship.name },
    { key: "Class", value: boardingPassData.class },
    { key: "Children", value: "None" },
  ]

  const barcodePath = "/barcode.png"

  return (
    <div>
      <PageHeader title="Boarding Pass" />
      <BoardingPassId id="123456789" />

      <section>
        <SpacePortName name={trip[0].departure.location} />
        <p> Rocket go brrrrrr</p>
        <SpacePortName name={trip[0].arrival.location} />
      </section>

      <section>
        {passItems.map((item, i) => (
          <BoardingPassInfo key={i} title={item.key} value={item.value} />
        ))}
      </section>

      <section>
        <Image height={100} width={200} alt="barcode" src={barcodePath} />
        <p> 874GSRT7549335TT</p>
      </section>

      <BlueButton text="Save to Neurachip" sgcLogo={true} />
    </div>
  )
}
