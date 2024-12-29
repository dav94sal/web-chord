import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { thunkLogout, thunkLogin } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.session.user);
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
    closeMenu();
  };

  const redirect = (e) => {
    e.preventDefault();
    navigate('/manage-tours');
    closeMenu();
  }

  const demoSignIn = (e) => {
    e.preventDefault()
    dispatch(thunkLogin({
      email: 'demo@aa.io',
      password: 'password'
    }))
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
      {showMenu && (
        <ul className={"profile-dropdown"} ref={ulRef}>
          {user ? (
            <>
              <li>Welcome to WebChord!</li>
              <li>{user.username}</li>
              <li>
                <button
                  onClick={redirect}
                  className="buttons">Manage Site</button>
                <button
                  onClick={logout}
                  className="buttons">Log Out</button>
              </li>
            </>
          ) : (
            <>
              <li><h3>Welcome to Web Chord</h3></li>
              <OpenModalMenuItem
                itemText="Log In"
                onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
                setClassName="buttons"
              />
              <OpenModalMenuItem
                itemText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
                setClassName="buttons"
              />
              <button
                onClick={demoSignIn}
                className="buttons">Demo Log In</button>
            </>
          )}
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
