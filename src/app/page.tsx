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
    <main className="flex min-h-screen flex-col items-center justify-between p-10 w-full max-w-5xl m-auto">
      <header id="sectionHeader" className="flex flex-col w-full h-1/4">
        <h1 className="text-4xl font-bold text-neutral-100">Users</h1>
        <p className="text-neutral-300 text-sm italic text-opacity-40">
          This page is only accessible to authenticated users.
        </p>
      </header>
      <div className="grid grid-cols-3 gap-3 w-full mt-8">
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
