import { AiFillHome } from "react-icons/ai";
import { FaWpexplorer } from "react-icons/fa6";
// import { BsArrowUpRightCircle } from "react-icons/bs";
import { HiChartBar } from "react-icons/hi";
import ExploreArtists from "./pages/ExploreArtists";
import Feed from "./pages/Feed";
import MenuItem from "./tiles/MenuItem";
import "./Home.css"

function Home() {
    let render = <Feed />

    if (location.pathname.includes('explore')) {
        render = <ExploreArtists />
    } else if (location.pathname.includes('newest-posts')) {
        render = <Feed />
    }

    const sidebarMenus = [
        { icon: AiFillHome, primaryText: 'Home', destination: '/'},
        { icon: HiChartBar, primaryText: 'Popular', destination: '/posts'},
        { icon: FaWpexplorer, primaryText: 'Explore', destination: '/explore'},
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
