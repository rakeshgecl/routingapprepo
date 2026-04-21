// src/Login.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [regNo, setRegNo] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (regNo !== "") {
      navigate(`/dashboard/${regNo}`);
    }
  };

  return (
    <>
      <div className="page">
        <h2>Student Login</h2>

        <div className="login-box">
          <input
            type="text"
            placeholder="Enter Registration No"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Login;