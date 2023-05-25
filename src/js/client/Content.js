import SideBar from "./SideBar";
import VisitorCounter from "./VisitorCounter";


function Content(){

    return (

        <div className="ContentWrap">
            {/* 컨텐츠 */}
            <div className="ContentTop">
                <VisitorCounter/>
            </div>
        </div>

    )

}

export default Content;