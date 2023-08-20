type subheadingProps = {
    title: string
}

export default function Subheading(props: subheadingProps) {
    return (
        <h1 className="font-bold text-2xl mb-6">{ props.title }</h1>
    )
}