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
    const artists = Object.values(artistsObj)
    const dispatch = useDispatch()

        useEffect(() => {
            let isMounted = true; // Flag to track if the component is mounted

            dispatch(getAllArtists())
                .then(() => {
                    if (isMounted) { // Only update state if the component is still mounted
                        setIsLoading(false);
                    }
                })
                .catch(err => {
                    console.error("Error fetching artists:", err);
                    if (isMounted) {
                        setIsLoading(false);
                    }
                });

        return () => {
            isMounted = false; // Set flag to false when component unmounts
        }

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
