import { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
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
        <>
            <div className="tour-tile">
                <div className="name-edit">
                    <p>{ tour.name }</p>
                    <OpenModalButton
                        modalComponent={<EditTourModal tour={tour}/>}
                        buttonText={<MdOutlineEdit />}
                        newClass='edit-name-button'
                    />
                </div>
                <div className="tour-buttons">
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
                        buttonText={<IoTrashBinOutline />}
                        newClass='delete-buttons'                    />
                </div>


            </div>

            {viewShows && shows?.map(show => (
                <ShowTile
                show={show}
                key={`show${show.id}`}
                />
            ))}

            {viewShows && !shows.length &&
                <div className="tour-show">
                    <p>Add some shows...</p>
                </div>}
        </>
    )
}

export default TourTile;
