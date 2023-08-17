type headerProps = {
  title: string
}

export default function PageHeader(props: headerProps) {
  return (
    <header className="page-header">
      <h1 className="text-xl text-center py-4">{props.title}</h1>
    </header>
  )
}
