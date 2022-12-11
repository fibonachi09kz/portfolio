import BackPage from "../../components/BackPage/BackPage";
import {projectList} from "../../data/db";
import React, {useState} from "react";
import {skills} from "../../data/db";
import ProjectsPageList from "../../components/ProjectsPageList/ProjectsPageList";
import ProjectsPageFilters from "../../components/ProjectsPageFilters/ProjectsPageFilters";


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
		
		
		
		if (filters.length > 0) {
			let stat = true
			let result = projects.filter(elem => {

				elem.categories.forEach(cat => {
					
					filters.forEach(cur => {
					
					
					})

				})
				
				return stat
			})
			setProjects(result)
		} else {
			setProjects(projectList)
		}
		
	}
	
	return (
		<>
			<BackPage title={props?.title || 'Projects'} />
			<div className="flex-grow py-4">
				<ProjectsPageFilters addFilter={addFilter} />
				<ProjectsPageList projects={projects} />
				<div className="sm:col-span-2 mt-8 flex flex-col sm:flex-row sm:justify-center items-center gap-4 px-6">
					<button type="button"
							className="gap-1 w-full inline-flex items-center justify-center px-6 py-3 rounded-md shadow-sm text-base font-medium text-white sm:w-auto bg-gray-700 hover:bg-gradient-to-r hover:from-indigo-700 hover:via-sky-800 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50"
							disabled={loader}
					>
						Show more
						{
							loader ?
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 form-btn__loading" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg> : ''
						}
					</button>
				</div>
			</div>
		</>
	)
}

export default ProjectsPage;
