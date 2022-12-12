import BackPage from "../../components/BackPage/BackPage";
import {projectList} from "../../data/db";
import React, {useState} from "react";
import ProjectsPageFilters from "../../components/ProjectsPageFilters/ProjectsPageFilters";
import {v4 as uuidv4} from "uuid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";


function ProjectsPage({props}) {
	
	const [loader, setLoader] = useState(false)
	
	const [projects, setProjects] = useState(projectList);
	const [filters, setFilters] = useState([])
	
	function addFilter(e) {
		
		let elem = e.currentTarget
		let filterName = elem.textContent.toLowerCase()
		
		setFilters(filters => {
			let index = filters.indexOf(filterName);
			if (index !== -1) {
				elem.classList.remove('outline-none', 'ring-2', 'ring-indigo-500', 'ring-offset-white')
				return filters.filter(item => item !== filterName)
			} else {
				elem.classList.add('outline-none', 'ring-2', 'ring-indigo-500', 'ring-offset-white')
				return [...filters, filterName]
			}
		})
		
	}
	
	return (
		<>
			<BackPage title={props?.title || 'Projects'} />
			<div className="flex-grow py-4">
				<ProjectsPageFilters addFilter={addFilter} />
				<ul className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{projects.filter(elem => {
						if (filters.length > 0) {
							return elem.categories.some(cat => {
								return filters.indexOf(cat.name) !== -1
							})
						} else {
							return true
						}
					}).map((item) => (
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
											<span key={cat.id} className="px-2 py-1 text-indigo-300 text-xs font-medium bg-gray-700 rounded-md">
                                        {cat.name}
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
										<Link to={`/projects/${item.id}`}
											  href={`tel:${item.telephone}`}
											  className="transition-all relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-300 font-medium rounded-br-lg hover:bg-gray-600"
										>
											<FontAwesomeIcon className="text-lg" icon={faArrowUpRightFromSquare} />
											<span className="ml-3">Detail</span>
										</Link>
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
