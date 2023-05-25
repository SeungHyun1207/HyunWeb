
import SideBar from "./SideBar";
import Content from "./Content";

function Study(){

    return(
        <div className="mainWrap">
            {/* 사이드바 */}
            <SideBar/>
            {/* 컨텐츠 */}
            <Content />
        </div>

    )
}

export default Study;