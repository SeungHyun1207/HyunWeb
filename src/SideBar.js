import {Link} from "react-router-dom";
function SideBar(){

    return (
        <div className="sideBarWrap">
            <div className="sideBarTop">
                <div className="home">
                    <Link to="/" style={{ textDecoration: 'none' }}>홈</Link>
                </div>
            </div>
            <div className="sideBarCont">
                <div className="profile sidecont">
                    <Link to="/Profile" style={{ textDecoration: 'none' }}>프로필</Link>
                </div>
                <div className="youtube sidecont">
                    <Link to="https://www.youtube.com/channel/UCHC0mo3JMGpzGeV_mLKQ9ug" target="_blank" style={{ textDecoration: 'none' }}>Youtube</Link>
                </div>
                <div className="trip">
                    <Link to="/trip" style={{textDecoration: 'none'}}>Trip</Link>
                </div>
                <div className="setting sidecont">
                    <Link to="/setting" style={{textDecoration: 'none'}}>Setting</Link>
                </div>
            </div>
        </div>
    )

}

export default SideBar;