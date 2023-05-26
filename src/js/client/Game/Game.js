
import SideBar from "../SideBar";
import {Link} from "react-router-dom";

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
            <div className="ContentCont">
                {/* 추후 게이지바로 전환 */}
                <div className="CardWrap">
                    {/* Card를 클릭했을 때 들어갈 수 있게끔 하기 */}

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