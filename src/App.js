import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
// Switch 대신 Routes로 변경

import "./styles/App.scss";
import MainDashBoard from "./js/client/MainDashBoard";
import Profile from "./js/client/Profile";
import Trip from "./js/client/Trip";
import Game from "./js/client/Game";
import Study from "./js/client/Study";
import PortFolio from "./js/client/ProtFolio";
import Setting from "./js/client/Setting";



function App() {

    return (
        /* 기본경로 지정 basename */
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<MainDashBoard />}></Route>
                <Route path="/Profile" element={<Profile />}></Route>
                <Route path="/Trip" element={<Trip />}></Route>
                <Route path="/Game" element={<Game />}></Route>
                <Route path="/Study" element={<Study />}></Route>
                <Route path="/PortFolio" element={<PortFolio />}></Route>
                <Route path="/Setting" element={<Setting />}></Route>
            </Routes>
        </Router>
    );
}
export default App;