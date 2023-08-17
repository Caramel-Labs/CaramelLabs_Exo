import Link from "next/link"

type BlueLinkProps = {
  text: string
}

export default function BlueLink(props: BlueLinkProps) {
  return <Link href={""}> {props.text}</Link>
}
