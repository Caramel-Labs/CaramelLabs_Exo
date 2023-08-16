type headerProps = {
  title: string
}

export default function PageHeader(props: headerProps) {
  return (
    <header className="page-header">
      <h1>{props.title}</h1>
    </header>
  )
}
