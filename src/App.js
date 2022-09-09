import { React } from 'react'

import Home from "./components/Home/Home";
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import SkillDetailPage from "./pages/SkillDetailPage/SkillDetailPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import ContactPage from "./pages/ContactPage/ContactPage";


export default function App() {
    return (
        <div className="bg-white">
            <div className="relative overflow-hidden">
                <HeaderNavigation />

                <Routes>
                    <Route index element={<Home />} />
                    {/*<Route path="about-me" element={<AboutMePage />} />*/}
                    <Route path="skills" element={<SkillsPage />} />
                    <Route path="skills/:id" element={<SkillDetailPage />} />

                    {/*<Route path="projects" element={<ProjectsPage />} />*/}
                    {/*<Route path="projects/:id" element={<ProjectDetailPage />} />*/}

                    <Route path="contact" element={<ContactPage />} />
                </Routes>

                <Footer />
            </div>
        </div>
    )
}