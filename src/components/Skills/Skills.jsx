import {skills} from "../../data/db";
import {Link} from "react-router-dom";



function Skills() {

    return (
        <div id="stack" className="mb-16 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl font-semibold tracking-wider text-gray-300 text-center">&lt;TechSkills/&gt;</h2>
                <p className="mt-2 text-3xl font-extrabold text-gradient tracking-normal sm:text-4xl !leading-normal text-center">
                    Technology Stack
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {skills.map((skill) => (
                            <Link to={`skills/${skill.id}`}
                                key={skill.id}
                                className="relative transition-all cursor-pointer rounded-lg flex items-center space-x-3 px-6 py-5 bg-gray-800 shadow-sm hover:bg-gradient-to-r hover:from-indigo-900 hover:via-sky-800 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">
                                    <img className="max-h-full" src={skill.imageUrl} alt="" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-base font-medium text-white">{skill.title}</p>
                                    <p className="text-sm text-gray-400 truncate">{skill.extra}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
