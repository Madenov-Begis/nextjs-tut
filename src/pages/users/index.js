import Link from 'next/link'

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: {
      users: data,
    },
  }
}

const Users = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        return (
          <Link href={`/users/${user.id}`} key={user.id}>
            <h1 >{user.name}</h1>
          </Link>
        )
      })}
    </>
  )
}

export default Users
