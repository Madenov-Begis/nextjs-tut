import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/posts/blog'>
            Posts
          </Link>
        </li>
        <li>
          <Link href='/users'>
            Users
          </Link>
        </li>
      </ul>
    </>
  )
}



957072331