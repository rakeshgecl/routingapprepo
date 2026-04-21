//src/login/Profile.jsx


import { useParams } from "react-router-dom";

function Profile() {
  const { regNo } = useParams();

  return <p className="page">Profile of {regNo}</p>;
}

export default Profile;