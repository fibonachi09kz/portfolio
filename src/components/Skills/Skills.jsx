import {v4 as uuidv4} from "uuid";
import {skills} from "../../data/db";
import { Link } from "react-router-dom";

function Skills() {
    return (
        <div id="stack" className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-base font-semibold tracking-wider text-cyan-600 text-center">&lt;TechSkills/&gt;</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center">
                    Технологический стек
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {skills.map((skill) => (
                            <Link to="/skill"
                                key={uuidv4()}
                                className="relative cursor-pointer rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                            >
                                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">
                                    <img className="max-h-full" src={skill.imageUrl} alt="" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900">{skill.title}</p>
                                    <p className="text-sm text-gray-500 truncate">{skill.extra}</p>
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