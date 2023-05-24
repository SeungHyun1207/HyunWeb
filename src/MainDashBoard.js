import {useState} from "react";
import {Link} from "react-router-dom";

import SideBar from "./SideBar";
function MainDashBoard(){

    return (
        <div className="fullpage">
            <div className="mainWrap">
                <h2>메인대시보드 테스트중입니다.</h2>
                <SideBar />
                <div className="profile">
                    <Link to="/Profile">프로필</Link>
                </div>
            </div>
        </div>
    )

}

export default MainDashBoard;