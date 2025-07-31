import { NavLink, Navigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { thunkLogin } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../modals/LoginFormModal";
import SignupFormModal from "../modals/SignupFormModal";
import NewPostModal from "../modals/NewPostModal/NewPostModal";
import ProfileButton from "./ProfileButton";
// import SearchBar from "./SearchBar";
import "./Navigation.css";

function Navigation() {
  const user = useSelector((store) => store.session.user);
  const dispatch = useDispatch();

  const demoSignIn = (e) => {
    e.preventDefault()
    dispatch(thunkLogin({
      email: 'demo@aa.io',
      password: 'password'
    }))
    alert("You are logged in as Demo!")
  }

  return (
    <nav className="navigation">
      <NavLink to="/">
        <div className="nav-buttons margin-lr-10">
          <img
            src="https://i.ibb.co/v33L2FJ/Design-3-1.png"
            className="nav-buttons"
          />
          <img
            src="/web-chord-retro-logo1-cropped.png"
            className="logo"
          />
        </div>
      </NavLink>

      {/* <SearchBar /> */}

      <div className="nav-buttons margin-lr-10">
        {user ? <>
          <OpenModalMenuItem
            itemText={`Create Post`}
            modalComponent={<NewPostModal />}
            setClassName="post-button"
            textIcon={<FaPlus className="icon-plus" />}
          />
          <ProfileButton /> </>:
          <><OpenModalMenuItem
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
        </>}
      </div>
    </nav>
  );
}

export default Navigation;
