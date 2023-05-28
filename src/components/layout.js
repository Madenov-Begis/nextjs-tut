import { Fragment } from "react"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </Fragment>
    )
}

export default Layout