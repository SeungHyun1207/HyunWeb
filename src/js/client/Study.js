
import SideBar from "./SideBar";
import {Link} from "react-router-dom";

function Study(){

    return(
        <div className="mainWrap">
            {/* 사이드바 */}
            <SideBar/>
            {/* 컨텐츠 */}
            <StudyCont />
        </div>

    )
}

function StudyCont(){

    return (

        <div className="ContentWrap">
            {/* 컨텐츠 */}
            <div className="ContentTop">
                <div>Study Title</div>
            </div>
            <div className="ContentCont">
                {/* 추후 게이지바로 전환 */}
                <div className="CardWrap">
                    {/* Card를 클릭했을 때 들어갈 수 있게끔 하기 */}
                    <div className="Card">
                        <div className="CardTitle">
                            <Link to="/Study/Html" style={{textDecoration: 'none'}}>HTML</Link>
                        </div>
                        <div className="CardCont">
                            <summary>
                                이곳에선 Html에 관한 용어를 설명합니다.
                            </summary>
                        </div>
                    </div>
                    <div className="Card">
                        <div className="CardTitle">
                            <Link to="/Study/CSS" style={{textDecoration: 'none'}}>CSS</Link>
                        </div>
                        <div className="CardCont">
                            <summary>
                                이곳에선 CSS에 관한 용어를 설명합니다.
                            </summary>
                        </div>
                    </div>
                    <div className="Card">
                        <div className="CardTitle">
                            <Link to="/Study/JavaScript" style={{textDecoration: 'none'}}>JavaScript</Link>
                        </div>
                        <div className="CardCont">
                            <summary>
                                이곳에선 JavaScript에 관한 용어를 설명합니다.
                            </summary>
                        </div>
                    </div>
                    <div className="Card">
                        <div className="CardTitle">
                            <Link to="/Study/React" style={{textDecoration: 'none'}}>React</Link>
                        </div>
                        <div className="CardCont">
                            <summary>
                                이곳에선 React에 관한 용어를 설명합니다.
                            </summary>
                        </div>
                    </div>
                    <div className="Card">
                        <div className="CardTitle">
                            <Link to="/Study/CMD" style={{textDecoration: 'none'}}>CMD</Link>
                        </div>
                        <div className="CardCont">
                            <summary>
                                이곳에선 CMD에 관한 용어를 설명합니다.
                            </summary>
                        </div>
                    </div>
                    <div className="Card">
                        <div className="CardTitle">
                            <Link to="/Study/ApacheTomcat" style={{textDecoration: 'none'}}>Apache Tomcat</Link>
                        </div>
                        <div className="CardCont">
                            <summary>
                                이곳에선 Apache Tomcat에 관한 용어를 설명합니다.
                            </summary>
                        </div>
                    </div>
                    <div className="Card">
                        <div className="CardTitle">
                            <Link to="/Study/Thymeleaf" style={{textDecoration: 'none'}}>Thymeleaf</Link>
                        </div>
                        <div className="CardCont">
                            <summary>
                                이곳에선 Thymeleaf에 관한 용어를 설명합니다.
                            </summary>
                        </div>
                    </div>
                    <div className="Card">
                        <div className="CardTitle">
                            <Link to="/Study/GitHub" style={{textDecoration: 'none'}}>GitHub</Link>
                        </div>
                        <div className="CardCont">
                            <summary>
                                이곳에선 GitHub에 관한 용어를 설명합니다.
                            </summary>
                        </div>
                    </div>
                    <div className="Card">
                        <div className="CardTitle">
                            <Link to="/Study/GitLab" style={{textDecoration: 'none'}}>GitLab</Link>
                        </div>
                        <div className="CardCont">
                            <summary>
                                이곳에선 GitLab에 관한 용어를 설명합니다.
                            </summary>
                        </div>
                    </div>
                    <div className="Card">
                        <div className="CardTitle">
                            <Link to="/Study/Linux" style={{textDecoration: 'none'}}>Linux</Link>
                        </div>
                        <div className="CardCont">
                            <summary>
                                이곳에선 Linux에 관한 용어를 설명합니다.
                            </summary>
                        </div>
                    </div>
                    <div className="Card">
                        <div className="CardTitle">
                            <Link to="/Study/Datastructure" style={{textDecoration: 'none'}}>자료구조</Link>
                        </div>
                        <div className="CardCont">
                            <summary>
                                이곳에선 자료구조에 관한 용어를 설명합니다.
                            </summary>
                        </div>
                    </div>

                    <div className="Card">
                        <div className="CardTitle">
                            <Link to="/Study/algorithm" style={{textDecoration: 'none'}}>알고리즘</Link>
                        </div>
                        <div className="CardCont">
                            <summary>
                                이곳에선 알고리즘에 관한 용어를 설명합니다.
                            </summary>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Study;