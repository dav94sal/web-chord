import { MdOutlineEdit } from "react-icons/md";
import { GiTrashCan } from "react-icons/gi";
import OpenModalButton from "../OpenModalButton";
import EditShowModal from "../EditTourModal/EditShowModal";
import DeleteShowModal from "../DeleteModals/DeleteShowModal";
import '../ManagePage/manage-page.css'

function ShowTile({ show }) {
    const showDate = new Date(show.datetime).toUTCString().split(' ');
    showDate.shift()
    let [month, date, year, time] = showDate
    let [hours, minutes] = time.split(':')
    month = parseInt(month)
    hours = parseInt(hours)
    minutes = parseInt(minutes)

    if (minutes < 10 && minutes > 0) minutes = `0${minutes}`

    return (
        <div className="tour-show">
            <p>{`${show.venue} | ${show.city}, ${show.state}`}</p>
            <p>{`with ${show.openers}`}</p>
            <p>{`${month} ${date}, ${year}`}</p>
            <p>{hours > 12 ?
                `${hours - 12}${minutes? `:${minutes}` : ''}pm`
                : `${hours}${minutes? `:${minutes}` : ''}am`}
            </p>

            <div>
                <OpenModalButton
                    modalComponent={<EditShowModal show={show}/>}
                    buttonText={<MdOutlineEdit />}
                    newClass='edit-buttons'
                />
                <OpenModalButton
                    modalComponent={<DeleteShowModal show={show}/>}
                    buttonText={<GiTrashCan />}
                    newClass='delete-buttons'
                />
            </div>
        </div>
    )
}

export default ShowTile;
