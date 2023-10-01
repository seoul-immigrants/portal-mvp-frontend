import { useCallback, useState } from "react"
import '../assets/css/login.css'

import Input from "../components/Input"
import { Link } from "react-router-dom"

const Register = () => {
    const [errors, setErrors] = useState({})

    const submitHandler = useCallback(async (e) => {

    }, [errors])

    return (
        <section className="register-page">
            <div className="center w-[40%]">
                <div className="container">
                    <h1 className="title">회원가입</h1>
                    <form
                        className="form"
                        onSubmit={submitHandler}
                    >
                        <div className="flex gap-[11px]">
                            <Input 
                                className="flex-1"
                                type="text"
                                name="email"
                                placeholder="EMAIL"
                            />
                            <button
                                type="button"
                                className="base-button grapefruit-bg text-white"
                            >
                                메일 인증
                            </button>
                        </div>
                        <Input 
                            type="password"
                            name="password"
                            placeholder="PASSWORD"
                        />
                        <Input 
                            type="password"
                            name="confirm-password"
                            placeholder="REPEAT PASSWORD"
                        />
                        <Input 
                            type="text"
                            name="username"
                            placeholder="USERNAME"
                        />
                        <div className="flex gap-[11px]">
                            <Input 
                                className="flex-1"
                                type="text"
                                name="phone"
                                placeholder="PHONE NUMBER (010-0000-0000)"
                            />
                            <button
                                type="button"
                                className="base-button grapefruit-bg text-white"
                            >
                                휴대폰 인증
                            </button>
                        </div>
                        <button className="register-button base-button grapefruit-bg text-white font-bold text-center">
                            회원가입
                        </button>
                    </form>
                </div>
            </div>
            <div className="register-page-bg w-[60%]"></div>
        </section>
    )
}

export default Register