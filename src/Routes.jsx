import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NewRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon/:id" element={<Pokemon />} />
            </Routes>
        </BrowserRouter>
    );
};

export default NewRoutes;
