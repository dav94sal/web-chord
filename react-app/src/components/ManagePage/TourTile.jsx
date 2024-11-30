import OpenModalButton from "../OpenModalButton";
import EditTourModal from "../EditTourModal";

function TourTile({ tour }) {
    return (
        <div>
            <p>{ tour.name }</p>
            <OpenModalButton
                modalComponent={<EditTourModal tour={tour}/>}
                buttonText='Edit'
            />

            <button>Shows</button>
            <button>Delete</button>
        </div>
    )
}

export default TourTile;
