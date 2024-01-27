import { Link } from "react-router-dom"
import { Drawer } from "../components/Drawer"

export const Upload = () => {
    return (
        <>
            <div className="flex h-screen w-screen items-center justify-center">
                <Drawer />
                <Link to='/' className="z-40 text-center items-center fixed">
                    <h1 >Upload</h1>
                </Link>
            </div>
        </>
    )
}