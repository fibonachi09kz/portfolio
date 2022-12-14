import React, {useRef} from 'react';
import logo from "../../logo.svg";
import {Popover, Transition} from "@headlessui/react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import {Link} from "react-router-dom";
import { Fragment } from 'react'


function HeaderNavigation() {
    
    const buttonRef = useRef();
    
        return (
            <Popover as="header" className="relative">
                <div className="py-6">
                    <nav
                        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                        aria-label="Global"
                    >
                        <div className="flex items-center flex-1">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <Link to="/">
                                    <span className="sr-only">Fibonachi</span>
                                    <img
                                        className="h-8 w-auto sm:h-10"
                                        src={logo}
                                        alt="logo"
                                    />
                                </Link>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                        <span className="sr-only">Open main menu</span>
                                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="hidden space-x-8 md:flex md:ml-10">
                                <Link to="/" className="text-base font-medium text-white hover:text-gray-300">
                                    Home
                                </Link>
                                <Link to="/about-me" className="text-base font-medium text-white hover:text-gray-300">
                                    About me
                                </Link>
                                <Link to="/projects" className="text-base font-medium text-white hover:text-gray-300">
                                    Projects
                                </Link>
                                <Link to="/contact" className="text-base font-medium text-white hover:text-gray-300">
                                    Contacts
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden z-50">
                        <div className="rounded-lg shadow-md bg-gray-700 ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src={logo}
                                        alt="logo"
                                    />
                                </div>

                                <div className="-mr-2">
                                    <Popover.Button ref={buttonRef} className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="pt-5 pb-6">
                                <div className="px-2 space-y-1">
                                    <Link to="/" onClick={() => buttonRef.current?.click()} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800">
                                        Home
                                    </Link>
                                    <Link to="/about-me" onClick={() => buttonRef.current?.click()} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800">
                                        About me
                                    </Link>
                                    <Link to="/projects" onClick={() => buttonRef.current?.click()} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800">
                                        Projects
                                    </Link>
                                    <Link to="/contact" onClick={() => buttonRef.current?.click()}  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800">
                                        Contacts
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        );
}

export default HeaderNavigation;
