
import SideBar from "../SideBar";
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
                    <Link to={"/Study/Html"} style={{textDecoration: 'none'}}>
                        <div className="Card Html">
                            <div className="CardTitle">
                                <span>Html 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳에선 Html에 관한 용어를 설명합니다.</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Study/CSS"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>CSS 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳에선 CSS에 관한 용어를 설명합니다.</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Study/JavaScript"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>JavaScript 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳에선 JavaScript에 관한 용어를 설명합니다.</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Study/React"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>React 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳에선 React에 관한 용어를 설명합니다.</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Study/JSP"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>JSP 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳에선 JSP에 관한 용어를 설명합니다.</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Study/CMD"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>CMD 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳에선 CMD에 관한 용어를 설명합니다.</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Study/ApacheTomcat"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>ApacheTomcat 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳에선 Apache Tomcat에 관한 용어를 설명합니다.</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Study/Thymeleaf"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>Thymeleaf 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳에선 Thymeleaf에 관한 용어를 설명합니다.</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Study/GitHub"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>GitHub 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳에선 GitHub에 관한 용어를 설명합니다.</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Study/GitLab"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>GitLab 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳에선 GitLab에 관한 용어를 설명합니다.</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Study/GitLab"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>GitLab 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳에선 GitLab에 관한 용어를 설명합니다.</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Study/Linux"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>Linux 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳에선 Linux에 관한 용어를 설명합니다.</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Study/Datastructure"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>자료구조 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳에선 자료구조 관한 용어를 설명합니다.</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Study/algorithm"} style={{textDecoration: 'none'}}>
                        <div className="Card">
                            <div className="CardTitle">
                                <span>알고리즘 타이틀</span>
                            </div>
                            <div className="CardCont">
                                <span>이곳에선 알고리즘 관한 용어를 설명합니다.</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Study;