import Image from "next/image"

type headerProps = {
  title: string
}

export default function PageHeader(props: headerProps) {
  return (
    <header className="page-header flex justify-between items-center">
      <button>
        <Image src={'/back.png'} width={24} height={24} alt={'Back icon'} />
      </button>
      <h1 className="text-xl text-center py-4">{props.title}</h1>
      <Image src={'/menu.png'} width={24} height={24} alt={'Back icon'} />
    </header>
  )
}
