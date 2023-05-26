
import SideBar from "../SideBar";

function Profile(){

    return(
        <div className="mainWrap">
            {/* 사이드바 */}
            <SideBar/>
            {/* 컨텐츠 */}
            <ProfileCont />
        </div>

    )
}

function ProfileCont(){

    return (

        <div className="ContentWrap">
            {/* 컨텐츠 */}
            <div className="ContentTop">
                <div>Profile 컨텐츠테스트</div>
            </div>
        </div>

    )
}

export default Profile;