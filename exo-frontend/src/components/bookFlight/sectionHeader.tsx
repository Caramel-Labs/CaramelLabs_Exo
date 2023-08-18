type SectionHeaderProps = {
  question: string
}

export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className="">
      <h2 className="text-xl py-4 font-bold">{props.question}</h2>
    </div>
  )
}
