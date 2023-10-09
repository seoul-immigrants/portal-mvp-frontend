import './assets/css/App.css'
import { Navigate, Route, Routes } from "react-router-dom"
import BaseLayout from './layouts/BaseLayout'

import { useAuthStore } from './stores/auth'
import { useEffect } from 'react'

import Router from './router'

function App() {
  const { login } = useAuthStore(state => state)

  useEffect(() => {
    async function loadUser () {
      try {
        const res = await axios.get("/user")

        if(res.data) {
          login(res.data)
        }
      } catch (error) {
          console.log(error)
      } finally {
        // authDispacth({ type: 'STOP_LOADING' })
      }
    }

    // loadUser()
  }, [])

  return (
    <>
      <BaseLayout>
        <Router />
      </BaseLayout>
    </>
  )
}

export default App
