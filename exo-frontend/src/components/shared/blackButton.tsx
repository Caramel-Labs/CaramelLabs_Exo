import Image from "next/image"

type BlackButtonProps = {
  text: string
}

export default function BlackButton(props: BlackButtonProps) {
  return (
    <button className="bg-black text-white font-bold py-2 px-4 rounded">
      {props.text}
    </button>
  )
}
