import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { MdExitToApp } from "react-icons/md";
import { thunkLogout } from "../../redux/session";

function ProfileButton() {
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

  return (
    <>
      <button onClick={toggleMenu} className="nav-but">
        <img
          src="https://i.ibb.co/LYJd0Qy/Design-2.png"
          className="nav-buttons"
        />
      </button>
      {showMenu && (
        <ul className={"profile-dropdown"} ref={ulRef}>
          <NavLink>
            <li className="drop-menu-item">
              <div className="menu-icon-container">
                <CgProfile className="menu-icon"/>
              </div>
              <div className="menu-text">
                <p>View Profile</p>
                <p>username</p>
              </div>
            </li>
          </NavLink>
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
          <NavLink to='/manage-tours' onClick={logout}>
            <li className="drop-menu-item">
              <div className="menu-icon-container">
                <MdExitToApp className="menu-icon"/>
              </div>
              <div className="menu-text">
                <p>Log Out</p>
              </div>
            </li>
          </NavLink>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
