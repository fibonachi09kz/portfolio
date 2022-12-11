import {skills} from "../../data/db";
import React from "react";

function ProjectsPageFilters(props) {
	return (
		<div className="max-w-7xl mx-auto px-6 mb-10">
			<h2 className="text-white text-xl font-normal mb-3">Filter by technology</h2>
			<span className="flex items-center flex-wrap gap-5">
				{skills.map((skill) => (
					<button
						key={skill.id}
						type="button"
						onClick={(e) => {props.addFilter(e)}}
						className="gap-2 rounded-md w-full inline-flex items-center justify-center px-6 py-3 shadow-sm text-base font-medium text-white sm:w-auto bg-gray-700 hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50">
						<div className="flex-shrink-0 h-6 w-6 flex items-center justify-center">
							<img className="max-h-full" src={skill.imageUrl} alt={skill.title} />
						</div>
						{skill.title}
					</button>
				))}
			</span>
		</div>
	)
}

export default ProjectsPageFilters;
