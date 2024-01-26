import { Routes, Route } from "react-router-dom"
import { SignUp } from "./pages/SignUp"
import { NotFound } from "./pages/NotFound"


export const Router = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<SignUp />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}