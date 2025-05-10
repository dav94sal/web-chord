import { NavLink } from "react-router-dom";
import Feed from "./pages/Feed";
import ExploreArtists from "./pages/ExploreArtists";
import "./Home.css"

function Home() {
    // isLoading context necessary for navigation header

    let render = <Feed />

    if (location.pathname.includes('explore')) {
        render = <ExploreArtists />
    } else if (location.pathname.includes('newest-posts')) {
        render = <Feed />
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
                    <li>
                        <NavLink
                            to="/newest-posts"
                            className='nav-link black-text'
                        >
                            New
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
