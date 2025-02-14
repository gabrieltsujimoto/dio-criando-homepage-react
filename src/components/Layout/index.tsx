import { Footer } from "../Footer"
import { Header } from "../Header"

export const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}