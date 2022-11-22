import BackPage from "../../components/BackPage/BackPage";
import {Link} from "react-router-dom";

function NotFound({props}) {
	
	return(
		<>
			<BackPage title={props?.title || 'Page not found'} />
			<div className="bg-white flex-grow px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
				<div className="max-w-max mx-auto">
					<div className="sm:flex">
						<p className="text-4xl font-extrabold text-cyan-500 sm:text-7xl">404</p>
						<div className="sm:ml-6">
							<div className="sm:border-l sm:border-gray-200 sm:pl-6">
								<h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3 sm:text-5xl">Page
									not found</h1>
								<p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and
									try again.</p>
							</div>
							<div className="mt-5 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
								<Link to="/"
									  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-400">
									Back to home
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NotFound;