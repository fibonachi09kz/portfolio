import BackPage from "../../components/BackPage/BackPage";
import {useLocation, useParams} from "react-router-dom";
import {getSkill} from "../../tools/getAnything";
import {useEffect} from "react";
import NotFound from "../NotFound/NotFound";
import {CheckIcon} from "@heroicons/react/solid";

function SkillDetailPage() {

    let params = useParams();
    let skill = getSkill(params.id) || undefined;

    return(
        <>
            {skill.elems
                ?
                <>
                    <BackPage title={skill.title} />
                    <div className="px-6 sm:px-6 lg:px-8">
                        <div className="bg-gray-800 max-w-7xl mx-auto p-6 sm:p-12 rounded-md">
                            <div className="max-w-3xl mx-auto text-center">
                                <h2 className="text-3xl font-extrabold text-white">{skill.title}</h2>
                                <p className="mt-4 text-lg text-gray-700">
                                    {skill.description}
                                </p>
                            </div>
                            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                                {skill.elems.map((element) => (
                                    <div key={element.id} className="relative">
                                        <dt>
                                            <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                                            <p className="ml-9 text-lg leading-6 font-medium text-gray-300">{element.title}</p>
                                        </dt>
                                        <dd className="mt-2 ml-9 text-base text-gray-500">{element.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </>
                :
                <NotFound />
            }
        </>
    )
}
export default SkillDetailPage;
