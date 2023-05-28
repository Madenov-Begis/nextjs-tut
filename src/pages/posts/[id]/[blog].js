import Home from '@/pages'
import { useRouter } from 'next/router'

const Blog = () => {
    const router = useRouter()
    const { id, blog } = router.query
    return (
        <>
            <Home />
            <h1>Post: {id}</h1>
            <h1>Blog: {blog}</h1>
        </>
    )
}

export default Blog
