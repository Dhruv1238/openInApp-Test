

export const NotFound = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen text-center bg-white text-gray-900">
                <div className="flex items-center">
                    <h1 className="text-6xl font-bold">404</h1>
                    <h1 className="text-3xl font-bold ml-10">-</h1>
                    <h1 className="text-3xl font-bold ml-10">Not Found</h1>
                </div>
                <button
                    className="mt-10 bg-baseBlue text-white py-3 px-4 rounded-xl hover:scale-105 font-bold"
                    onClick={() => {
                        window.location.href = "/"
                    }}
                >
                    Go Home
                </button>
            </div>
        </>
    )
};