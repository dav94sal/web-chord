import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import ProfileButton from "./ProfileButton";
import SearchBar from "./SearchBar";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/">
        <div className="nav-buttons margin-lr-10">
          <img
            src="https://i.ibb.co/v33L2FJ/Design-3-1.png"
            className="nav-buttons"
          />
          <img
            src="../../public/web-chord-retro-logo1-cropped.png"
            className="logo"
          />
        </div>
      </NavLink>

      <SearchBar />

      <div className="nav-buttons margin-lr-10">
        <NavLink to='/'>
          <button className={`post-button`}>
            <FaPlus className="icon-plus" />
            <p>
              Create
            </p>
          </button>
        </NavLink>
        <ProfileButton />
      </div>
    </nav>
  );
}

export default Navigation;
