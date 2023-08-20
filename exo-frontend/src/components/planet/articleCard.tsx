import Image from "next/image"

type articleCardProps = {
  title: string
  content: string
}

export default function ArticleCard(props: articleCardProps) {
  return (
    <main className="flex justify-between gap-4">
      <Image src={'/thumbnail.jpg'} width={100} height={100} alt="Article thumbnail" className="rounded-lg" />
      <div className="flex flex-col justify-center">
        <h3 className="font-bold text-base">{props.title}</h3>
        <p className="text-xs leading-5 line-clamp-2">{props.content}</p>
      </div>
    </main>
  )
}
