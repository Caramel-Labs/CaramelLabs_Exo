import Image from "next/image"

type BlueButtonProps = {
  text: string
  sgcLogo: boolean
  onClick?: () => void // @dev onClick function is optional
}

const logoPath: string = "/sgc-logo.png"

export default function BlueButton(props: BlueButtonProps) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-14 rounded flex justify-center"
      onClick={props.onClick}
    >
      {props.sgcLogo && (
        <p className="text-xs mr-4">SGC</p>
      )}
      <p>{props.text}</p>
      {/* <Image src={logoPath} height={20} width={27} alt="SGC Logo" className="mr-4" /> */}
    </button>
  )
}
