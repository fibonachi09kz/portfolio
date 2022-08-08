import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import { MenuIcon, XIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'

import Spline from '@splinetool/react-spline';

import { v4 as uuidv4 } from 'uuid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'


const people = [
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        categories: ['react', 'typescript', 'bootstrap'],
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        categories: ['react', 'typescript', 'tailwind', 'bootstrap'],
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        categories: ['react', 'typescript', 'tailwind', 'bootstrap'],
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        categories: ['react', 'typescript', 'tailwind', 'bootstrap'],
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    }
]
const skills = [
    {
        id: 1,
        title: 'HTML5',
        extra: 'Tags, Attributes, W3, Semantic',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png'
    },
    {
        id: 2,
        title: 'CSS3',
        extra: 'Flex, Grid, Animation',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png',
    },
    {
        id: 3,
        title: 'JavaScript',
        extra: 'OOP, FP, Algorithm, ES6-12',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    },
    {
        id: 4,
        title: 'TypeScript',
        extra: 'Types, Generics, Interfaces, Decorators',
        imageUrl:
            'https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png',
    },
    {
        id: 5,
        title: 'React',
        extra: 'Classes, Hooks, Framer',
        imageUrl:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--1mtEvyef--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png',
    },
    {
        id: 6,
        title: 'Redux',
        extra: 'RTK Query, Reducer, Thunks',
        imageUrl:
            'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
    },
    {
        id: 7,
        title: 'Figma',
        extra: 'Prototypes, Canvas, UI Kit',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png',
    },
    {
        id: 8,
        title: 'Spline',
        extra: '3D Modeling, Animation',
        imageUrl:
            'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/npitztetvyezgsmh6yum',
    },
    {
        id: 9,
        title: 'Git',
        extra: 'GitHub, GitLab, GitHub Copilot',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    },
    {
        id: 10,
        title: 'Bootstrap',
        extra: 'UI, Components',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png',
    },
    {
        id: 11,
        title: 'Tailwind',
        extra: 'UI, Components',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
    },
    {
        id: 12,
        title: 'MUI',
        extra: 'UI, Components',
        imageUrl:
            'https://mui.com/static/logo.png',
    }
]
const navigation = [
    { name: 'Обо мне', href: '#' },
    { name: 'Скиллы', href: '#' },
    { name: 'Проекты', href: '#' },
    { name: 'Предложить работу', href: '#' },
]


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
                                            src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg"
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
                                            href="/"
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
                                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 h-full">
                                        <Spline scene="https://prod.spline.design/YgwCeXQMtbXV8ARV/scene.splinecode" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-gray-100 py-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-base font-semibold tracking-wider text-cyan-600 text-center">&lt;TechSkills/&gt;</h2>
                            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center">
                                Технологический стек
                            </p>
                            <div className="mt-12">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    {skills.map((skill) => (
                                        <div
                                            key={uuidv4()}
                                            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3"
                                        >
                                            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">
                                                <img className="max-h-full" src={skill.imageUrl} alt="" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900">{skill.title}</p>
                                                <p className="text-sm text-gray-500 truncate">{skill.extra}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <h2 className="text-base font-semibold tracking-wider text-cyan-600 text-center">&lt;Projects/&gt;</h2>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center mb-12">Мои проекты</p>
                        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {people.map((person) => (
                                <li
                                    key={uuidv4()}
                                    className="col-span-1 flex flex-col text-center bg-white rounded-lg border border-gray-300 shadow-sm divide-y divide-gray-200"
                                >
                                    <div className="flex-1 flex flex-col p-8">
                                        <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={person.imageUrl} alt="" />
                                        <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
                                        <dl className="mt-1 flex-grow flex flex-col justify-between">
                                            <dt className="sr-only">Title</dt>
                                            <dd className="text-gray-500 text-sm">{person.title}</dd>
                                            <dt className="sr-only">Role</dt>
                                            <dd className="mt-3 flex-wrap flex gap-1">
                                                {person.categories.map((cat) => (
                                                    <span key={uuidv4()} className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                                      {cat}
                                                    </span>
                                                ))}
                                            </dd>
                                        </dl>
                                    </div>
                                    <div>
                                        <div className="-mt-px flex divide-x divide-gray-200">
                                            <div className="w-0 flex-1 flex">
                                                <a
                                                    href={`mailto:${person.email}`}
                                                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                                                >
                                                    <FontAwesomeIcon className="text-lg" icon={faSquareGithub} />
                                                    <span className="ml-3">GitHub</span>
                                                </a>
                                            </div>
                                            <div className="-ml-px w-0 flex-1 flex">
                                                <a
                                                    href={`tel:${person.telephone}`}
                                                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                                                >
                                                    <FontAwesomeIcon className="text-lg" icon={faArrowUpRightFromSquare} />
                                                    <span className="ml-3">Link</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-100">
                        <div className="max-w-7xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:px-8">
                            <h2 className="text-base font-semibold tracking-wider text-cyan-600 text-center">&lt;ContactForm/&gt;</h2>
                            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center mb-12">Связаться со мной</p>
                            <div className="relative bg-white rounded-lg border border-gray-300 shadow-sm">
                                <div className="grid grid-cols-1 lg:grid-cols-3">

                                    <div className="relative overflow-hidden py-10 px-6 bg-cyan-800 sm:px-10 xl:p-12 rounded-l-lg">
                                        <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                                            <svg
                                                className="absolute inset-0 w-full h-full"
                                                width={343}
                                                height={388}
                                                viewBox="0 0 343 388"
                                                fill="none"
                                                preserveAspectRatio="xMidYMid slice"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                                    fill="url(#linear1)"
                                                    fillOpacity=".1"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="linear1"
                                                        x1="254.553"
                                                        y1="107.554"
                                                        x2="961.66"
                                                        y2="814.66"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#fff" />
                                                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div
                                            className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                                            aria-hidden="true"
                                        >
                                            <svg
                                                className="absolute inset-0 w-full h-full"
                                                width={359}
                                                height={339}
                                                viewBox="0 0 359 339"
                                                fill="none"
                                                preserveAspectRatio="xMidYMid slice"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                                    fill="url(#linear2)"
                                                    fillOpacity=".1"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="linear2"
                                                        x1="192.553"
                                                        y1="28.553"
                                                        x2="899.66"
                                                        y2="735.66"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#fff" />
                                                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div
                                            className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                                            aria-hidden="true"
                                        >
                                            <svg
                                                className="absolute inset-0 w-full h-full"
                                                width={160}
                                                height={678}
                                                viewBox="0 0 160 678"
                                                fill="none"
                                                preserveAspectRatio="xMidYMid slice"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                                    fill="url(#linear3)"
                                                    fillOpacity=".1"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="linear3"
                                                        x1="192.553"
                                                        y1="325.553"
                                                        x2="899.66"
                                                        y2="1032.66"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#fff" />
                                                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-medium text-white">Контактная информация</h3>
                                        <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                                            Выберите любой удобный для вас способ связаться со мной напрямую
                                        </p>
                                        <dl className="mt-8 space-y-6">
                                            <dt>
                                                <span className="sr-only">Номер телефона</span>
                                            </dt>
                                            <dd className="flex text-base text-indigo-50">
                                                <PhoneIcon className="flex-shrink-0 w-6 h-6 text-indigo-200" aria-hidden="true" />
                                                <a href="tel:+77788481988" className="ml-3 text-indigo-50">+7 (778) 848-19-88</a>
                                            </dd>
                                            <dt>
                                                <span className="sr-only">Email</span>
                                            </dt>
                                            <dd className="flex text-base text-indigo-50">
                                                <MailIcon className="flex-shrink-0 w-6 h-6 text-indigo-200" aria-hidden="true" />
                                                <a href="mailto:danya09kz@gmail.com" className="ml-3 text-indigo-50">danya09kz@gmail.com</a>
                                            </dd>
                                            <dt>
                                                <span className="sr-only">Github</span>
                                            </dt>
                                            <dd className="flex text-base text-indigo-200">
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                <a
                                                    href="https://github.com/fibonachi09kz"
                                                    className="ml-3 text-indigo-50"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    fibonachi09kz
                                                </a>
                                            </dd>
                                        </dl>
                                        <ul className="mt-8 flex space-x-12">
                                            <li>
                                                <a className="text-indigo-200 hover:text-indigo-100" href="/">
                                                    <span className="sr-only">Facebook</span>
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-6 h-6"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-indigo-200 hover:text-indigo-100" href="/">
                                                    <span className="sr-only">GitHub</span>
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-6 h-6"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-indigo-200 hover:text-indigo-100" href="/">
                                                    <span className="sr-only">Twitter</span>
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-6 h-6"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Contact form */}
                                    <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                        <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                            <div>
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                                    Имя
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-400 focus:border-cyan-400 border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                                    Email
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        autoComplete="email"
                                                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-400 focus:border-cyan-400 border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between">
                                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                                                        Телеграм
                                                    </label>
                                                    <span id="tg-optional" className="text-sm text-gray-500">
                                                        Опционально
                                                    </span>
                                                </div>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="tg"
                                                        id="tg"
                                                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-400 focus:border-cyan-400 border-gray-300 rounded-md"
                                                        aria-describedby="tg-optional"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between">
                                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                                                        Телефон
                                                    </label>
                                                    <span id="phone-optional" className="text-sm text-gray-500">
                                                        Опционально
                                                    </span>
                                                </div>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        id="phone"
                                                        autoComplete="tel"
                                                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-400 focus:border-cyan-400 border-gray-300 rounded-md"
                                                        aria-describedby="phone-optional"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <div className="flex justify-between">
                                                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                                                        Сообщение
                                                    </label>
                                                    <span id="message-max" className="text-sm text-gray-500">
                                                        Не более 1000 знаков
                                                    </span>
                                                </div>
                                                <div className="mt-1">
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        rows={4}
                                                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-400 focus:border-cyan-400 border border-gray-300 rounded-md"
                                                        aria-describedby="message-max"
                                                        defaultValue={''}
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2 sm:flex sm:justify-end">
                                                <button
                                                    type="submit"
                                                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white sm:w-auto bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-white"
                                                >
                                                    Отправить
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}