import Image from "next/image"

type BlueButtonProps = {
  text: string
  sgcLogo: boolean
  onClick?: () => void // @dev onClick function is optional
}

const logoPath: string = ""

export default function BlueButton(props: BlueButtonProps) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-14 rounded"
      onClick={props.onClick}
    >
      {props.sgcLogo && (
        <Image src={logoPath} height={30} width={30} alt="sgc-logo" />
      )}
      {props.text}
    </button>
  )
}
