import SideBar from "../SideBar";
import {useState} from "react";

function Jeju(){



    return (

        <div className="mainWrap">
            {/* 사이드바 */}
            <SideBar/>
            {/* 컨텐츠 */}
            <JejuCont />
        </div>

    )

}

function JejuCont() {

    return (
        <div className="ContentWrap">
            {/* 컨텐츠 */}
            <div className="ContentTop">
                <div className="SliderWrap">
                    <div className="SliderItem">
                        <h2>슬라이더 1</h2>
                    </div>
                    <div className="SliderItem">
                        <h2>슬라이더 2</h2>
                    </div>
                    <div className="SliderItem">
                        <h2>슬라이더 3</h2>
                    </div>
                </div>
            </div>
            <div className="ContentCont">
                <div>
                    <h2>Trip 컨텐츠</h2>
                </div>
            </div>
        </div>
    );
}

export default Jeju;