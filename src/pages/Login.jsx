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
    )
}

export default Login