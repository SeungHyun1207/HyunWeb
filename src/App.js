import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
// Switch 대신 Routes로 변경

/* 메인 화면 */
import "./styles/App.scss";
import MainDashBoard from "./js/client/MainDashBoard";
import Profile from "./js/client/Profile/Profile";
import Trip from "./js/client/Trip/Trip";
import Game from "./js/client/Game/Game";
import Study from "./js/client/Study/Study";
import PortFolio from "./js/client/PortFolio/PortFolio";
import Setting from "./js/client/Setting/Setting";

/* 서브화면 */
import Jeju from "./js/client/Trip/Jeju";
import Maple from "./js/client/Game/Maple";


function App() {

    return (
        /* 기본경로 지정 basename */
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<MainDashBoard />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Trip" element={<Trip />} />
                <Route path="/Game" element={<Game />} />
                <Route path="/Study" element={<Study />} />
                <Route path="/PortFolio" element={<PortFolio />} />
                <Route path="/Setting" element={<Setting />} />

                <Route path="Trip/Jeju" element={<Jeju />} />

                <Route path="/Game/MapleStory" element={<Maple />} />
            </Routes>
        </Router>
    );
}
export default App;