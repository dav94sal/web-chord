import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaWpexplorer } from "react-icons/fa6";
// import { BsArrowUpRightCircle } from "react-icons/bs";
import { HiChartBar } from "react-icons/hi";
import ExploreArtists from "./pages/ExploreArtists";
import Feed from "./pages/Feed";
import MenuItem from "./tiles/MenuItem";
import "./Home.css"

function Home() {
    const [render, setRender] = useState(<Feed query='fltr=null' />)
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('explore')) {
            setRender(<ExploreArtists />)
        } else if (location.pathname.includes('popular')) {
            setRender(<Feed query='fltr=popular' />)
        } else if (location.pathname.includes('feed')) {
            setRender(<Feed query='fltr=null' />)
        }
    }, [location.pathname])

    const sidebarMenus = [
        { icon: FaWpexplorer, primaryText: 'Explore', destination: '/explore'},
        { icon: AiFillHome, primaryText: 'Home', destination: '/feed'},
        { icon: HiChartBar, primaryText: 'Popular', destination: '/popular'},
        // { icon: BsArrowUpRightCircle, primaryText: 'New', destination: '/newest-posts'},
        // { icon: HiChartBar, primaryText: 'All', destination: '/all-posts'},
    ]

    return (
        <>
            {/* sidebar */}
            <div className="home-sidebar">
                <ul className="menu">
                    {sidebarMenus.map((item, i) => {
                        return (<MenuItem
                            icon={item.icon}
                            primaryText={item.primaryText}
                            destination={item.destination}
                            key={`${item.primaryText}${i}`}
                        />)
                    })}
                </ul>
                <div className="side-border"></div>
            </div>


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
