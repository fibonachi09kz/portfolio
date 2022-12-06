import BackPage from "../../components/BackPage/BackPage";
import {Link} from "react-router-dom";
import {projectList} from "../../data/db";
import {v4 as uuidv4} from "uuid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

function ProjectsPage({props}) {
	
	return(
		<>
			<BackPage title={props?.title || 'Projects'} />
			<div className="flex-grow px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
				<h2 className="text-xl font-semibold tracking-wider text-gray-300 text-center">&lt;Projects/&gt;</h2>
				<p className="mt-2 text-3xl font-extrabold text-gradient tracking-normal sm:text-4xl !leading-normal text-center">Projects List</p>
				<ul className="grid mt-12 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{projectList.map((item) => (
						<li
							key={uuidv4()}
							className="col-span-1 flex flex-col text-center bg-gray-800 rounded-lg shadow-sm divide-y divide-gray-900"
						>
							<div className="flex-1 flex flex-col">
								<img className="w-full h-40 flex-shrink-0 mx-auto rounded-t-lg object-cover" src={item.imageUrl} alt="" />
								<h3 className="mt-6 text-white text-sm font-medium px-8">{item.name}</h3>
								<dl className="mt-1 flex-grow flex flex-col justify-between px-4 pb-4">
									<dd className="text-gray-400 text-sm">{item.title}</dd>
									<dd className="mt-3 flex-wrap flex gap-1">
										{item.categories.map((cat) => (
											<span key={uuidv4()} className="px-2 py-1 text-indigo-600 text-xs font-medium bg-gray-700 rounded-full">
                                            {cat}
                                        </span>
										))}
									</dd>
								</dl>
							</div>
							<div>
								<div className="-mt-px flex divide-x divide-gray-900">
									<div className="w-0 flex-1 flex">
										<a
											href={`mailto:${item.email}`}
											className="transition-all relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-300 font-medium rounded-bl-lg hover:bg-gray-600"
										>
											<FontAwesomeIcon className="text-lg" icon={faSquareGithub} />
											<span className="ml-3">GitHub</span>
										</a>
									</div>
									<div className="-ml-px w-0 flex-1 flex">
										<a
											href={`tel:${item.telephone}`}
											className="transition-all relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-300 font-medium rounded-br-lg hover:bg-gray-600"
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
		</>
	)
}

export default ProjectsPage;
