import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom";
import { getAllArtists } from "../../redux/artist";
import { useLoading } from "../../context/LoadingContext";
import Feed from "./Feed";
import ExploreArtists from "./ExploreArtists";
import "./Home.css"

function Home() {
    // isLoading context necessary for navigation header
    const { setIsLoading } = useLoading()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllArtists())
            .then(() => setIsLoading(false))
    }, [dispatch, setIsLoading])

    let render = <Feed />

    if (location.pathname.includes('explore')) {
        render = <ExploreArtists />
    }

    return (
        <>
            {/* sidebar */}
            <div className="home-sidebar">
                <ul className="menu">
                    <li>
                        <NavLink
                            to="/"
                            className='nav-link black-text'
                        >
                            Home
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                            to="/explore"
                            className='nav-link black-text'
                        >
                            Explore
                        </NavLink>

                    </li>
                </ul>
            </div>

            {/* main section */}
            <div className="home-main-content">
                <div className="main-content-header">
                    <p>search bar</p>
                </div>
                {render}
            </div>

            {/* chat */}
            <div className="home-chat">
                <p>Chat</p>
            </div>
        </>
    )
}

export default Home;
