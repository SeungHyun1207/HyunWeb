
import SideBar from "./SideBar";
function Trip(){

    return(
        <div className="mainWrap">
            {/* 사이드바 */}
            <SideBar/>
            {/* 컨텐츠 */}
            <TripCont />
        </div>

    )
}

function TripCont(){

    return (

        <div className="ContentWrap">
            {/* 컨텐츠 */}
            <div className="ContentTop">
                <div>Trip 컨텐츠테스트</div>
            </div>
        </div>

    )

}

export default Trip;