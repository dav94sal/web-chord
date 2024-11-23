import { useEffect, useState } from "react";
import { getLatestTour } from "../../redux/tour";
import "./artist-page.css"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function ArtistPage() {
    const [tour, setTour] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const { artistId } = useParams()

    useEffect(() => {
        dispatch(getLatestTour(artistId))
            .then(data => setTour(data))
            .then(() => setIsLoading(false))
    }, [dispatch])

    const formatShow = show => {
        const datetime = show.datetime.split(' ')
        const day = datetime[1]
        const month = datetime[2]
        const year = datetime[3]

        return `${show.location} - ${month} ${day}, ${year}`
    }

    return (
        <div className="artist-page-layout">
            <div className="band-pic">
                <img
                    className="band-pic pic"
                    src="https://i.ibb.co/18WsrpZ/Pngtree-audiences-in-club-musical-8485712.png"
                    alt="band picture"
                />
            </div>
            {!isLoading &&
                <div className="tour-container">
                    <h3 id="tour-head">{tour.name}</h3>
                    {tour && tour.shows.map(show => (
                        <p key={`show${show.id}`}>{formatShow(show)}</p>
                    ))}
                </div>
            }
        </div>
    )
}

export default ArtistPage;
