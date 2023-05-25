
import SideBar from "./SideBar";

function Game(){

    return(
        <div className="mainWrap">
            {/* 사이드바 */}
            <SideBar/>
            {/* 컨텐츠 */}
            <GameCont />
        </div>

    )
}

function GameCont(){

    return (

        <div className="ContentWrap">
            {/* 컨텐츠 */}
            <div className="ContentTop">
                <div>Game 컨텐츠테스트</div>
            </div>
        </div>

    )
}
export default Game;