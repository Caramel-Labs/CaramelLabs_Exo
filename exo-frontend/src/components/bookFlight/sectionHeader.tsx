type SectionHeaderProps = {
  question: string
}

export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className="">
      <h2 className="text-xl py-4">{props.question}</h2>
    </div>
  )
}
