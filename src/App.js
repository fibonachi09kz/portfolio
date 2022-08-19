import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'

import Spline from '@splinetool/react-spline';

import { v4 as uuidv4 } from 'uuid';

import ContactForm from "./components/ContactForm/ContactForm";
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills";

import {navigation} from "./data/db";



export default function App() {
    return (
        <div className="bg-white">
            <div className="relative overflow-hidden">
                <Popover as="header" className="relative">
                    <div className="bg-gray-900 pt-6">
                        <nav
                            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                            aria-label="Global"
                        >
                            <div className="flex items-center flex-1">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <a href="/">
                                        <span className="sr-only">Workflow</span>
                                        <img
                                            className="h-8 w-auto sm:h-10"
                                            src=""
                                            alt=""
                                        />
                                    </a>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="hidden space-x-8 md:flex md:ml-10">
                                    {navigation.map((item) => (
                                        <a
                                            key={uuidv4()}
                                            href={item.href}
                                            className="text-base font-medium text-white hover:text-gray-300"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden md:flex md:items-center md:space-x-6">
                                <a
                                    href="/"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                                >
                                    Войти
                                </a>
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
                        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
                            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="pt-5 pb-6">
                                    <div className="px-2 space-y-1">
                                        {navigation.map((item) => (
                                            <a
                                                key={uuidv4()}
                                                href={item.href}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="mt-6 px-5">
                                        <p className="text-center text-base font-medium text-gray-500">
                                            <a href="/" className="text-gray-900 hover:underline">
                                                Войти
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
                <main>
                    <div className="py-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                        <div className="mx-auto max-w-7xl lg:px-8">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                                    <div className="lg:py-24">
                                        <a
                                            href="https://hh.kz/applicant/resumes/view?resume=185d44edff0616e77a0039ed1f6b6953746f50"
                                            target="_blank"
                                            className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                                        >
                                            <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                                            Готов к работе
                                            </span>
                                            <span className="ml-4 text-sm">Посмотреть резюме на HH.ru</span>
                                            <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                                        </a>
                                        <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                            <span className="block">Alexin Danila</span>
                                            <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                                                Frontend Developer
                                            </span>
                                        </h1>
                                        <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                                            Чтобы предложить мне участвовать в разработке чего-либо, просто оставьте свой Email, и я свяжусь с вами в ближайшее время!
                                        </p>
                                        <div className="mt-10 sm:mt-6">
                                            <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                                                <div className="sm:flex">
                                                    <div className="min-w-0 flex-1">
                                                        <label htmlFor="email" className="sr-only">
                                                            Email
                                                        </label>
                                                        <input
                                                            id="email"
                                                            type="email"
                                                            placeholder="Ваш Email"
                                                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                                        <button
                                                            type="submit"
                                                            className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                                                        >
                                                            Предложить работу
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                                                    Вы также можете связаться со мной и подробнее описать предложение через {' '}
                                                    <a href="/" className="font-medium text-white">
                                                        форму обратной связи
                                                    </a>
                                                    .
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 sm:-mb-48 lg:m-0 lg:relative hidden lg:block">
                                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 h-full cursor-grab">
                                        <Spline scene="https://prod.spline.design/YgwCeXQMtbXV8ARV/scene.splinecode" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <Skills/>
                    <Projects/>
                    <ContactForm/>
                </main>
            </div>
        </div>
    )
}