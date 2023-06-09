
import SideBar from "../SideBar";
import {Link} from "react-router-dom";

import "../../../styles/Game.scss";
function Game(){

    return(
        <div className="Game-container">
            <div className="mainWrap">
                {/* 사이드바 */}
                <SideBar/>
                {/* 컨텐츠 */}
                <GameCont />
            </div>
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
            <div className="ContentCont">
                {/* 추후 게이지바로 전환 */}
                <div className="CardWrap">
                    <Link to={"/Game/MapleStory"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>MapleStory 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳은 MapleStory</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Game/SuddenAttack"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>SuddenAttack 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳은 SuddenAttack</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Game/CrazyArcade"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>Crazy Arcade 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳은 Crazy Arcade</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}
export default Game;