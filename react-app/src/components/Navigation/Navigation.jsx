import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-buttons">
        <NavLink to="/">
          <img
            src="https://i.ibb.co/v33L2FJ/Design-3-1.png"
            className="nav-buttons"
          />
        </NavLink>
      </div>

      <ProfileButton />
    </nav>
  );
}

export default Navigation;
