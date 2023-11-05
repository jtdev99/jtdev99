import { Routes, Route } from "react-router-dom";

import { Wrapper } from "../components";
import { About, Blog, Contact, Home } from "../pages";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Wrapper />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    );
};
