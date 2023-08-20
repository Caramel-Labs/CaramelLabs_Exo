import Image from "next/image"

type UserAvatarProps = {
  src: string
  firstName: string
  lastName?: string
}
export default function UserAvatar(props: UserAvatarProps) {
  return (
    <main>
      <Image
        className="rounded-full"
        src={props.src}
        alt="Rounded avatar"
        width={40}
        height={40}
      />

      <p className={`${props.lastName && ""} `}> {props.firstName}</p>
      <p className={`${props.lastName && ""} `}> {props.lastName}</p>
    </main>
  )
}
