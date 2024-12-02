import { useState } from "react";
import { useModal } from "../../context/Modal";

function EditShowModal({ show }) {
    const [venue, setVenue] = useState(show.venue)
    const [city, setCity] = useState(show.city)
    const [state, setState] = useState(show.state)
    const [headliners, setHeadliners] = useState(show.headliners)
    const [date, setDate] = useState(show.date)
    const [time, setTime] = useState(show.time)
    const { closeModal } = useModal();

    return (
        <>
            <h2>Edit Show</h2>
            <form>
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
