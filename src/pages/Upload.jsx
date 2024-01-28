import { Link } from "react-router-dom"
import { Drawer } from "../components/Drawer"
import ExcelUpload from "../components/ExcelUpload"

export const Upload = () => {
    return (
        <>
            <div className="flex min-h-screen w-screen items-start justify-center overflow-x-clip ">
                {/* <div className="absolute z-40 top-0 left-0 overflow-hidden"> */}
                <Drawer />
                {/* </div> */}
                <div className="z-40 absolute mt-28 overflow-x-clip right-0 left-24">
                    {/* <h1 >Upload</h1> */}
                    <ExcelUpload />
                </div>
            </div>
        </>
    )
}