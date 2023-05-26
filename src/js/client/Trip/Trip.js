
import SideBar from "../SideBar";
import {Link} from "react-router-dom";
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
            <div className="ContentCont">
                {/* 추후 게이지바로 전환 */}
                <div className="CardWrap">
                    <Link to={"/Trip/Jeju"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>Jeju 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>여기는 제주</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Trip/Jeju"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>Jeju 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>여기는 제주</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Trip/Jeju"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>Jeju 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>여기는 제주</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )

}

export default Trip;