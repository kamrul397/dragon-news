import React, { use } from "react";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, Logout } = use(AuthContext);
  const handleLogout = () => {
    console.log("logout");
    Logout()
      .then(() => {
        // Logout successful.
        alert("Logout successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center py-4">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-6 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-4 items-center">
        <img src={`${user ? user.photoURL : userIcon}`} alt="" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-8">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
