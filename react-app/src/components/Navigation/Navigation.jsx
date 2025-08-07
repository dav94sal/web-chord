import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import OpenModalMenuItem from "./OpenModalMenuItem";
import NewPostModal from "../modals/NewPostModal/NewPostModal";
import useWindowDimensions from "../../context/useWindowDimensions";
import ProfileButton from "./ProfileButton";
// import SearchBar from "./SearchBar";
import "./Navigation.css";

function Navigation() {
  const { width } = useWindowDimensions();
  const user = useSelector((store) => store.session.user);

  const isMobile = width < 768;

  return (
    <nav className="navigation">
      <NavLink to="/">
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
      </NavLink>

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
