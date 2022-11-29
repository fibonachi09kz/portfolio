import {useState, useRef} from "react";
import emailjs from '@emailjs/browser';
import {emailVar} from "../../form-vars";
import useInput from "../../hooks/useInput";

function ConfirmText() {
	return (
		<>
			<p className="text-indigo-400 mt-2 font-medium flex items-center gap-1">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
				</svg>
				The message has been sent successfully!
			</p>
		</>
	)
}
function ErrorText() {
	return (
		<>
			<p className="text-red-500 mt-2 font-medium flex items-center gap-1">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
				</svg>
				An error has occurred, please try again later!
			</p>
		</>
	)
}

function HeaderForm() {
	const headerForm = useRef();
	const emailField = useInput('')
	
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false)
	const [confirm, setConfirm] = useState(false)
	
	const handleSubmit = (e) => {
		
		e.preventDefault();
		
		setLoader(true);
		setConfirm(false)
		setError(false)
		
		emailjs.sendForm(emailVar.sId, 'template_g7ek9co', headerForm.current, emailVar.publicKey)
			.then((result) => {
				setError(false)
				setLoader(false)
				setConfirm(true)

				emailField.setValue('')

			}, (error) => {
				setError(true)
				setConfirm(false)
			});
		
	};
	
	return (
		<form ref={headerForm} onSubmit={handleSubmit} action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
			<div className="sm:flex">
				<div className="min-w-0 flex-1">
					<label htmlFor="email" className="sr-only">
						Email
					</label>
					<input
						name="email"
						type="email"
						{...emailField.controls}
						placeholder="Ваш Email"
						className="block w-full px-4 py-3 rounded-md border-0 text-base bg-gray-800 text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900"
						required
					/>
				</div>
				<div className="mt-3 sm:mt-0 sm:ml-3">
					<button
						type="submit"
						disabled={loader}
						className="flex justify-center gap-1 block bg-gray-700 w-full py-3 px-4 rounded-md shadow hover:bg-gradient-to-r hover:from-indigo-900 hover:via-sky-800 hover:to-purple-600 text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
					>
						Contact me faster!
						{
							loader ?
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 form-btn__loading" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg> : ''
						}
					</button>
				</div>
			</div>
			{
				confirm ? <ConfirmText/> : null
			}
			{
				error ? <ErrorText/> : null
			}
			<p className="mt-3 text-sm text-gray-300 sm:mt-4">
				You can also contact me and describe the offer in more detail through the {' '}
				<a href="#contact-form" className="font-medium text-white">
					feedback form
				</a>
				.
			</p>
		</form>
	)
}

export default HeaderForm;
