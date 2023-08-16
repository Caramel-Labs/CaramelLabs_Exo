import Image from "next/image"

type travelClassButtonProps = {
  name: string
  iconPath: string
}

//@dev store the icon svgs here and jsut take a prop to match required svg to the button
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
