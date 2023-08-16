import Image from "next/image"

type UserAvatarProps = {
  src: string
}
export default function UserAvatar(props: UserAvatarProps) {
  return (
    <div>
      <Image
        className="rounded-full"
        src={props.src}
        alt="Rounded avatar"
        width={40}
        height={40}
      />
    </div>
  )
}
