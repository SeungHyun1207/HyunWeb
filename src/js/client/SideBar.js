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
                <div className="instagram sidecont">
                    <Link to="https://instagram.com/s12.hyun07?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" style={{textDecoration: 'none'}}>Instagram</Link>
                </div>
                <div className="trip sidecont">
                    <Link to="/Trip" style={{textDecoration: 'none'}}>Trip</Link>
                </div>
                <div className="game sidecont">
                    <Link to="/Game" style={{textDecoration: 'none'}}>Game</Link>
                </div>
                <div className="study sidecont">
                    <Link to="/Study" style={{textDecoration: 'none'}}>Study</Link>
                </div>
                <div className="portfolio sidecont">
                    <Link to="/PortFolio" style={{textDecoration: 'none'}}>PortFolio</Link>
                </div>
                <div className="setting sidecont">
                    <Link to="/Setting" style={{textDecoration: 'none'}}>Setting</Link>
                </div>
            </div>
        </div>
    )

}

export default SideBar;