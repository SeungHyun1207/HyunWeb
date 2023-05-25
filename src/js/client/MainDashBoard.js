import {useState} from "react";
import {Link} from "react-router-dom";

import SideBar from "./SideBar";
import VisitorCounter from "./VisitorCounter";
function MainDashBoard(){

    return (
        <div className="mainWrap">
            {/* 사이드바 */}
            <SideBar/>
            {/* 컨텐츠 */}
            <MainContent />
        </div>
    )

}

function MainContent(){

    return (
        <div className="ContentWrap">
            {/* 컨텐츠 */}
            <div className="ContentTop">
                {/* 공지사항 */}
                <marquee direction="left">
                    <h2>환영합니다! 2023-05-21 ~ 현재 프로젝트 진행중입니다.</h2>
                </marquee>
                {/*<VisitorCounter/>*/}
            </div>
        </div>
    )
}

export default MainDashBoard;