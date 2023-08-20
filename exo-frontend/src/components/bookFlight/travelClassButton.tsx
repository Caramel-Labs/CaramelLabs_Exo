"use client"

type travelClassButtonProps = {
  name1: string
  name2: string
  icon: string
  currentClass: string
  setCurrentClass: React.Dispatch<React.SetStateAction<string>>
}

//@dev store the icon svgs here and jsut take a prop to match required svg to the button
export default function TravelClassButton(props: travelClassButtonProps) {
  const handleClick = () => {
    props.setCurrentClass(props.name1 + " " + props.name2) // Update the currentClass state
  }
  const isSelected = props.currentClass === props.name1 + " " + props.name2
  //console.log(isSelected, `${props.name1} ${props.name2}`, props.currentClass)

  if (isSelected)
    console.log(`${props.name1} ${props.name2}`, props.currentClass, "selected")

  return (
    <div className="text-white">
      <button
        className={`bg-zinc-800 flex flex-col rounded-lg w-24 h-24 justify-center items-center ${
          isSelected && "bg-[#027FF5]"
        }`}
        onClick={handleClick}
      >
        <p className="text-4xl font-bold">{props.icon}</p>
        <p className="text-sm font-bold">
          {props.name1}
          <br />
          {props.name2}
        </p>
      </button>
    </div>
  )
}
