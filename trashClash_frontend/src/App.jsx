import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Upload from "./pages/Upload"
import AdminLogin from "./pages/AdminLogin"
import AdminSignup from "./pages/AdminSignup"
import Navbar from "./components/Navbar"

function App() {
  const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem("admin-auth"))

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuth(!!localStorage.getItem("admin-auth"))
    }
    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  return (
    <BrowserRouter>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/upload" element={<Upload />} />
        <Route path="/admin/login" element={<AdminLogin setIsAuth={setIsAuth} />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
