import Link from "next/link"

type BlueLinkProps = {
  text: string
}

export default function BlueLink(props: BlueLinkProps) {
  return <Link href={""} className="text-xs font-bold text-blue-500"> {props.text}</Link>
}
