import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getAllArtists } from "../../redux/artist";
import ArtistTile from "./ArtistTile";
import "./Home.css"

function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const artistsObj = useSelector(state => state.artists)
    const artists = Object.values(artistsObj)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllArtists())
            .then(() => setIsLoading(false))
    }, [dispatch])

    return (
        <div className="home-content-layout">
            {!isLoading && <div className="home-content-container">
                {artists.map((artist) => (
                    <Link to={`/artists/${artist.id}` } key={`artists${artist.id}`}>
                        <ArtistTile
                            artist={artist}
                        />
                    </Link>
                ))}
            </div>}
        </div>
    )
}

export default Home;
