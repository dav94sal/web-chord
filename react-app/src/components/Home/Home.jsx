import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ExploreArtists from "./pages/ExploreArtists";
import Feed from "./pages/Feed";
import Menu from "../Menu/Menu";
import useWindowDimensions from "../../context/useWindowDimensions";
import "./Home.css";

function Home() {
    const [render, setRender] = useState(<Feed query='fltr=null' />)
    const location = useLocation();
    const { isMobile } = useWindowDimensions();

    useEffect(() => {
        if (location.pathname.includes('explore')) {
            setRender(<ExploreArtists />)
        } else if (location.pathname.includes('popular')) {
            setRender(<Feed query='fltr=popular' />)
        } else if (location.pathname.includes('feed')) {
            setRender(<Feed query='fltr=null' />)
        }
    }, [location.pathname])

    return (
        <>
            {/* sidebar */}
            {isMobile ? null :
                <div className="home-sidebar">
                    <Menu type="home" />
                </div>
            }

            {/* header */}


            {/* main section */}
            <div className="home-main-content">
                {render}
            </div>

            {/* chat */}
            {/* <div className="home-chat">
                <p>Chat</p>
            </div> */}
        </>
    )
}

export default Home;
