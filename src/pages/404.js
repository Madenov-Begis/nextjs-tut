import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NotFound = () => {
    const router = useRouter()
    console.log(router);

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <>
            <h1>404.Page not found</h1>
            <div>
                Back to <Link href="/">Home</Link>
            </div>
        </>
    )
}

export default NotFound
