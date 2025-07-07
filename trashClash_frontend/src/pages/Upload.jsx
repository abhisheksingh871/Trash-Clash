import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Upload = () => {
    const [form, setForm] = useState({
        title: "",
        thLevel: "",
        baseType: "",
        imageUrl: "",
        cocShareLink: "",
        tags: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    
    const navigate = useNavigate()

    useEffect(() => {
        const isAuth = localStorage.getItem("admin-auth")
        if (!isAuth) {
            navigate("/admin/login")
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch("http://localhost:8080/api/layouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })

            if (response.ok) {
                alert("Base uploaded successfully!")
                setForm({
                    title: "",
                    thLevel: "",
                    baseType: "",
                    imageUrl: "",
                    cocShareLink: "",
                    tags: ""
                })
            } else {
                alert("Upload failed")
            }
        } catch (err) {
            console.error(err)
            alert("Error occurred while uploading")
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin: Upload Base Layout</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Base Title"
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        name="thLevel"
                        type="number"
                        value={form.thLevel}
                        onChange={handleChange}
                        placeholder="Town Hall Level (e.g. 14)"
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        name="baseType"
                        value={form.baseType}
                        onChange={handleChange}
                        placeholder="Base Type (War, Hybrid, Farming)"
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        name="imageUrl"
                        value={form.imageUrl}
                        onChange={handleChange}
                        placeholder="Image URL"
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        name="cocShareLink"
                        value={form.cocShareLink}
                        onChange={handleChange}
                        placeholder="CoC Share Link"
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        name="tags"
                        value={form.tags}
                        onChange={handleChange}
                        placeholder="Tags (comma-separated)"
                        className="border p-2 rounded"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium"
                    >
                        Upload Layout
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Upload
