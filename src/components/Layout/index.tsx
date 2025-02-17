import { Footer } from "../Footer"
import { Header } from "../Header"
import './index.css'

export const Layout = ({ children }: any) => {
    return (
        <div className="wrapper">
            <Header />
            <div style={{ height: '100%' }}>
                {children}
            </div>
            <Footer />
        </div>
    )
}