import {ChevronRightIcon} from "@heroicons/react/solid";
import HeaderForm from "../HeaderForm/HeaderForm";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import ContactForm from "../ContactForm/ContactForm";
import {AtomAnim} from "../AtomAnim/AtomAnim";
import {useEffect, useState} from "react";


function Home() {
    
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        let isNonAnim = window.innerWidth <= 1024;
        setIsMobile(isNonAnim)
    }, [])
    
    
    
    return(
        <main>
            <div id="about" className="py-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                            <div className="lg:py-24">
                                <a
                                    href="https://hh.kz/applicant/resumes/view?resume=185d44edff0616e77a0039ed1f6b6953746f50"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                                >
                                            <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                                            Ready to work
                                            </span>
                                    <span className="ml-4 text-sm">View on HH.ru</span>
                                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                                </a>
                                <div className="flex items-center gap-4 flex-wrap my-3 sm:justify-center lg:justify-start">
                                    <div className="flex items-center text-sm text-gray-300">
                                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Kazakhstan, Karaganda
                                    </div>
                                    <div className="flex items-center text-sm text-gray-300">
                                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                                  clipRule="evenodd"/>
                                            <path
                                                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                                        </svg>
                                        Ready to relocation
                                    </div>
                                </div>
                                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                    <span className="block">Alexin Danila</span>
                                    <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                                                Frontend Developer
                                            </span>
                                </h1>
                                <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                                    To invite me to participate in the development of something, just leave your Email and I will contact you soon!
                                </p>
                                <div className="mt-10 sm:mt-6">
                                    <HeaderForm/>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:-mb-48 lg:m-0 lg:relative hidden lg:block">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 h-full cursor-grab">
                                {isMobile ? null : <AtomAnim />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Skills/>
            <Projects/>
            <ContactForm/>
        </main>
    )
}

export default Home;