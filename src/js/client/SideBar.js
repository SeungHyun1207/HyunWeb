import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function SideBar(){

    /*// 처음에 닫힌 상태로
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
    }*/

    let instagramStyle = {
        background: `radial-gradient(circle farthest-corner at 32% 106%, rgb(255, 225, 125) 0%, rgb(255, 205, 105) 10%, rgb(250, 145, 55) 28%, rgb(235, 65, 65) 42%, transparent 82%), linear-gradient(135deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%)`
    };

    return (
        /* 메뉴 Open 클래스 추가하기! */
        // <div className={`sideBarWrap ${menuOpen ? 'open' : ''}`}>
        <div className="sideBarWrap">
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
                <div className="SNSLink">
                    <div className="youtube">
                        <a href="https://www.youtube.com/channel/UCHC0mo3JMGpzGeV_mLKQ9ug" target="_blank" rel="noopener noreferrer" className="menu" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faYoutube} beat style={{color: "#ff0000",}}>
                            </FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="instagram">
                        <a href="https://instagram.com/s12.hyun07?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" className="menu" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faInstagram} beat style={instagramStyle}>
                                <div className="instagramStyle"></div>
                            </FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </div>
            <div className="sideBarCont">
                <div className="profile sidecont">
                    <Link to="/Profile" className="menu" style={{ textDecoration: 'none' }}>
                        <span className="menuLink">프로필</span>
                    </Link>
                </div>
                <div className="trip sidecont">
                    <Link to="/Trip" className="menu" style={{ textDecoration: 'none' }}>
                        <span className="menuLink">Trip</span>
                    </Link>
                </div>
                <div className="game sidecont">
                    <Link to="/Game" className="menu" style={{ textDecoration: 'none' }}>
                        <span className="menuLink">Game</span>
                    </Link>
                </div>
                <div className="study sidecont">
                    <Link to="/Study" className="menu" style={{ textDecoration: 'none' }}>
                        <span className="menuLink">Study</span>
                    </Link>
                </div>
                <div className="portfolio sidecont">
                    <Link to="/PortFolio" className="menu" style={{ textDecoration: 'none' }}>
                        <span className="menuLink">PortFolio</span>
                    </Link>
                </div>
                <div className="setting sidecont">
                    <Link to="/Setting" className="menu" style={{ textDecoration: 'none' }}>
                        <span className="menuLink">Setting</span>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default SideBar;