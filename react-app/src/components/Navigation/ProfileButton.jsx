import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate, Navigate } from "react-router-dom";
// import { FaPlus } from "react-icons/fa6";
// import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { MdExitToApp } from "react-icons/md";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../modals/LoginFormModal";
import SignupFormModal from "../modals/SignupFormModal";
// import NewPostModal from "../modals/NewPostModal/NewPostModal";
import { thunkLogin } from "../../redux/session";
import { thunkLogout } from "../../redux/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    navigate('/')
    alert('Successfully logged out')
    closeMenu();
  };

    const demoSignIn = (e) => {
    e.preventDefault()
    dispatch(thunkLogin({
      email: 'demo@aa.io',
      password: 'password'
    }))
    alert("You are logged in as Demo!")
    closeMenu();
  }

  return (
    <>
      <button onClick={toggleMenu} className="nav-but">
        <img
          src="https://i.ibb.co/LYJd0Qy/Design-2.png"
          className="nav-buttons"
        />
      </button>
      {showMenu && (user ?
        <ul className={"profile-dropdown"} ref={ulRef}>
          {/* <NavLink to={`/`}>
            <li className="drop-menu-item">
              <div className="menu-icon-container">
                <CgProfile className="menu-icon"/>
              </div>
              <div className="menu-text">
                <p>View Profile</p>
                <p>username</p>
              </div>
            </li>
          </NavLink> */}
          <NavLink to='/manage-tours' onClick={closeMenu}>
            <li className="drop-menu-item">
              <div className="menu-icon-container">
                <CiSettings className="menu-icon"/>
              </div>
              <div className="menu-text">
                <p>Manage Site</p>
              </div>
            </li>
          </NavLink>

          <div className="border"></div>

          <div onClick={logout}>
            <li className="drop-menu-item">
              <div className="menu-icon-container">
                <MdExitToApp className="menu-icon"/>
              </div>
              <div className="menu-text">
                <p>Log Out</p>
              </div>
            </li>
          </div>
        </ul>
        : <ul className={"profile-dropdown"} ref={ulRef}>
            <OpenModalMenuItem
              itemText="Log In"
              modalComponent={<LoginFormModal />}
              setClassName="post-button"
            />
            <OpenModalMenuItem
              itemText="Sign Up"
              modalComponent={<SignupFormModal />}
              onModalClose={() => <Navigate to="/artists/new" />}
              setClassName="post-button"
            />
            <button
              onClick={demoSignIn}
              className="post-button">Demo Log In</button>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
