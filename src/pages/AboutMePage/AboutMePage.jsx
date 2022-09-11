import BackPage from "../../components/BackPage/BackPage";
import avatar from "../../assets/img/avatar.jpg";
import bg from "../../assets/img/about-bg.jpg";
import {bioInfo} from "../../data/db";

function AboutMePage({props}) {
	
	console.log(bioInfo)
	
	return(
		<>
			<BackPage title={props?.title || 'About me'}/>
			<article className="my-10 max-w-7xl mx-auto border shadow rounded-lg">
				<div>
					<div>
						<img className="h-32 w-full object-cover lg:h-48 rounded-t-lg"
							 src={bg}
							 alt="about page background" />
					</div>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
							<div className="flex">
								<img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
									 src={avatar}
									 alt="about page avatar" />
							</div>
							<div
								className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
								<div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
									<h1 className="text-2xl font-bold text-gray-900 truncate">{bioInfo.surname} {bioInfo.name} {bioInfo.patronymic}</h1>
								</div>
								<div
									className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
									<a href={'mailto:' + bioInfo.contacts.email}
											className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400">
										
										<svg className="-ml-1 mr-2 h-5 w-5 text-gray-400"
											 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
											 aria-hidden="true">
											<path
												d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
											<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
										</svg>
										<span>Message</span>
									</a>
									<a href={'tel:' + bioInfo.contacts.phone.replace(/\D/g, '')}
											className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400">
										
										<svg className="-ml-1 mr-2 h-5 w-5 text-gray-400"
											 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
											 aria-hidden="true">
											<path
												d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
										</svg>
										<span>Call</span>
									</a>
								</div>
							</div>
						</div>
						<div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
							<h1 className="text-2xl font-bold text-gray-900 truncate">Aleksin Danila Sergeevich</h1>
						</div>
					</div>
				</div>
				
				<div className="mt-6 sm:mt-2 2xl:mt-5">
					<div className="border-b border-gray-200">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<nav className="-mb-px flex space-x-8" aria-label="Tabs">
								<a href="#"
								   className="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
								   aria-current="page"> Profile </a>
								
								<a href="#"
								   className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"> Calendar </a>
								
								<a href="#"
								   className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"> Recognition </a>
							</nav>
						</div>
					</div>
				</div>
				
				<div className="my-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">Phone</dt>
							<dd className="mt-1 text-sm text-gray-900">{bioInfo.contacts.phone}</dd>
						</div>
						
						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">Email</dt>
							<dd className="mt-1 text-sm text-gray-900">{bioInfo.contacts.email}</dd>
						</div>
						
						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">Telegram</dt>
							<dd className="mt-1 text-sm text-gray-900">{bioInfo.contacts.telegram}</dd>
						</div>
						
						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">Instagram</dt>
							<dd className="mt-1 text-sm text-gray-900">{bioInfo.contacts.instagram}</dd>
						</div>
						
						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">Location</dt>
							<dd className="mt-1 text-sm text-gray-900">San Francisco</dd>
						</div>
						
						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">Sits</dt>
							<dd className="mt-1 text-sm text-gray-900">Oasis, 4th floor</dd>
						</div>
						
						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">Salary</dt>
							<dd className="mt-1 text-sm text-gray-900">$145,000</dd>
						</div>
						
						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">Birthday</dt>
							<dd className="mt-1 text-sm text-gray-900">June 8, 1990</dd>
						</div>
						
						<div className="sm:col-span-2">
							<dt className="text-sm font-medium text-gray-500">About</dt>
							<dd className="mt-1 max-w-prose text-sm text-gray-900 space-y-5">
								<p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit
									dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere
									aliquam.</p>
								<p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet.
									Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus
									felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam
									lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus
									suspendisse.</p>
							</dd>
						</div>
					</dl>
				</div>
			</article>
		</>
	)
}
export default AboutMePage;