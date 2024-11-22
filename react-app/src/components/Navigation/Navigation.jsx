import { NavLink, useLocation } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Header() {
  const location = useLocation()
  const locations = {
    merch: "Merch",
    "manage-site": "Manage Site",
    artists: "Band Name",
  }

  let header;

  for (let path in locations) {
    if (location.pathname.includes(path)) {
      header = locations[path]
      break
    }
  }

  if (!header) header = "Web Chord";

  return <h1>{ header }</h1>
}

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

      <div className="header">
        <Header />
      </div>

      <ProfileButton />
    </nav>
  );
}

export default Navigation;
