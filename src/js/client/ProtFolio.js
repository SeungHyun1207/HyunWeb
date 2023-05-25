
import SideBar from "./SideBar";

function PortFolio(){

    return(
        <div className="mainWrap">
            {/* 사이드바 */}
            <SideBar/>
            {/* 컨텐츠 */}
            <PortFolioCont />
        </div>

    )
}

function PortFolioCont(){

    return (

        <div className="ContentWrap">
            {/* 컨텐츠 */}
            <div className="ContentTop">
                <div>PortFolio 컨텐츠테스트</div>
            </div>
        </div>

    )
}

export default PortFolio;