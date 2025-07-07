import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AdminSignup = () => {
    const [form, setForm] = useState({ username: "", password: "" })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch("http://localhost:8080/api/admin/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })

        const msg = await res.text()
        alert(msg)

        if (msg.includes("success")) {
            navigate("/admin/login")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm border"
            >
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Admin Signup</h2>

                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-2 mb-3 border rounded"
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    required
                />
                <input
                    type="password"
                    placeholder="Create Password"
                    className="w-full p-2 mb-4 border rounded"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default AdminSignup
