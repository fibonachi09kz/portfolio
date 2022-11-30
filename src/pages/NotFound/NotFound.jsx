import BackPage from "../../components/BackPage/BackPage";
import {Link} from "react-router-dom";

function NotFound({props}) {
	
	return(
		<>
			<BackPage title={props?.title || 'Page not found'} />
			<div className="flex-grow px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
				<div className="max-w-max mx-auto">
					<div className="sm:flex">
						<p className="text-4xl font-extrabold text-white sm:text-7xl">404</p>
						<div className="sm:ml-6">
							<div className="sm:border-l sm:border-gray-200 sm:pl-6">
								<h1 className="text-4xl leading-normal font-extrabold text-gradient tracking-tight mb-3 sm:text-5xl sm:leading-normal">Page
									not found</h1>
								<p className="mt-1 text-base text-gray-400">Perhaps the page is not filled in yet or the url is entered incorrectly</p>
							</div>
							<div className="mt-5 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
								<Link to="/"
									  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
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
