import {React, useEffect, useState} from 'react'

import Home from "./components/Home/Home";
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation";
import {Routes, Route, useLocation} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import SkillDetailPage from "./pages/SkillDetailPage/SkillDetailPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import NotFound from "./pages/NotFound/NotFound";
import ParticlesComp from "./components/ParticlesComp/ParticlesComp";



export default function App() {
    
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");
    useEffect(() => {
        if (location !== displayLocation) setTransitionStage("fadeOut");
    }, [location, displayLocation]);
    
    return (
        <>
            
            <div className="">
                
                <ParticlesComp />
                <div className="relative overflow-hidden flex flex-col min-h-screen">
                    <HeaderNavigation />
                    <div className={`flex-auto flex flex-col ${transitionStage}`}
                         onAnimationEnd={() => {
                             if (transitionStage === "fadeOut") {
                                 setTransitionStage("fadeIn");
                                 setDisplayLocation(location);
                             }
                         }}
                    >
                        <Routes location={displayLocation}>
                    
                            <Route index element={<Home />} />
                            <Route path="about-me" element={<AboutMePage />} />
                            <Route path="skills" element={<SkillsPage />} />
                            <Route path="skills/:id" element={<SkillDetailPage />} />
                    
                            {/*<Route path="projects" element={<ProjectsPage />} />*/}
                            {/*<Route path="projects/:id" element={<ProjectDetailPage />} />*/}
                    
                            <Route path="contact" element={<ContactPage />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
        
    )
}
