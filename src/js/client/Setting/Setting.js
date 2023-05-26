
import SideBar from "../SideBar";

function Setting(){

    return(
        <div className="mainWrap">
            {/* 사이드바 */}
            <SideBar/>
            {/* 컨텐츠 */}
            <SettingCont />
        </div>

    )
}

function SettingCont(){

    return (

        <div className="ContentWrap">
            {/* 컨텐츠 */}
            <div className="ContentTop">
                <div>Setting 컨텐츠테스트</div>
            </div>
        </div>

    )
}

export default Setting;