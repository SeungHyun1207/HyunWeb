import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
function SideBar(){

    // 처음에 닫힌 상태로
    let [menuOpen, setMenuOpen] = useState(() => {
        // localStorage에서 메뉴 상태를 가져옴. 없을 경우 기본값은 false로 설정
        const storedMenuState = localStorage.getItem("menuOpen");
        return storedMenuState ? JSON.parse(storedMenuState) : false;
    });
    let [menuOpenCloseActive, setMenuOpenCloseActive] = useState(false);

    useEffect(() => {
        // 메뉴 상태가 변경될 때마다 localStorage에 저장
        localStorage.setItem("menuOpen", JSON.stringify(menuOpen));
        localStorage.setItem("menuOpenCloseActive", JSON.stringify(menuOpenCloseActive));
    }, [menuOpen, menuOpenCloseActive])

    let toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setMenuOpenCloseActive(!menuOpenCloseActive);

        // let menuOpenClose = document.querySelector('.menuOpenClose');
        // menuOpenClose.classList.toggle('active');
    }

    return (
        /* 메뉴 Open 클래스 추가하기! */
        <div className={`sideBarWrap ${menuOpen ? 'open' : ''}`}>
            <div className="sideBarTop">
                <div className="home">
                    <Link to="/" className="logo" style={{ textDecoration: 'none' }}></Link>
                </div>
                {/* 토글메뉴 잠시 중지 > 화살표 방향도 저장되어야함 */}
                {/*<div
                    className={`menuOpenClose ${menuOpenCloseActive ? "active" : ""}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                </div>*/}
                {/*<span>{menuOpen ? '' : ''}</span>*/}
            </div>
            <div className="sideBarCont">
                <div className="profile sidecont">
                    <Link to="/Profile" className="menu" style={{ textDecoration: 'none' }}>프로필</Link>
                </div>
                <div className="youtube sidecont">
                    <a href="https://www.youtube.com/channel/UCHC0mo3JMGpzGeV_mLKQ9ug" target="_blank" rel="noopener noreferrer" className="menu" style={{ textDecoration: 'none' }}>Youtube</a>
                </div>
                <div className="instagram sidecont">
                    <a href="https://instagram.com/s12.hyun07?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" className="menu" style={{ textDecoration: 'none' }}>Instagram</a>
                </div>
                <div className="trip sidecont">
                    <Link to="/Trip" className="menu" style={{ textDecoration: 'none' }}>Trip</Link>
                </div>
                <div className="game sidecont">
                    <Link to="/Game" className="menu" style={{ textDecoration: 'none' }}>Game</Link>
                </div>
                <div className="study sidecont">
                    <Link to="/Study" className="menu" style={{ textDecoration: 'none' }}>Study</Link>
                </div>
                <div className="portfolio sidecont">
                    <Link to="/PortFolio" className="menu" style={{ textDecoration: 'none' }}>PortFolio</Link>
                </div>
                <div className="setting sidecont">
                    <Link to="/Setting" className="menu" style={{ textDecoration: 'none' }}>Setting</Link>
                </div>
            </div>
        </div>
    )

}

export default SideBar;