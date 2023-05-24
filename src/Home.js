import {useState} from "react";
import {Link} from "react-router-dom";
import Profile from "./Profile";
function Home(){
    
    // 처음 시작할 때 로딩중이라고 표시
    let [loading, setLoading] = useState(true);


    return (
        <div className="fullpage">
            <div>
                <h2>홈 테스트중입니다.</h2>
                <div className="profile">
                    <Link to="/Profile">프로필</Link>
                </div>
            </div>
        </div>
    )
    
}

export default Home;