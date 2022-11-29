import BackPage from "../../components/BackPage/BackPage";
import bg from "../../assets/img/about-bg.jpg";
import {bioInfo} from "../../data/db";
import {Link} from "react-router-dom";
import resumeRus from "../../assets/files/resume [rus].pdf";
import resumeEng from "../../assets/files/resume [eng].pdf";

function AboutMePage({props}) {

	return(
		<>
			<BackPage title={props?.title || 'About me'}/>
			<section className="mb-10 sm:my-10 max-w-7xl mx-auto sm:border border-gray-700 shadow sm:rounded-lg">
				<div>
					<div>
						<img className="h-32 w-full object-cover lg:h-48 sm:rounded-t-lg"
							 src={bg}
							 alt="about page background" />
					</div>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
							<div className="flex">
								<img className="h-24 w-24 rounded-full ring-4 ring-gray-700 sm:h-32 sm:w-32"
									 src={bioInfo.profile.avatar}
									 alt="about page avatar" />
							</div>
							<div
								className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
								<div className="sm:hidden mt-6 min-w-0 flex-1">
									<h1 className="text-2xl font-bold text-white truncate">{bioInfo.profile.surname} {bioInfo.profile.name} {bioInfo.profile.patronymic}</h1>
								</div>
								<div
									className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
									<a href={'mailto:' + bioInfo.contacts.email}
									   className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">

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
									   className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">

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
						<div className="hidden sm:block mt-6 min-w-0 flex-1">
							<h1 className="text-2xl font-bold text-white truncate">{bioInfo.profile.surname} {bioInfo.profile.name} {bioInfo.profile.patronymic}</h1>
						</div>
					</div>
				</div>
				<div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
					<div className="space-y-6 lg:col-start-1 lg:col-span-2">
						<section aria-labelledby="applicant-information-title">
							<div className="bg-gray-800 border-b sm:border border-gray-700 sm:rounded-lg mb-6">
								<div className="px-4 py-5 sm:px-6">
									<h2 id="applicant-information-title"
										className="text-lg leading-6 font-medium text-white">
										Information about me
									</h2>
									<p className="mt-1 max-w-2xl text-sm text-gray-400">
										Personal details and contacts
									</p>
								</div>
								<div className="border-t border-gray-700 px-4 py-5 sm:px-6">
									<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
										<div className="sm:col-span-1">
											<dt className="text-sm font-medium text-white">
												Profession
											</dt>
											<dd className="mt-1 text-sm text-gray-400">
												Frontend Developer
											</dd>
										</div>
										<div className="sm:col-span-1">
											<dt className="text-sm font-medium text-white">
												Email address
											</dt>
											<dd className="mt-1 text-sm text-gray-400">
												<a className="text-cyan-600" href={"mailto:" + bioInfo.contacts.email}>{bioInfo.contacts.email}</a>
											</dd>
										</div>
										<div className="sm:col-span-1">
											<dt className="text-sm font-medium text-white">
												Salary
											</dt>
											<dd className="mt-1 text-sm text-gray-400">
												$1500 / month
											</dd>
										</div>
										<div className="sm:col-span-1">
											<dt className="text-sm font-medium text-white">
												Phone
											</dt>
											<dd className="mt-1 text-sm text-gray-400">
												<a className="text-cyan-600" href={"tel:+" + bioInfo.contacts.phone.replace(/[^0-9]/g, '')}>{bioInfo.contacts.phone}</a>
											</dd>
										</div>
										<div className="sm:col-span-1">
											<dt className="text-sm font-medium text-white">
												Telegram
											</dt>
											<dd className="mt-1 text-sm text-gray-400">
												<a className="text-cyan-600" target="_blank" rel="noreferrer" href={"https://t.me/" + bioInfo.contacts.telegram}>@{bioInfo.contacts.telegram}</a>
											</dd>
										</div>
										<div className="sm:col-span-1">
											<dt className="text-sm font-medium text-white">
												WhatsApp
											</dt>
											<dd className="mt-1 text-sm text-gray-400">
												<a className="text-cyan-600" target="_blank" rel="noreferrer" href={"https://wa.me/" + bioInfo.contacts.phone.replace(/[^0-9]/g, '')}>{bioInfo.contacts.phone}</a>
											</dd>
										</div>
										<div className="sm:col-span-2">
											<dt className="text-sm font-medium text-white">
												About
											</dt>
											<dd className="mt-1 text-sm text-gray-400">
												Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt
												cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit
												id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
												pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
											</dd>
										</div>
										<div className="sm:col-span-2">
											<dt className="text-sm font-medium text-white">
												Attachments
											</dt>
											<dd className="mt-1 text-sm text-gray-400">
												<ul className="border border-gray-700 rounded-md divide-y divide-gray-700">
													<li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
														<div className="w-0 flex-1 flex items-center">
															<svg className="flex-shrink-0 h-5 w-5 text-gray-400"
																 x-description="Heroicon name: solid/paper-clip"
																 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
																 fill="currentColor" aria-hidden="true">
																<path fillRule="evenodd"
																	  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
																	  clipRule="evenodd">
																</path>
															</svg>
															<span className="ml-2 flex-1 w-0 truncate">
																Resume Frontend [Eng].pdf
														  </span>
														</div>
														<div className="ml-4 flex-shrink-0">
															<a href={resumeEng}
															   target="_blank"
															   rel="noreferrer"
															   className="font-medium text-cyan-600 hover:text-cyan-700">
																Download
															</a>
														</div>
													</li>

													<li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
														<div className="w-0 flex-1 flex items-center">
															<svg className="flex-shrink-0 h-5 w-5 text-gray-400"
																 x-description="Heroicon name: solid/paper-clip"
																 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
																 fill="currentColor" aria-hidden="true">
																<path fillRule="evenodd"
																	  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
																	  clipRule="evenodd">
																</path>
															</svg>
															<span className="ml-2 flex-1 w-0 truncate">
																Resume Frontend [Rus].pdf
														  </span>
														</div>
														<div className="ml-4 flex-shrink-0">
															<a href={resumeRus}
															   target="_blank"
															   rel="noreferrer"
															   className="font-medium text-cyan-600 hover:text-cyan-700">
																Download
															</a>
														</div>
													</li>

												</ul>
											</dd>
										</div>
									</dl>
								</div>
							</div>
						</section>
					</div>

					<section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
						<div className="bg-gray-800 px-4 py-5 border-t sm:border border-gray-700 sm:rounded-lg sm:px-6">
							<h2 id="timeline-title" className="text-lg font-medium text-white">Work experience</h2>


							<div className="mt-6 flow-root">
								<ul className="-mb-8">
									<li>
										<div className="relative pb-8">
											<span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-700" aria-hidden="true" />
											<div className="relative flex space-x-3">
												<div>
                          							<span className="h-8 w-8 rounded-full bg-violet-700 flex items-center justify-center ring-4 ring-gray-700">
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
														  	<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
														</svg>
                          							</span>
												</div>
												<div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
													<div>
														<div className="text-sm text-white">
															Studying frontend's skills (like courses, videos and docs)
														</div>
													</div>
													<div className="text-right text-sm whitespace-nowrap text-gray-400">
														<time dateTime="2018-10-20">2017 Feb 12</time>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="relative pb-8">
											<span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-700" aria-hidden="true" />
											<div className="relative flex space-x-3">
												<div>
                          							<span className="h-8 w-8 rounded-full bg-cyan-800 flex items-center justify-center ring-4 ring-gray-700">
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
														  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
														</svg>
                          							</span>
												</div>
												<div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
													<div>
														<div className="text-sm text-white">
															Web developer <p className="text-gray-500">Medical University of Karaganda</p>
														</div>
													</div>
													<div className="text-right text-sm whitespace-nowrap text-gray-400">
														<time dateTime="2018-10-20">2018 Oct 20</time>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="relative pb-8">
											<span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-700" aria-hidden="true" />
											<div className="relative flex space-x-3">
												<div>
                          							<span className="h-8 w-8 rounded-full bg-red-800 flex items-center justify-center ring-4 ring-gray-700">
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
														  	<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
														</svg>
                          							</span>
												</div>
												<div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
													<div>
														<div className="text-sm text-white">
															Layout designer <p className="font-medium text-gray-500">Pula Market</p>
														</div>
													</div>
													<div className="text-right text-sm whitespace-nowrap text-gray-400">
														<time dateTime="2019-12-02">2019 Dec 02</time>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="relative pb-8">
											<span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-700" aria-hidden="true" />
											<div className="relative flex space-x-3">
												<div>
                          							<span className="h-8 w-8 rounded-full bg-green-800 flex items-center justify-center ring-4 ring-gray-700">
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
														  	<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
														</svg>
                          							</span>
												</div>
												<div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
													<div>
														<div className="text-sm text-white">
															JS-developer (affiliate marketing) <p className="font-medium text-gray-500">AFLA Group</p>
														</div>
													</div>
													<div className="text-right text-sm whitespace-nowrap text-gray-400">
														<time dateTime="2020-08-14">2020 Aug 14</time>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="relative pb-8">
											<div className="relative flex space-x-3">
												<div>
                          							<span className="h-8 w-8 rounded-full bg-fuchsia-800 flex items-center justify-center ring-4 ring-gray-700">
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
														  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
														</svg>
                          							</span>
												</div>
												<div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
													<div>
														<div className="text-sm text-white">
															Frontend developer <p className="font-medium text-gray-500">Hoster.KZ</p>
														</div>
													</div>
													<div className="text-right text-sm whitespace-nowrap text-gray-400">
														<time dateTime="2021-01-20">2021 Jan 20</time>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="mt-6 flex flex-col justify-stretch">
								<Link to="/contact"
										className="flex justify-center gap-1 block bg-gray-600 w-full py-3 px-4 rounded-md shadow hover:bg-gradient-to-r hover:from-indigo-900 hover:via-sky-800 hover:to-purple-600 text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50">
									OFFER A JOB
								</Link>
							</div>
						</div>
					</section>
				</div>
			</section>

		</>
	)
}
export default AboutMePage;
