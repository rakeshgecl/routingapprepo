//frontend/myapp/App.jsx

//import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {HashRouter, Routes, Route, Link} from "react-router-dom";
import  "./App.css";

import Home from "./home/Home";
import About from "./about/About";
import Login from "./login/Login";

import Dashboard from "./login/Dashboard";
import Profile from "./login/profile/Profile";
import Attendance from "./login/attendance/Attendance";




function App() {
  return (
    <HashRouter>
    {/*<BrowserRouter>*/}

        <div className="home">
            <h1>Student Login System</h1>
            <nav>
                <Link to="/">Home</Link> 
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/:regNo" element={<Dashboard />}>
                <Route path="profile" element={<Profile />} />
                <Route path="attendance" element={<Attendance />} />
            </Route>
        </Routes>
    {/*</BrowserRouter>*/}
    </HashRouter>
  );
}

export default App;