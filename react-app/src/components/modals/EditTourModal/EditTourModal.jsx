import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { editTour } from "../../../redux/tour";

function EditTourModal({ tour }) {
    const [name, setName] = useState(tour.name)
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault()

        const { id } = tour

        dispatch(editTour({ name, id }))
            .then(() => closeModal())
    }

    return (
        <>
            <h2>Edit Name</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="buttons fill-color-black">Submit</button>
                <button
                    type="click"
                    className="buttons fill-color-black"
                    onClick={() => closeModal()}
                >Cancel</button>
            </form>
        </>
    )
}

export default EditTourModal;
