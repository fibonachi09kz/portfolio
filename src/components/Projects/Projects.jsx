import {v4 as uuidv4} from "uuid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {projectList} from "../../data/db";

function Projects () {
    return (
        <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-base font-semibold tracking-wider text-cyan-600 text-center">&lt;Projects/&gt;</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center mb-12">My projects</p>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {projectList.map((person) => (
                    <li
                        key={uuidv4()}
                        className="col-span-1 flex flex-col text-center bg-white rounded-lg border border-gray-300 shadow-sm divide-y divide-gray-200"
                    >
                        <div className="flex-1 flex flex-col">
                            <img className="w-full h-40 flex-shrink-0 mx-auto rounded-t-lg" src={person.imageUrl} alt="" />
                            <h3 className="mt-6 text-gray-900 text-sm font-medium px-8">{person.name}</h3>
                            <dl className="mt-1 flex-grow flex flex-col justify-between px-8 pb-8">
                                <dt className="sr-only">Title</dt>
                                <dd className="text-gray-500 text-sm">{person.title}</dd>
                                <dt className="sr-only">Role</dt>
                                <dd className="mt-3 flex-wrap flex gap-1">
                                    {person.categories.map((cat) => (
                                        <span key={uuidv4()} className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                            {cat}
                                        </span>
                                    ))}
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <div className="-mt-px flex divide-x divide-gray-200">
                                <div className="w-0 flex-1 flex">
                                    <a
                                        href={`mailto:${person.email}`}
                                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                                    >
                                        <FontAwesomeIcon className="text-lg" icon={faSquareGithub} />
                                        <span className="ml-3">GitHub</span>
                                    </a>
                                </div>
                                <div className="-ml-px w-0 flex-1 flex">
                                    <a
                                        href={`tel:${person.telephone}`}
                                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
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
    )
}

export default Projects;

