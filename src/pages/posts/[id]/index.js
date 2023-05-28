import Home from '@/pages'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Posts = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Home />
            <h1>Post: {id}</h1>
            <ul>
                <li>
                    <Link href="/posts/[id]/[blog]" as={`/posts/${id}/1`}>
                        1-Blog
                    </Link>
                </li>
                <li>
                    <Link href="/posts/[id]/[blog]" as={`/posts/${id}/2`}>
                        2-Blog
                    </Link>
                </li>
                <li>
                    <Link href="/posts/[id]/[blog]" as={`/posts/${id}/2`}>
                        3-Blog
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Posts
