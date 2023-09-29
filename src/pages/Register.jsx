import { useCallback } from "react"

const Register = () => {
    const [errors, setErrors] = useState({})

    const submitHandler = useCallback(async (e) => {

    }, [errors])

    return (
        <section className="register-page">
            <div className="register-page-form">
                <h1>회원가입</h1>
                <form onSubmit={submitHandler}>
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
            </div>
            <div className="register-page-bg"></div>
        </section>
    )
}

export default Register