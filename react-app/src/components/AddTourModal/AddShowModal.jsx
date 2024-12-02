import { useState } from "react";
import { useModal } from "../../context/Modal";

function AddShowModal({ tourId }) {
    const [venue, setVenue] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [headliners, setHeadliners] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const { closeModal } = useModal();

    const handleSubmit = e => {
        e.preventDefault()

        const show = {
            venue,
            city,
            state,
            headliners,
            datetime: "Add date time",
            tourId
        }
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
                />
                <input
                    type="text"
                    value={city}
                    placeholder={"City..."}
                    onChange={(e) => setCity(e.target.value)}
                />
                <input
                    type="text"
                    value={state}
                    placeholder={"State..."}
                    onChange={(e) => setState(e.target.value)}
                />
                <input
                    type="text"
                    value={headliners}
                    placeholder={"Headliners..."}
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

export default AddShowModal;
