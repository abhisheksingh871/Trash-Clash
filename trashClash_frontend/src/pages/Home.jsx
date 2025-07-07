import { useEffect, useState } from "react"
import LayoutCard from "../components/LayoutCard"

const Home = () => {
    const [layouts, setLayouts] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/layouts")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched Layouts:", data) // Debug log
                setLayouts(data)
            })
            .catch((err) => {
                console.error("Failed to fetch layouts", err)
            })
    }, [])

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Clash of Clans Base Layouts</h1>

            {layouts.length === 0 ? (
                <p className="text-center text-gray-500">No layouts found. Try uploading one!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {layouts.map((layout) => (
                        <LayoutCard key={layout.id} layout={layout} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home
