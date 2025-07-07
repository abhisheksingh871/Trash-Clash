import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Navbar({ isAuth, setIsAuth }) {
    const [showAdminMenu, setShowAdminMenu] = useState(false)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("admin-auth")
        setIsAuth(false)
        setShowAdminMenu(false)
        navigate("/admin/login")
    }

    return (
        <nav className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
            <div className="font-bold text-xl">TrashClash</div>

            <div className="flex gap-4 items-center relative">
                <Link to="/" className="hover:underline">Home</Link>

                {/* Admin Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setShowAdminMenu(prev => !prev)}
                        className="hover:underline focus:outline-none"
                    >
                        Admin Panel
                    </button>

                    {showAdminMenu && (
                        <div className="absolute left-[-100px] top-8 bg-white text-black rounded shadow-md w-44 z-50">
                            {!isAuth ? (
                                <>
                                    <Link
                                        to="/admin/login"
                                        className="block px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-800 rounded-t"
                                        onClick={() => setShowAdminMenu(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/admin/signup"
                                        className="block px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-800 rounded-b"
                                        onClick={() => setShowAdminMenu(false)}
                                    >
                                        Signup
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/admin/upload"
                                        className="block px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-800 rounded-t"
                                        onClick={() => setShowAdminMenu(false)}
                                    >
                                        Upload
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-red-100 text-red-700 rounded-b"
                                    >
                                        Logout
                                    </button>
                                </>
                            )}
                        </div>
                    )}

                </div>
            </div>
        </nav>
    )
}

export default Navbar
