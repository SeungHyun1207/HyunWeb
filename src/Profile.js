import {Link} from "react-router-dom";


function Profile(){

    return (
        <div className="profileWrap">
            <h2>테스트중입니다.</h2>
            <div className="profile">
                <Link to="/">홈</Link>
            </div>
        </div>
    )
}

export default Profile;