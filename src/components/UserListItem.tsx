/* eslint-disable @next/next/no-img-element */
import { User } from "../../types/user";

interface Props {
  user: User
  me ?: boolean
}

function UserListItem({ user, me }: Props) {
  const isMe = me ? 'border-sky-500' : ''

  return (
    <div className={`flex gap-4 flex-row p-5 rounded-lg border border-neutral-800 w-full ${isMe}`}>
      <img 
        className="rounded-full h-16 w-16"
        src={user.image} 
        alt={user.firstName} />
      <div className="flex flex-col">
        <span className="text-neutral-100 text-lg">{user.firstName} {user.lastName}</span>
        <span className="text-neutral-300 text-sm italic text-opacity-40">{user.email}</span>


        <span className="text-neutral-300 text-sm italic text-opacity-40">
          {user.username} • {user.password}
        </span>
      </div>
    </div>
  )
}

export default UserListItem