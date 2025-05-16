import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useLoading } from "../../../context/LoadingContext";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getAllArtists } from "../../../redux/artist";
import ArtistTile from "../tiles/ArtistTile";

function ExploreArtists() {
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
                    <Link
                        to={`/artists/${artist.id}`}
                        key={`artists${artist.id}`}>
                        <ArtistTile
                            artist={artist}
                        />
                    </Link>
                ))}
            </div>}
        </>
    )
}

export default ExploreArtists;
