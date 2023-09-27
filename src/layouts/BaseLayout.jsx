import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"

const BaseLayout = ({ children }) => {
    return (
        <>
            <AppHeader />
            <div>
                { children }
            </div>
            <AppFooter />
        </>
    )
}

export default BaseLayout