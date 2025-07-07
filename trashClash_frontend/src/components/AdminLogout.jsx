import { useNavigate } from "react-router-dom"

const AdminLogout = ({ onLogout }) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        // Clear login session
        localStorage.removeItem("admin-auth")

        // Notify parent (App.jsx) to update UI
        if (onLogout) onLogout()

        // Redirect to login
        navigate("/admin/login")
    }

    return (
        <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded transition"
        >
            Logout
        </button>
    )
}

export default AdminLogout
