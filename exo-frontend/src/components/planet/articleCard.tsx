type articleCardProps = {
  title: string
  content: string
}

export default function ArticleCard(props: articleCardProps) {
  return (
    <div>
      <h3> {props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}
