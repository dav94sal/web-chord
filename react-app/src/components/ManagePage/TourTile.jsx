import { useState } from "react";
import OpenModalButton from "../OpenModalButton";
import EditTourModal from "../EditTourModal";
import AddShowModal from "../AddTourModal/AddShowModal"
import ShowTile from "./ShowTile";

function TourTile({ tour }) {
    const [viewShows, setViewShows] = useState(false);
    let shows = null

    if (tour.shows) {
        shows = Object.values(tour.shows)
    }

    return (
        <div>
            <p>{ tour.name }</p>
            <OpenModalButton
                modalComponent={<EditTourModal tour={tour}/>}
                buttonText='Edit Tour'
            />

            <button onClick={() => setViewShows(!viewShows)}
                className="buttons"
            >
                View Shows
            </button>
            <OpenModalButton
                modalComponent={<AddShowModal tourId={tour.id}/>}
                buttonText='Add Show'
            />
            <button
                className="buttons"
            >Delete Tour</button>

            {viewShows && shows?.map(show => (
                <ShowTile
                    show={show}
                    key={`show${show.id}`}
                />
            ))}

        </div>
    )
}

export default TourTile;
