import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import {Link} from "react-router-dom";

import {projectList} from "../../data/db";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function Projects () {

    return (
        <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:pt-16 mb-16">
            <h2 className="text-xl font-semibold tracking-wider text-gray-300 text-center">&lt;Projects/&gt;</h2>
            <p className="mt-2 text-3xl font-extrabold text-gradient tracking-normal sm:text-4xl !leading-normal text-center">Projects List</p>
            <div className="flex justify-end">
                <Link to="/projects" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                    View all
                </Link>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                grabCursor={true}
                mousewheel={true}
                keyboard={true}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 4
                    },
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mt-6"
            >
                {projectList.map(( item) => (
                    <SwiperSlide key={item.id} className='flex flex-col text-center bg-gray-800 rounded-lg shadow-sm divide-y divide-gray-900'>
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
                                    <Link to={`projects/${item.id}`}
                                        href={`tel:${item.telephone}`}
                                        className="transition-all relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-300 font-medium rounded-br-lg hover:bg-gray-600"
                                    >
                                        <FontAwesomeIcon className="text-lg" icon={faArrowUpRightFromSquare} />
                                        <span className="ml-3">Detail</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Projects;

