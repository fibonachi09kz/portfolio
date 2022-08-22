import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import {emailVar} from "../../form-vars";
import useInput from "../../hooks/useInput";

import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

function ConfirmText() {
    return (
        <>
            <p className="text-cyan-600 font-medium flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Сообщение успешно отправлено!
            </p>
        </>
    )
}
function ErrorText() {
    return (
        <>
            <p className="text-red-600 font-medium flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
                </svg>
                Произошла ошибка, попробуйте позже!
            </p>
        </>
    )
}

function ContactForm() {
    
    const form = useRef();


    const nameField = useInput();
    const emailField = useInput();
    const tgField = useInput();
    const phoneField = useInput();
    const messageField = useInput();



    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false)
    const [confirm, setConfirm] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        setConfirm(false)
        setError(false)
    
        emailjs.sendForm(emailVar.sId, 'template_tno4i2u', form.current, emailVar.publicKey)
        .then((result) => {
            setError(false)
            setLoader(false)
            setConfirm(true)

            nameField.setValue('')
            emailField.setValue('')
            tgField.setValue('')
            phoneField.setValue('')
            messageField.setValue('')

        }, (error) => {
            setError(true)
            setConfirm(false)
        });

    };



    return (
        <>
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <h2 className="text-base font-semibold tracking-wider text-cyan-600 text-center">&lt;ContactForm/&gt;</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center mb-12">Связаться со мной</p>
                    <div className="relative bg-white rounded-lg border border-gray-300 shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-3">

                            <div className="relative overflow-hidden py-10 px-6 bg-cyan-800 sm:px-10 xl:p-12 rounded-t-lg lg:rounded-none lg:rounded-l-lg">
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

                            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                <form id="contact-form" ref={form} onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                            Имя
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="name"
                                                {...nameField}
                                                required
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
                                                name="email"
                                                type="email"
                                                {...emailField}
                                                required
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
                                                name="telegram"
                                                {...tgField}
                                                required
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
                                                {...phoneField}
                                                required
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
                                                        name="message"
                                                        rows={4}
                                                        {...messageField}
                                                        required
                                                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-400 focus:border-cyan-400 border border-gray-300 rounded-md"
                                                        aria-describedby="message-max"
                                                    />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 flex flex-col sm:flex-row sm:justify-end items-center gap-4">
                                        {
                                            confirm ? <ConfirmText/> : null
                                        }
                                        {
                                            error ? <ErrorText/> : null
                                        }
                                        <button
                                            type="submit"
                                            disabled={loader ? true : false}
                                            className="gap-1 ml-auto w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white sm:w-auto bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            Отправить
                                            {
                                                loader ?
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 form-btn__loading" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg> : ''
                                            }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;