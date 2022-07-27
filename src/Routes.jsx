import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NewRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default NewRoutes;