import { useCallback, useState } from "react"
import { useAuthStore } from "../stores/auth"
import axios from 'axios'

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
                        <p>자유롭게 소통하고, 같이 공부해요.</p>
                        <form 
                            className="form"
                            onSubmit={submitHandler}
                        >
                            <input
                                type="text" 
                                name="email" 
                                placeholder="Email" 
                            />
                            <input
                                type="password" 
                                name="password"
                                placeholder="Password" 
                                autoComplete="off"
                            />
                            <button>로그인</button>
                        </form>
                        <div className="kakao-login">
                            
                        </div>
                        <div className="lose-password">
                            비밀번호를 잃어버렸어요.
                        </div>
                    </div>
                </div>
                <div className="login-page-bg w-[60%]"></div>
            </section>
        </>
    )
}

export default Login