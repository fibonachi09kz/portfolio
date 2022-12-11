import BackPage from "../../components/BackPage/BackPage";
import {useLocation, useParams} from "react-router-dom";
import {getProject} from "../../tools/getAnything";
import {useEffect} from "react";
import NotFound from "../NotFound/NotFound";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import {capitalizeStr} from "../../tools/getAnything";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";



function SkillDetailPage() {
	
	let params = useParams();
	let project = getProject(params.id) || undefined;

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return(
		<>
			{project
				?
				<>
					<BackPage title={project.name} />
					<div className="w-full bg-gray-800 max-w-7xl mx-auto border rounded-md border-gray-700">
						<div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
							{/* Product */}
							<div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
								{/* Product image */}
								<div className="lg:row-end-1 lg:col-span-4">
									<div className="aspect-w-4 aspect-h-3 rounded-lg">
										<Swiper
											slidesPerView={1}
											spaceBetween={0}
											pagination={{
												clickable: true,
											}}
											grabCursor={true}
											loop={true}
											modules={[Pagination]}
											className="rounded-lg"
										>
											<SwiperSlide>
												<img src={project.imageUrl} alt={project.name} className="w-full object-center object-cover" />
											</SwiperSlide>
										</Swiper>
									</div>
								</div>
								
								{/* Product details */}
								<div className="w-full mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
									<div className="flex flex-col-reverse">
										<div>
											<h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{project.name}</h1>
											<p className="text-sm text-gray-400 mt-2">{project.title}</p>
										</div>
										
									</div>
									
									<p className="text-gray-400 mt-6">{project.title}</p>
									
									<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
										<a href="" className="flex justify-center items-center block bg-gray-700 w-full py-3 px-4 rounded-md shadow hover:bg-gradient-to-r hover:from-indigo-900 hover:via-sky-800 hover:to-purple-600 text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50">
											<FontAwesomeIcon className="text-lg" icon={faSquareGithub} />
											<span className="ml-3">Github</span>
										</a>
										<a href="" target="_blank" rel="noopener" className="flex justify-center items-center block bg-indigo-700 w-full py-3 px-4 rounded-md shadow hover:bg-gradient-to-r hover:from-indigo-900 hover:via-sky-800 hover:to-purple-600 text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50">
											<FontAwesomeIcon className="text-lg" icon={faArrowUpRightFromSquare} />
											<span className="ml-3">View</span>
										</a>
									</div>
									
									<div className="border-t border-gray-700 mt-10 pt-4">
										<h3 className="text-xl font-medium text-gray-400">Technology stack</h3>
										<div className="mt-4 prose prose-sm text-gray-400">
											<ul>
												{project.categories.map((cat) => (
													<li key={cat.id}>
														{capitalizeStr(cat.name)}
													</li>
												))}
											</ul>
										</div>
									</div>
									
									<div className="border-t border-gray-700 mt-4 pt-4">
										<h3 className="text-xl font-medium text-gray-400">About</h3>
										<p className="mt-4 text-base text-gray-400">
											About text
											<a href='#' className="font-medium text-indigo-600 hover:text-indigo-500">
												About link
											</a>
										</p>
									</div>
									
									
								</div>
								
							</div>
						</div>
					</div>
				</>
				:
				<NotFound />
			}
		</>
	)
}
export default SkillDetailPage;
