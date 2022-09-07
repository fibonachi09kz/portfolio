import { React } from 'react'

import Home from "./components/Home/Home";
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation";
import {Routes, Route} from "react-router-dom";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import Footer from "./components/Footer/Footer";


export default function App() {
    return (
        <div className="bg-white">
            <div className="relative overflow-hidden">
                <HeaderNavigation />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="skills" element={<SkillsPage />} />
                </Routes>
                <Footer />
            </div>
        </div>
    )
}