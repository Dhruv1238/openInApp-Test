import { Link } from "react-router-dom"
import { Drawer } from "../components/Drawer"
import ExcelUpload from "../components/ExcelUpload"

export const Upload = () => {
    return (
        <>
            <div className="flex min-h-screen w-screen items-start justify-center overflow-scroll">
                <Drawer />
                <div className="z-40 fixed mt-28 md:ml-24 overflow-auto">
                    {/* <h1 >Upload</h1> */}
                    <ExcelUpload />
                </div>
            </div>
        </>
    )
}