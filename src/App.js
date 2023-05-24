import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
// Switch 대신 Routes로 변경

import "./styles/App.scss";
import Home from "./Home";
import Profile from "./Profile";


function App() {

    return (
        /* 기본경로 지정 basename */
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Profile" element={<Profile />}></Route>
            </Routes>
        </Router>
    );
}
export default App;