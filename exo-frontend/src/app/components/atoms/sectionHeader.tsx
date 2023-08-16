type SectionHeaderProps = {
  question: string
}

export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className="">
      <h2>{props.question}</h2>
    </div>
  )
}
