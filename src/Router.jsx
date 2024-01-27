import { Routes, Route } from "react-router-dom"
import { SignIn } from "./pages/SignIn"
import { NotFound } from "./pages/NotFound"
import { Upload } from "./pages/Upload"


export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}