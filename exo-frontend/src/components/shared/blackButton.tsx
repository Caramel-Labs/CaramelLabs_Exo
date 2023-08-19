type BlackButtonProps = {
  text: string
  onClick: () => void
}

export default function BlackButton(props: BlackButtonProps) {
  return (
    <button
      className="bg-black text-white font-bold py-2 px-3 rounded text-xs"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}
