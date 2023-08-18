import Image from "next/image"

type travelClassButtonProps = {
  name: string
  icon: string
}

//@dev store the icon svgs here and jsut take a prop to match required svg to the button
export default function TravelClassButton(props: travelClassButtonProps) {
  return (
    <div className="text-white">
      <button className="bg-blue-500 hover:bg-blue-700 flex flex-col rounded-lg w-24 h-24 justify-center" >
        <p className="text-4xl font-bold">{props.icon}</p>
        <p className="text-sm">{props.name}</p>
      </button>
    </div>
  )
}
