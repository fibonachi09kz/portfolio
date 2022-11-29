import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import {emailVar} from "../../form-vars";
import ConfirmText from "../FormAlerts/ConfirmText";
import ErrorText from "../FormAlerts/ErrorText";
import {ExclamationCircleIcon} from "@heroicons/react/solid";

const InnerForm = () => {
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
	const [confirm, setConfirm] = useState(false);
	
	const form = useRef();
	
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			telegram: '',
			phone: '',
			message: ''
		},
		validationSchema: Yup.object({
			name: Yup.string().min(1, 'Minimum 1 character').required('Required field'),
			email: Yup.string().email('Please enter a valid email').required('Required field'),
			telegram: Yup.string().min(4, 'Minimum 4 characters'),
			phone: Yup.string(),
			message: Yup.string().max(1000, 'No more than 1000 characters').required('Required field')
		}),
		onSubmit: (values, {resetForm}) => {
			setLoader(true);
			setConfirm(false)
			setError(false)
			
			emailjs.sendForm(emailVar.sId, 'template_tno4i2u', form.current, emailVar.publicKey)
				.then((result) => {
					setError(false)
					setLoader(false)
					setConfirm(true)
					resetForm({values: ''})
				}, (error) => {
					setError(true)
					setConfirm(false)
				});
		}
	})
	
	return (
		
		<form id="contact-form" ref={form} onSubmit={formik.handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
			<div>
				<label htmlFor="first-name" className="block text-sm font-medium text-gray-400">
					Name
				</label>
				<div className="mt-1">
					<div className="relative">
						<input
							type="text"
							name="name"
							autoComplete="given-name"
							className={formik.errors.name && formik.touched.name ? "py-3 px-4 block bg-gray-800 w-full shadow-sm text-gray-400 focus:ring-red-500 focus:border-red-500 rounded-md ring-red-500 border-red-500" : "py-3 px-4 block bg-gray-800 w-full shadow-sm text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 border-gray-700 rounded-md" }
							{...formik.getFieldProps('name')}
						/>
						{formik.errors.name && formik.touched.name
							?
							<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
								<ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
							</div>
							:
							null
						}
					</div>
					{formik.errors.name && formik.touched.name
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
				<label htmlFor="email" className="block text-sm font-medium text-gray-400">
					Email
				</label>
				<div className="mt-1">
					<div className="relative">
						<input
							type="email"
							name="email"
							autoComplete="email"
							className={formik.errors.email && formik.touched.email ? "py-3 px-4 block bg-gray-800 w-full shadow-sm text-gray-400 focus:ring-red-500 focus:border-red-500 rounded-md ring-red-500 border-red-500" : "py-3 px-4 block bg-gray-800 w-full shadow-sm text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 border-gray-700 rounded-md" }
							{...formik.getFieldProps('email')}
						/>
						{formik.errors.email && formik.touched.email
							?
							<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
								<ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
							</div>
							:
							null
						}
					</div>
					{formik.errors.email && formik.touched.email
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
					<label htmlFor="phone" className="block text-sm font-medium text-gray-400">
						Telegram
					</label>
					<span id="tg-optional" className="text-sm text-gray-500">
						Optional
					</span>
				</div>
				<div className="mt-1">
					<div className="relative flex rounded-md shadow-sm">
						<span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-700 bg-gray-800 text-gray-500 text-xl font-medium">
						  @
						</span>
						<input
							type="text"
							name="telegram"
							className={formik.errors.telegram && formik.touched.telegram ? "py-3 px-4 block bg-gray-800 w-full shadow-sm text-gray-400 focus:ring-red-500 focus:border-red-500 rounded-md ring-red-500 border-red-500" : "py-3 px-4 block bg-gray-800 w-full shadow-sm text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 border-gray-700 rounded-r" }
							aria-describedby="tg-optional"
							{...formik.getFieldProps('telegram')}
						/>
						{formik.errors.telegram && formik.touched.telegram
							?
							<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
								<ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
							</div>
							:
							null
						}
					</div>
					{formik.errors.telegram && formik.touched.telegram
						?
						<p className="text-sm text-red-600">
							{formik.errors.telegram}
						</p>
						:
						null
					}
				</div>
			</div>
			<div>
				<div className="flex justify-between">
					<label htmlFor="phone" className="block text-sm font-medium text-gray-400">
						Phone
					</label>
					<span id="phone-optional" className="text-sm text-gray-500">
						Optional
					</span>
				</div>
				<div className="mt-1">
					<div className="relative">
						<input
							type="text"
							name="phone"
							autoComplete="phone"
							className={formik.errors.phone && formik.touched.phone ? "py-3 px-4 block bg-gray-800 w-full shadow-sm text-gray-400 focus:ring-red-500 focus:border-red-500 rounded-md ring-red-500 border-red-500" : "py-3 px-4 block bg-gray-800 w-full shadow-sm text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 border-gray-700 rounded-md" }
							{...formik.getFieldProps('phone')}
						/>
						{formik.errors.phone && formik.touched.phone
							?
							<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
								<ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
							</div>
							:
							null
						}
					</div>
					{formik.errors.phone && formik.touched.phone
						?
						<p className="text-sm text-red-600">
							{formik.errors.phone}
						</p>
						:
						null
					}
				</div>
			</div>
			<div className="sm:col-span-2">
				<div className="flex justify-between">
					<label htmlFor="message" className="block text-sm font-medium text-gray-400">
						Message
					</label>
					<span id="message-max" className="text-sm text-gray-500">
						No more than 1000 characters
					</span>
				</div>
				<div className="mt-1">
					<div className="relative">
						<textarea
							name="message"
							rows={4}
							className={formik.errors.message && formik.touched.message ? "py-3 px-4 block bg-gray-800 w-full shadow-sm text-gray-400 focus:ring-red-500 focus:border-red-500 rounded-md ring-red-500 border-red-500" : "py-3 px-4 block bg-gray-800 w-full shadow-sm text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 border-gray-700 rounded-md" }
							aria-describedby="message-max"
							{...formik.getFieldProps('message')}
						/>
					</div>
					{formik.errors.message && formik.touched.message
						?
						<p className="text-sm text-red-600">
							{formik.errors.message}
						</p>
						:
						null
					}
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
					disabled={loader}
					className="gap-1 ml-auto w-full inline-flex items-center justify-center px-6 py-3 rounded-md shadow-sm text-base font-medium text-white sm:w-auto bg-gray-700 hover:bg-gradient-to-r hover:from-indigo-700 hover:via-sky-800 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50"
				>
					Send message
					{
						loader ?
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 form-btn__loading" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg> : ''
					}
				</button>
			</div>
		</form>
	);
};

export default InnerForm;
