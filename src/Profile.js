import {Link} from "react-router-dom";


function Profile(){

    return <div className="fullpage">
        <div>
            <h2>테스트중입니다.</h2>
            <div className="profile">
                <Link to="/">프로필</Link>
            </div>
        </div>
    </div>
}

export default Profile;