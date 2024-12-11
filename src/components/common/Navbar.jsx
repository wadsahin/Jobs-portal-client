import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleSignOut = () =>{
    userSignOut()
    .then(() => {
      alert("User signed-out successfully!");
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  const links = <>
    <div className="flex flex-col lg:flex-row gap-5 text-base font-medium">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/all-jobs">All Jobs</NavLink>
    </div>
  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold hidden md:flex">Jobs Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {
          user ? <>
            <button className="btn btn-info rounded-full text-white">Profile</button>
            <button onClick={handleSignOut} className="btn btn-error text-white">Sign Out</button>
          </> : <>
            <Link to="/register"><button className="btn btn-accent text-white">Register</button></Link>
            <Link to="/login"><button className="btn btn-neutral">Login</button></Link>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;