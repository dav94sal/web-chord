import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getAllArtists } from "../../redux/artist";
import { useLoading } from "../../context/LoadingContext";
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

    return (
        <div className="home-container">
            {/* sidebar */}
            <div className="home-sidebar">
                <p>Explore</p>
            </div>

            {/* main section */}
            <div className="home-main-content">
                <div className="main-content-header">
                    <p>search bar</p>
                </div>
                <ExploreArtists />
            </div>

            {/* chat */}
            <div className="home-chat">
                <p>Chat</p>
            </div>
        </div>
    )
}

export default Home;
