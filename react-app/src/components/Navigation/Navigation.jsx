import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useParams } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import { useLoading } from "../../context/LoadingContext";
import "./Navigation.css";

function Header() {
  const { isLoading, setIsLoading } = useLoading()
  const { artistId } = useParams()
  const artists = useSelector(state => state.artists)
  const artist = artistId ? artists[artistId] : null
  const location = useLocation()
  const locations = {
    merch: "Merch",
    "manage-site": "Manage Site",
    artists: artist?.artistName || null,
  }

  useEffect(() => {
    if (artist) {
      setIsLoading(false)
    }
  }, [setIsLoading, artist])

  let header;

  for (let path in locations) {
    if (location.pathname.includes(path)) {
      header = locations[path]
      break
    }
  }

  if (!header) header = "Web Chord";

  return (
    <>
      {!isLoading && <h1>{ header }</h1>}
    </>
  )
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
