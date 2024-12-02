import OpenModalButton from "../OpenModalButton";
import EditShowModal from "../EditTourModal/EditShowModal";

function ShowTile({ show }) {
    const showDate = new Date(show.datetime).toString().split(' ');
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
                modalComponent={<EditShowModal tour={show}/>}
                buttonText='Edit Show'
            />
            <button
                className="buttons"
            >Delete Show</button>
        </div>
    )
}

export default ShowTile;
