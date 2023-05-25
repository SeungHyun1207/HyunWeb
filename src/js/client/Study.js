
import SideBar from "./SideBar";

function Study(){

    return(
        <div className="mainWrap">
            {/* 사이드바 */}
            <SideBar/>
            {/* 컨텐츠 */}
            <StudyCont />
        </div>

    )
}

function StudyCont(){

    return (

        <div className="ContentWrap">
            {/* 컨텐츠 */}
            <div className="ContentTop">
                <div>Study 컨텐츠테스트</div>
            </div>
        </div>

    )
}

export default Study;