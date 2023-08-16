type BoardingPassTitleProps = {
  title: string
}

export default function BoardingPassTitle(props: BoardingPassTitleProps) {
  return (
    <header className="">
      <h4>{props.title}</h4>
    </header>
  )
}
