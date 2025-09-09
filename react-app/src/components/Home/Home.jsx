import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ExploreArtists from "./pages/ExploreArtists";
import Feed from "./pages/Feed";
import Menu from "../Menu/Menu";
import useWindowDimensions from "../../context/useWindowDimensions";
import "./Home.css";

function Home() {
    const [render, setRender] = useState(null)
    const [homeWidth, setHomeWidth] = useState("width-65");
    const { isMobile } = useWindowDimensions();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('explore')) {
            setRender(<ExploreArtists />)
            setHomeWidth("width-65");
        } else if (location.pathname.includes('popular')) {
            setRender(<Feed query='fltr=popular' />)
            setHomeWidth(isMobile ? "width-95" : "width-65");
        } else if (location.pathname.includes('feed')) {
            setRender(<Feed query='fltr=null' />)
            setHomeWidth(isMobile ? "width-95" : "width-65");
        }
    }, [location.pathname, isMobile])

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
            <div className={`home-main-content ${homeWidth}`}>
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
