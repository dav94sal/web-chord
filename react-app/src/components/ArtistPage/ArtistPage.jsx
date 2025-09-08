import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLatestTour } from "../../redux/tour";
import { getArtistById } from "../../redux/artist";
import { getArtistMerch } from "../../redux/merch";
import MerchTile from "./tiles/MerchTile";
import ShowTile from "./tiles/ShowTile";
import SocialMediaButtons from "./tiles/SocialMediaButtons";
import "./artist-page.css"

function ArtistPage() {
    const [tour, setTour] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { artistId } = useParams()
    const artist = useSelector(state => state.artists[artistId])
    const dispatch = useDispatch()
    const merchObj = useSelector(state => state.merch);
    const merchandise = Object.values(merchObj).reverse();
    let shows;

    if (tour?.shows) {
        shows = Object.values(tour.shows)
    }

    useEffect(() => {
        dispatch(getLatestTour(artistId))
            .then(data => setTour(data))
            .then(() => dispatch(getArtistById(artistId)))
            .then(() => dispatch(getArtistMerch(artistId)))
            .then(() => setIsLoading(false))

    }, [dispatch,artistId])

    return (
        <div className="artist-page-layout">
            {!isLoading && <>
            <div className="band-pic">
                <img
                    className="band-pic pic"
                    src="https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Pngtree-audiences-in-club-musical-8485712.png"
                    alt="audiences-in-club-musical"
                />
            </div>
            <div className="artist-buttons">
                <SocialMediaButtons artist={artist}/>
            </div>
            <div className="artist-content">
                <div className="tour-container">
                    { tour.none ?
                        <h3 className="artist-headers">No Tours Yet...</h3> :
                        <h3 className="artist-headers">{tour.name}</h3>
                    }
                    <div className="shows-container">
                        {tour && shows?.length ? shows.map(show => (
                            <div className="show-tile" key={`show${show.id}`}>
                                <ShowTile show={show} />
                            </div>
                        )) : <p>No shows available yet</p>}
                    </div>
                </div>
                <div className="merch-container">
                    <h3 className="artist-headers">Merch</h3>
                    <div className="tiling-container">
                        {merchandise.length?
                            merchandise.map((merch) => (
                                <a
                                    key={`merch${merch.id}`}
                                    href={merch.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <MerchTile
                                        merch={merch}
                                    />
                                </a>
                            )) : <p>No merchandise yet</p>
                        }
                    </div>
                </div>
            </div>
            </>}
        </div>
    )
}

export default ArtistPage;
