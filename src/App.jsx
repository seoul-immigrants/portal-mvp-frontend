import './assets/css/App.css'
import { Navigate, Route, Routes } from "react-router-dom"
import BaseLayout from './layouts/BaseLayout'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <>
      <BaseLayout>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </BaseLayout>
    </>
  )
}

export default App
