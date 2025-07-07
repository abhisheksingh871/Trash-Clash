import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AdminLogin = ({ setIsAuth }) => {
    const [form, setForm] = useState({ username: "", password: "" })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch("http://localhost:8080/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })

        const msg = await res.text()
        alert(msg)

        if (msg.includes("success")) {
            localStorage.setItem("admin-auth", "true")
            setIsAuth(true)
            navigate("/admin/upload")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm border"
            >
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Admin Login</h2>

                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-2 mb-3 border rounded"
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 mb-4 border rounded"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default AdminLogin
