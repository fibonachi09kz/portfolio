import BackPage from "../../components/BackPage/BackPage";
import {useLocation, useParams} from "react-router-dom";
import {getSkill} from "../../tools/getAnything";
import {useEffect} from "react";
import NotFound from "../NotFound/NotFound";

function SkillDetailPage() {

    let params = useParams();
    let skill = getSkill(params.id) || undefined;

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <>
            {skill.elems
                ?
                <>
                    <BackPage title={skill.title} />
                    <div className="bg-white w-full border shadow overflow-hidden sm:rounded-lg my-10 max-w-7xl mx-auto">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">{skill.title}</h3>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">

                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-5">
                                {skill.elems.map((element) => (
                                    <div className="sm:col-span-1" key={element.id}>
                                        <dd className="mt-1 text-sm text-gray-900 pb-2 border-b">{element}</dd>
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