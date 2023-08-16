type BlueButtonProps = {
  text: string
}

export default function BlueButton(props: BlueButtonProps) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {props.text}
    </button>
  )
}
