import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { newShow } from "../../../redux/tour";
import states from "./states";

function AddShowModal({ tourId }) {
    const [venue, setVenue] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [openers, setOpeners] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [errors, setErrors] = useState({})
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault()

        // const date1 = new Date(date)
        // console.log(date)

        const show = {
            date,
            time,
            city,
            state,
            venue,
            openers,
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

                <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                >
                    <option
                        value={null}
                        hidden
                    >State...</option>
                    {Object.entries(states).map((state, i) => (
                        <option
                            value={state[0]}
                            key={`state${i}`}
                        >{state[1]}</option>
                    ))}
                </select>
                {errors.state &&
                    <p className="errors">{errors.state}</p>}

                <input
                    type="text"
                    value={openers}
                    placeholder={"Openers..."}
                    onChange={(e) => setOpeners(e.target.value)}
                    required
                />
                {errors.openers &&
                    <p className="errors">{errors.openers}</p>}

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

                <button
                    type="submit"
                    className="buttons"
                >Submit</button>
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
