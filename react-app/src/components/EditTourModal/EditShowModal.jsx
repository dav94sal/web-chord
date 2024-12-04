import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { editShow } from "../../redux/tour";

const constructDate = (show) => {
    const datetime = new Date(show.datetime)
    const year = datetime.getFullYear()
    let day = datetime.getDate()
    let month = datetime.getMonth() + 1

    if (day < 10) day = `0${day}`
    if (month < 10) month = `0${month}`

    return `${year}-${month}-${day}`
}

const constructTime = (show) => {
    const datetime = new Date(show.datetime)
    let hours = datetime.getUTCHours();
    let minutes = datetime.getUTCMinutes();

    if (hours < 10) hours = `0${hours}`
    if (minutes < 10) minutes = `0${minutes}`

    return `${hours}:${minutes}`
}

function EditShowModal({ show }) {
    const [venue, setVenue] = useState(show.venue)
    const [city, setCity] = useState(show.city)
    const [state, setState] = useState(show.state)
    const [headliners, setHeadliners] = useState(show.headliners)
    const [date, setDate] = useState(constructDate(show))
    const [time, setTime] = useState(constructTime(show))
    const [errors, setErrors] = useState({})
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(date)
    })

    const handleSubmit = async e => {
        e.preventDefault();

        const newShow = {
            id: show.id,
            date,
            time,
            city,
            state,
            venue,
            headliners,
            tour_id: show.tour_id
        }
        const response = await dispatch(editShow(newShow))

        if (response.errors) setErrors(response.errors)
        else closeModal()
    }

    return (
        <>
            <h2>Edit Show</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                />
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <input
                    type="text"
                    value={headliners}
                    onChange={(e) => setHeadliners(e.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <button type="submit" className="buttons">Submit</button>
                <button
                    type="click"
                    className="buttons"
                    onClick={() => closeModal()}
                >Cancel</button>
            </form>
        </>
    )
}

export default EditShowModal;
