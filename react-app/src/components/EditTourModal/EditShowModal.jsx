import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { editShow } from "../../redux/tour";

function EditShowModal({ show }) {
    const [venue, setVenue] = useState(show.venue)
    const [city, setCity] = useState(show.city)
    const [state, setState] = useState(show.state)
    const [openers, setOpeners] = useState(show.openers)
    const [date, setDate] = useState(constructDate(show))
    const [time, setTime] = useState(constructTime(show))
    const [errors, setErrors] = useState({})
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log(show)
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
            openers,
            tour_id: show.tour_id
        }
        const response = await dispatch(editShow(newShow))

        if (response.errors) setErrors(response.errors)
            else closeModal()
    }

    return (
        <>
            <h2>Edit Show</h2>
            {errors.errors && <p>{errors.errors}</p>}
            {errors.server && <p>{errors.server}</p>}
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
                    value={openers}
                    placeholder="Openers"
                    onChange={(e) => setOpeners(e.target.value)}
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

function constructDate(show) {
    const datetime = new Date(show.datetime)
    const year = datetime.getFullYear()
    let day = datetime.getDate()
    let month = datetime.getMonth() + 1

    if (day < 10) day = `0${day}`
    if (month < 10) month = `0${month}`

    return `${year}-${month}-${day}`
}

function constructTime(show) {
    const datetime = new Date(show.datetime)
    let hours = datetime.getUTCHours();
    let minutes = datetime.getUTCMinutes();

    if (hours < 10) hours = `0${hours}`
    if (minutes < 10) minutes = `0${minutes}`

    return `${hours}:${minutes}`
}

export default EditShowModal;
