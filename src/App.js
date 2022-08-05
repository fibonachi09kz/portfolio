import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, } from '@heroicons/react/outline'
import { ChevronRightIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'
import Spline from '@splinetool/react-spline';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const people = [
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
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
                                            key={item.name}
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
                                                key={item.name}
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
                            <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase text-center">tech skills</h2>
                            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center">
                                Технологический стек
                            </p>
                            <div className="mt-12">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    {skills.map((skill) => (
                                        <div
                                            key={skill.id}
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
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    >
                        {people.map((person) => (
                        <SwiperSlide>
                            <li
                                key={person.email}
                                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                            >
                                <div className="flex-1 flex flex-col p-8">
                                    <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={person.imageUrl} alt="" />
                                    <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
                                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                                        <dt className="sr-only">Title</dt>
                                        <dd className="text-gray-500 text-sm">{person.title}</dd>
                                        <dt className="sr-only">Role</dt>
                                        <dd className="mt-3">
                                            <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                              {person.role}
                                            </span>
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
                                                <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                                <span className="ml-3">Email</span>
                                            </a>
                                        </div>
                                        <div className="-ml-px w-0 flex-1 flex">
                                            <a
                                                href={`tel:${person.telephone}`}
                                                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                                            >
                                                <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                                <span className="ml-3">Call</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </main>
            </div>
        </div>
    )
}