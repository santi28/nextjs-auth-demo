import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { User } from '../../types/user'
import UserListItem from '@/components/UserListItem'

const getAllUsers = async () => {
  const session = await getServerSession(options)
  const token = session?.user.token

  const fetchedUsers = await fetch(
    'https://dummyjson.com/auth/users', 
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
  )

  const users = await fetchedUsers.json()
  return users.users as User[]
}


export default async function Home() {
  const session = await getServerSession(options)

  const users = await getAllUsers()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-3 gap-3">
        { users.map((user: any) => (
          <UserListItem 
            key={user.id} 
            user={user} 
            me={user.id === session?.user.id} />
        )) }
      </div>
    </main>
  )
}
