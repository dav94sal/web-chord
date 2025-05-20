import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useParams } from "react-router-dom";
import ProfileButton from "./ProfileButton";
// import { useLoading } from "../../context/LoadingContext";
import SearchBar from "./SearchBar";
import "./Navigation.css";

// function Header() {
//   const { isLoading, setIsLoading } = useLoading()
//   const { artistId } = useParams()
//   const artists = useSelector(state => state.artists)
//   const artist = artistId ? artists[artistId] : null
//   const location = useLocation()
//   const locations = {
//     "manage-tours": "Manage Tours",
//     "manage-merch": "Manage Merch",
//     "artists": artist?.artistName || null,
//   }

//   useEffect(() => {
//     if (artist) {
//       setIsLoading(false)
//     }
//   }, [setIsLoading, artist])

//   let header;

//   for (let path in locations) {
//     if (location.pathname.includes(path)) {
//       header = locations[path]
//       break
//     }
//   }

//   if (!header) header = "Web Chord";

//   return (
//     <>
//       {!isLoading && <h1>{ header }</h1>}
//     </>
//   )
// }

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/">
        <div className="nav-buttons">
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

      {/* <div className="header">
        <Header />
      </div> */}

      <SearchBar />

      <ProfileButton />
    </nav>
  );
}

export default Navigation;
