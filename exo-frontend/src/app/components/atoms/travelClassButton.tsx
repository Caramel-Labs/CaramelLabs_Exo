import Image from "next/image"

type travelClassButtonProps = {
  name: string
  iconPath: string
}
export default function TravelClassButton(props: travelClassButtonProps) {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700">
        <Image src={props.iconPath} width={30} height={30} alt="icon" />
        {props.name}
      </button>
    </div>
  )
}
