import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import OpenModalMenuItem from "./OpenModalMenuItem";
import NewPostModal from "../modals/NewPostModal/NewPostModal";
import useWindowDimensions from "../../context/useWindowDimensions";
import ProfileButton from "./ProfileButton";
import Menu from "../Menu/Menu";
// import SearchBar from "./SearchBar";
import "./Navigation.css";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuType, setMenuType] = useState("home");
  const user = useSelector((store) => store.session.user);
  const { isMobile } = useWindowDimensions();
  const ulRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('manage')) {
        setMenuType("manageArtists");
    } else {
        setMenuType("home");
    }
  }, [location.pathname])

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

    const toggleMenu = (e) => {
      e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
      setShowMenu(!showMenu);
    };

  const closeMenu = () => setShowMenu(false);

  return (
    <nav className="navigation">
      {isMobile ? <>
        <div onClick={toggleMenu} className="nav-buttons margin-lr-10">
          <img
            src="https://i.ibb.co/v33L2FJ/Design-3-1.png"
            className="nav-buttons"
          />
        </div>
        {showMenu &&
          <div ref={ulRef} onClick={closeMenu} >
            <Menu type={menuType} />
          </div>}
      </>
      : <NavLink to="/" >
        <div className="nav-buttons margin-lr-10">
          <img
            src="https://i.ibb.co/v33L2FJ/Design-3-1.png"
            className="nav-buttons"
          />
          {!isMobile && <img
            src="/web-chord-retro-logo1-cropped.png"
            className="logo"
          />}
        </div>
      </NavLink>}

      {/* <SearchBar /> */}

      <div className="nav-buttons margin-lr-10">
        {user && <OpenModalMenuItem
          itemText={isMobile ? `` : `Create Post`}
          modalComponent={<NewPostModal />}
          setClassName="post-button"
          textIcon={<FaPlus className="icon-plus" />}
        />}

        <ProfileButton user={user} />
      </div>
    </nav>
  );
}

export default Navigation;
