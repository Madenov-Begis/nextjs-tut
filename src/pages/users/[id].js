export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    paths: data.map((item) => {
      const userId = item.id
      return {
        params: {
          id: userId.toString(),
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const userId = String(params.id)
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )
  const data = await res.json()

  return {
    props: {
      users: data,
    },
  } 
}

const userItem = ({ users }) => {
  return (
    <>
      <h1>{users.name}</h1>
    </>
  )
}

export default userItem
