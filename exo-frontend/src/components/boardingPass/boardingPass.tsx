import PageHeader from "../shared/pageHeader"
import BoardingPassId from "./boardingPassId"
import FlightOverview from "../shared/flightOverview"
import BoardingPassInfo from "./boardingPassInfo"
import BlueButton from "../shared/blueButton"

export default function BoardingPass() {
  return (
    <div>
      <PageHeader title="Boarding Pass" />
      <BoardingPassId id="123456789" />

      <section></section>

      <section>
        <BoardingPassInfo title="Date" value="02 Jun 2165" />
      </section>

      <section>
        <p> Barcode</p>
        <p> Barcode number</p>
      </section>

      <BlueButton text="Save to Neurachip" sgcLogo={true} />
    </div>
  )
}
