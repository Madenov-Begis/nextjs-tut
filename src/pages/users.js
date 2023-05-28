export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
    return {
        props: {
            users: data,
        },
    }
}

const Users = ({ users }) => {
    return (
        <>
            <h1>Users</h1>
            {users.map((user) => {
                return <p key={user.id}>{user.name}</p>
            })}
        </>
    )
}

export default Users
