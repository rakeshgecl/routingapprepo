//src/login/Dashboard.jsx

import {Link, useParams, Outlet } from "react-router-dom";


function Dashboard() {
  const { regNo } = useParams();

  return (
    <div className="dashboard">
      <aside>
        <h2>Dashboard</h2>
        <p>Welcome: {regNo}</p>
      </aside>
      <main>
        <nav>
            <Link to="profile">Profile</Link>
            <Link to="attendance">Attendance</Link>
        </nav>
        <Outlet />
      </main>
    </div>
  );
}
export default Dashboard;