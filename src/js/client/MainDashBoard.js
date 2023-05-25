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
            <VisitorCounter />
        </div>
    )

}

export default MainDashBoard;