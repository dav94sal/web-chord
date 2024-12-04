import OpenModalButton from "../OpenModalButton";
import EditShowModal from "../EditTourModal/EditShowModal";
import DeleteShowModal from "../DeleteModals/DeleteShowModal";

function ShowTile({ show }) {
    const showDate = new Date(show.datetime).toUTCString().split(' ');
    showDate.shift()
    const [month, date, year, time] = showDate
    const [hours, minutes] = time.split(':')

    return (
        <div>
            <p>{`${show.venue} | ${show.city}, ${show.state}`}</p>
            <p>{`with ${show.headliners}`}</p>
            <p>{`${month} ${date}, ${year}`}</p>
            <p>{hours > 12 ?
                `${hours - 12}${parseInt(minutes)? `:${minutes}` : ''}pm`
                : `${hours}am`}
            </p>

            <OpenModalButton
                modalComponent={<EditShowModal show={show}/>}
                buttonText='Edit Show'
            />
            <OpenModalButton
                modalComponent={<DeleteShowModal show={show}/>}
                buttonText='Delete Show'
            />
        </div>
    )
}

export default ShowTile;
