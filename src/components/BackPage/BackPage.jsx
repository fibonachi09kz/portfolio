import {Link} from "react-router-dom";


function BackPage({title}) {
    return(
        <div className="py-4 md:py-12">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-white sm:text-4xl">{title}</h2>
                </div>
                <div className="flex md:mt-0 md:ml-4">
                    <Link to="/"
                          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BackPage;
