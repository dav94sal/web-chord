import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getAllArtists } from "../../redux/artist";
import { useLoading } from "../../context/LoadingContext";
import ArtistTile from "./ArtistTile";
import "./Home.css"

function Home() {
    // isLoading context necessary for navigation header
    const { isLoading, setIsLoading } = useLoading()
    const artistsObj = useSelector(state => state.artists)
    const artists = Object.values(artistsObj).reverse()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllArtists())
            .then(() => setIsLoading(false))
    }, [dispatch, setIsLoading])

    return (
        <>
            {!isLoading && <div className="tiling-container">
                {artists.map((artist) => (
                    <Link to={`/artists/${artist.id}` } key={`artists${artist.id}`}>
                        <ArtistTile
                            artist={artist}
                        />
                    </Link>
                ))}
            </div>}
            {/* add a footer with about section */}
        </>
    )
}

export default Home;
