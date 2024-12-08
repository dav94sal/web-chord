import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { newShow } from "../../redux/tour";

function AddShowModal({ tourId }) {
    const [venue, setVenue] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [headliners, setHeadliners] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [errors, setErrors] = useState({})
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault()

        // const date1 = new Date(date)
        console.log(date)

        const show = {
            date,
            time,
            city,
            state,
            venue,
            headliners,
            tour_id: tourId
        }
        const response = await dispatch(newShow(show))

        if (response.errors) setErrors(response.errors)
        else closeModal()
    }

    return (
        <>
            <h2>Create Show</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={venue}
                    placeholder={"Venue..."}
                    onChange={(e) => setVenue(e.target.value)}
                    required
                />
                {errors.venue &&
                    <p className="errors">{errors.venue}</p>}
                <input
                    type="text"
                    value={city}
                    placeholder={"City..."}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                {errors.city &&
                    <p className="errors">{errors.city}</p>}
                <input
                    type="text"
                    value={state}
                    placeholder={"State..."}
                    onChange={(e) => setState(e.target.value)}
                    required
                />
                {errors.state &&
                    <p className="errors">{errors.state}</p>}
                <input
                    type="text"
                    value={headliners}
                    placeholder={"Headliners..."}
                    onChange={(e) => setHeadliners(e.target.value)}
                    required
                />
                {errors.headliners &&
                    <p className="errors">{errors.headliners}</p>}
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                {errors.date &&
                    <p className="errors">{errors.date}</p>}
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
                {errors.time &&
                    <p className="errors">{errors.time}</p>}
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

export default AddShowModal;
