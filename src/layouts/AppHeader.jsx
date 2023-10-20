import { Link } from "react-router-dom"
import logoSVG from "../assets/imgs/logo.svg"
import UserPlusIcon from "../assets/imgs/user-plus.svg"

const AppHeader = () => {
    return (
        <header className="app-header">
            <div className="inner">
                <section className="logo">
                    <Link
                        to="/"
                    >
                        <div>
                            <img src={logoSVG} alt="로고 이미지" />
                        </div>
                        <div>
                            Study with me
                        </div>
                    </Link>
                </section>
                <section className="button-form">
                    <Link
                        className="base-button grapefruit-bg text-white text-[12px]" 
                        to="/register"
                    >
                        <div>
                            <img
                                src={UserPlusIcon} 
                                alt="아이콘" 
                            />
                        </div>
                        <div>
                            회원가입
                        </div>
                    </Link>
                    <Link 
                        className="base-button silver-bg text-[var(--grapefruit)] text-[12px]" 
                        to="/login"
                    >
                        로그인
                    </Link>
                </section>
            </div>
        </header>
    )
}

export default AppHeader