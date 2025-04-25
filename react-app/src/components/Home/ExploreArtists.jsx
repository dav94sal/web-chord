import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useLoading } from "../../context/LoadingContext";
import ArtistTile from "./ArtistTile";

function ExploreArtists() {
    const { isLoading } = useLoading()
    const artistsObj = useSelector(state => state.artists)
    const artists = Object.values(artistsObj).reverse()

    return (
        <>
            {!isLoading && <div className="tiling-container">
                {artists.map((artist) => (
                    <Link
                        to={`/artists/${artist.id}` }
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
