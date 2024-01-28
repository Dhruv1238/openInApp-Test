import { Link } from "react-router-dom"
import { Drawer } from "../components/Drawer"
import ExcelUpload from "../components/ExcelUpload"

export const Upload = () => {
    return (
        <>
            <div className="flex min-h-screen w-screen items-start justify-center overflow-x-clip ">
                <div className="absolute top-0 left-0 overflow-hidden">
                <Drawer />
                </div>
                <div className="z-40 mt-28 md:ml-24 overflow-y-auto overflow-hidden">
                    {/* <h1 >Upload</h1> */}
                    <ExcelUpload />
                </div>
            </div>
        </>
    )
}