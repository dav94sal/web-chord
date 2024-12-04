import { useState } from "react";
import OpenModalButton from "../OpenModalButton";
import EditTourModal from "../EditTourModal";
import AddShowModal from "../AddTourModal/AddShowModal"
import DeleteTourModal from "../DeleteModals/DeleteTourModal";
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
            <OpenModalButton
                modalComponent={<DeleteTourModal tourId={tour.id}/>}
                buttonText='Delete Tour'
            />

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
