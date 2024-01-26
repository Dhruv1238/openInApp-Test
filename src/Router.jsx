import { Routes, Route } from "react-router-dom"
import { SignIn } from "./pages/SignIn"
import { NotFound } from "./pages/NotFound"


export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SignIn />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}