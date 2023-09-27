import { Link } from "react-router-dom"

const AppHeader = () => {
    return (
        <header className="app-header">
            <div className="inner">
                <section>
                    <h1>LOGO</h1>
                </section>
                <section>
                    <Link to="#">회원가입</Link>
                    <Link to="#">로그인</Link>
                </section>
            </div>
        </header>
    )
}

export default AppHeader