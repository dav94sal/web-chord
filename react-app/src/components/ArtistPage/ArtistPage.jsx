import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getLatestTour } from "../../redux/tour";
import { getArtistById } from "../../redux/artist";
import ShowTile from "./ShowTile";
import SocialMediaButtons from "./SocialMediaButtons";
import "./artist-page.css"

function ArtistPage() {
    const [tour, setTour] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const { artistId } = useParams()
    const navigate = useNavigate()
    let shows;

    if (tour?.shows) {
        shows = Object.values(tour.shows)
    }

    useEffect(() => {
        dispatch(getLatestTour(artistId))
            .then(data => setTour(data))
            .then(() => dispatch(getArtistById(artistId)))
            .then(() => setIsLoading(false))
    }, [dispatch,artistId])

    return (
        <div className="artist-page-layout">
            <div className="band-pic">
                <div className="artist-buttons">
                    <SocialMediaButtons />
                    <button
                        className="merch-button buttons"
                        onClick={() => navigate('merch')}
                    >Merch</button>
                </div>
                <img
                    className="band-pic pic"
                    src="https://i.ibb.co/18WsrpZ/Pngtree-audiences-in-club-musical-8485712.png"
                    alt="band picture"
                />
            </div>
            {!isLoading &&
                <div className="tour-container">
                    { tour?
                        <h3 id="tour-head">{tour.name}</h3> :
                        <h3 id="tour-head">No Tours Yet...</h3>
                    }
                    <div className="shows-container">
                        {tour && shows.length ? shows.map(show => (
                            <div className="show-tile" key={`show${show.id}`}>
                                <ShowTile show={show} />
                            </div>
                        )) : <p>No shows available yet</p>}
                    </div>
                </div>
            }
        </div>
    )
}

export default ArtistPage;
