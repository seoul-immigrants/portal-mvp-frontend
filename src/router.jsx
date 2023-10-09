import { Navigate, Route, Routes } from "react-router-dom"
import { useAuthStore } from "./stores/auth"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ListPage from "./pages/Q&A/List"

export const PrivateRoute = ({ children }) => {
    const user = useAuthStore(state => state.user)
  
    if(!user.isLogin) {
      return <Navigate to="login" replace />
    }
  
    return children
}
  
export const PublicRoute = ({ children }) => {
    const user = useAuthStore(state => state.user)

    if (user.isLogin) {
        return <Navigate to="/" replace />
    }

    return children
}

const Router = () => {
    return ( 
        <Routes>
            <Route 
                path='/' 
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } 
            />
            <Route 
                path='login' 
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } 
            />
            <Route 
                path='register'
                element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                }
            />
            <Route 
                path="/posts/question"
                element={
                    <ListPage />
                }
            >
            </Route>
        </Routes>
    )
}
 
export default Router;