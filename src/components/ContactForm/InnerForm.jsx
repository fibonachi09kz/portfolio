import React from 'react';
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import {emailVar} from "../../form-vars";
import useInput from "../../hooks/useInput";
import {useFormik} from 'formik';
import ConfirmText from "../FormAlerts/ConfirmText";
import ErrorText from "../FormAlerts/ErrorText";
import {ExclamationCircleIcon} from "@heroicons/react/solid";

const validate = values => {
	const errors = {}
	
	if ( !values.name ) {
		errors.name = 'Required field'
	}
	
	if ( !values.email ) {
		errors.email = 'Required field';
	} else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
		errors.email = 'Invalid email address';
	}
	
	return errors
}


const InnerForm = () => {
	
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			telegram: '',
			phone: '',
			message: ''
		},
		validate,
		onSubmit: values => console.log(JSON.stringify(values, null, 2))
	})
	
	// const form = useRef();
	//
	//
	// const nameField = useInput('');
	// const emailField = useInput('');
	// const tgField = useInput('');
	// const phoneField = useInput('');
	// const messageField = useInput('');
	//
	//
	//
	// const [loader, setLoader] = useState(false);
	// const [error, setError] = useState(false)
	// const [confirm, setConfirm] = useState(false)
	//
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	setLoader(true);
	// 	setConfirm(false)
	// 	setError(false)
	//
	// 	emailjs.sendForm(emailVar.sId, 'template_tno4i2u', form.current, emailVar.publicKey)
	// 		.then((result) => {
	// 			setError(false)
	// 			setLoader(false)
	// 			setConfirm(true)
	//
	// 			nameField.setValue('')
	// 			emailField.setValue('')
	// 			tgField.setValue('')
	// 			phoneField.setValue('')
	// 			messageField.setValue('')
	//
	// 		}, (error) => {
	// 			setError(true)
	// 			setConfirm(false)
	// 		});
	//
	// };
	
	return (
		
		<form id="contact-form" onSubmit={formik.handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
			<div>
				<label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
					Name
				</label>
				<div className="mt-1">
					<div className="relative">
						<input
							type="text"
							name="name"
							required
							autoComplete="given-name"
							className={formik.errors.name ? "py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 rounded-md ring-red-500 border-red-500" : "py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-400 focus:border-cyan-400 border-gray-300 rounded-md" }
							value={formik.values.name}
							onChange={formik.handleChange}
						/>
						{formik.errors.name
							?
							<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
								<ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
							</div>
							:
							null
						}
					</div>
					{formik.errors.name
						?
						<p className="text-sm text-red-600">
							{formik.errors.name}
						</p>
						:
						null
					}
				</div>
			</div>
			<div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-900">
					Email
				</label>
				<div className="mt-1">
					<div className="relative">
						<input
							type="email"
							name="email"
							required
							autoComplete="email"
							className={formik.errors.email ? "py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 rounded-md ring-red-500 border-red-500" : "py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-400 focus:border-cyan-400 border-gray-300 rounded-md" }
							value={formik.values.email}
							onChange={formik.handleChange}
						/>
						{formik.errors.email
							?
							<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
								<ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
							</div>
							:
							null
						}
					</div>
					{formik.errors.email
						?
						<p className="text-sm text-red-600">
							{formik.errors.email}
						</p>
						:
						null
					}
				</div>
			</div>
			<div>
				<div className="flex justify-between">
					<label htmlFor="phone" className="block text-sm font-medium text-gray-900">
						Telegram
					</label>
					<span id="tg-optional" className="text-sm text-gray-500">
						Optional
					</span>
				</div>
				<div className="mt-1">
					<input
						type="text"
						name="telegram"
						className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-400 focus:border-cyan-400 border-gray-300 rounded-md"
						aria-describedby="tg-optional"
						value={formik.values.telegram}
						onChange={formik.handleChange}
					/>
				</div>
			</div>
			<div>
				<div className="flex justify-between">
					<label htmlFor="phone" className="block text-sm font-medium text-gray-900">
						Phone
					</label>
					<span id="phone-optional" className="text-sm text-gray-500">
						Optional
					</span>
				</div>
				<div className="mt-1">
					<input
						type="text"
						name="phone"
						autoComplete="tel"
						className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-400 focus:border-cyan-400 border-gray-300 rounded-md"
						aria-describedby="phone-optional"
						value={formik.values.phone}
						onChange={formik.handleChange}
					/>
				</div>
			</div>
			<div className="sm:col-span-2">
				<div className="flex justify-between">
					<label htmlFor="message" className="block text-sm font-medium text-gray-900">
						Message
					</label>
					<span id="message-max" className="text-sm text-gray-500">
						No more than 1000 characters
					</span>
				</div>
				<div className="mt-1">
					<textarea
						name="message"
						rows={4}
						required
						className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-400 focus:border-cyan-400 border border-gray-300 rounded-md"
						aria-describedby="message-max"
						value={formik.values.message}
						onChange={formik.handleChange}
					/>
				</div>
			</div>
			<div className="sm:col-span-2 flex flex-col sm:flex-row sm:justify-end items-center gap-4">
				{/*{*/}
				{/*	confirm ? <ConfirmText/> : null*/}
				{/*}*/}
				{/*{*/}
				{/*	error ? <ErrorText/> : null*/}
				{/*}*/}
				<button
					type="submit"
					// disabled={loader}
					className="gap-1 ml-auto w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white sm:w-auto bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50"
				>
					Send message
					{/*{*/}
					{/*	loader ?*/}
					{/*		<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 form-btn__loading" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>*/}
					{/*			<path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />*/}
					{/*		</svg> : ''*/}
					{/*}*/}
				</button>
			</div>
		</form>
	);
};

export default InnerForm;