const LayoutCard = ({ layout }) => {
    const copyLink = () => {
        navigator.clipboard.writeText(layout.cocShareLink)
        alert("Layout link copied to clipboard!")
    }

    return (
        <div className="flex flex-col border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white">
            <img
                src={layout.imageUrl}
                alt={layout.title}
                className="w-full h-52 object-cover"
            />

            <div className="flex flex-col flex-grow p-4 gap-2">
                <h2 className="text-lg font-semibold text-gray-800">{layout.title}</h2>

                <div className="text-sm text-gray-600">
                    <strong>🏰 Town Hall:</strong> {layout.thLevel}
                </div>

                <div className="text-sm text-gray-600">
                    <strong>🔰 Type:</strong> {layout.baseType}
                </div>

                <div className="text-sm text-gray-600">
                    <strong>🏷️ Tags:</strong> {layout.tags}
                </div>

                <button
                    onClick={copyLink}
                    className="mt-4 bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition"
                >
                    📋 Copy Layout Link
                </button>
            </div>
        </div>
    )
}

export default LayoutCard
