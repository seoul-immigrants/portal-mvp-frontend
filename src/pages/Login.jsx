import { useCallback, useState } from "react"
import { useAuthStore } from "../stores/auth"
import axios from 'axios'

import kakaoLoginImg from '../assets/imgs/login/카카오 로그인 버튼.png'
import '../assets/css/login.css'
import Input from "../components/Input"
import { Link } from "react-router-dom"

const Login = () => {
    const { login } = useAuthStore()
    const [errors, setErrors] = useState({})

    const submitHandler = useCallback(async (e) => {
        e.preventDefault()
        
        try {
            const { email, password } = e.currentTarget
            
            const res = await axios.post({
                email: email.value,
                password: password.value
            })

            login(res.data)
        } catch (error) {
            console.error(error)
            setErrors(error.response.data || {})
        }
    }, [errors])

    return (
        <>
            <section className="login-page">
                <div className="center w-[40%]">
                    <div className="container">
                        <h1 className="title">로그인</h1>
                        <p className="subtitle">자유롭게 소통하고, 같이 공부해요.</p>
                        <form 
                            className="form"
                            onSubmit={submitHandler}
                        >
                            <Input 
                                type="text"
                                name="email"
                                placeholder="EMAIL"
                            /> 
                            <Input 
                                type="password"
                                name="password"
                                placeholder="PASSWORD"
                                autoComplete="off"
                            />
                            <button
                                className="login-button
                                base-button grapefruit-bg text-white font-bold text-center"
                            >
                                로그인
                            </button>
                        </form>
                        <button className="kakao-login">
                            <img 
                                className="kakao-login-img"
                                src={kakaoLoginImg} 
                                alt="카카오 로그인" 
                            />
                        </button>
                        <Link 
                            to="#" 
                            className="lose-password"
                        >
                            비밀번호를 잃어버렸어요.
                        </Link>
                    </div>
                </div>
                <div className="login-page-bg w-[60%]"></div>
            </section>
        </>
    )
}

export default Login