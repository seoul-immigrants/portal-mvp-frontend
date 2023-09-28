import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"

const BaseLayout = ({ children }) => {
    return (
        <>
            <AppHeader />
            <main className="app-main">
                { children }
            </main>
            <AppFooter />
        </>
    )
}

export default BaseLayout