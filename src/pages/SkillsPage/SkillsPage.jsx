import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import BackPage from "../../components/BackPage/BackPage";


function SkillsPage({props}) {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <>
            <BackPage title={props?.title || 'Skills'} />

        </>
    )
}

export default SkillsPage;